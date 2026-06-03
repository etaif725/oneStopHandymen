import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/schemas/contactFormSchema';
import { BUSINESS_INFO, SERVICES } from '@/constants/business';
import { contactFormPrefillFromSearchParams } from '@/lib/contactFormPrefill';
import { cn } from '@/lib/utils';

const emptyFormState = (): Partial<ContactFormData> => ({
  name: '',
  email: '',
  phone: '',
  propertyType: undefined,
  serviceNeeded: [],
  description: '',
  privacyConsent: false,
  marketingConsent: false,
});

interface LeadGenFormProps {
  variant?: 'default' | 'compact' | 'contact';
}

const LeadGenForm = ({ variant = 'default' }: LeadGenFormProps) => {
  const isContactPage = variant === 'contact';
  const fieldLabelClass = isContactPage ? 'text-sm font-semibold' : 'text-base font-semibold';
  const fieldInputClass = (hasError: boolean) =>
    cn(
      isContactPage ? 'h-11 text-sm' : 'h-12 text-base',
      hasError ? 'border-destructive' : 'border-border/50 focus:border-primary',
    );
  const fieldSelectClass = (hasError: boolean) =>
    cn(
      isContactPage ? 'h-11 text-sm' : 'h-12 text-base',
      hasError ? 'border-destructive' : 'border-border/50 focus:border-primary',
    );
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const prefillAppliedRef = useRef('');

  const [formData, setFormData] = useState<Partial<ContactFormData>>(emptyFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill service + property type from contact CTAs (?serviceId= / ?service=)
  useEffect(() => {
    const paramKey = searchParams.toString();
    if (!paramKey || prefillAppliedRef.current === paramKey) return;

    const prefill = contactFormPrefillFromSearchParams(searchParams);
    if (!prefill) return;

    prefillAppliedRef.current = paramKey;
    setFormData((prev) => ({
      ...prev,
      serviceNeeded: prefill.serviceNeeded,
      propertyType: prefill.propertyType,
      ...(prefill.description ? { description: prefill.description } : {}),
    }));
  }, [searchParams]);

  const services = [...SERVICES.map((s) => s.name), 'Other'];

  const generateId = () => {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomPart}`;
  };

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
      term: params.get('utm_term') || '',
      content: params.get('utm_content') || '',
    };
  };

  const buildUtmString = () => {
    const utm = getUtmParams();
    const parts = [];
    if (utm.source) parts.push(`source=${utm.source}`);
    if (utm.medium) parts.push(`medium=${utm.medium}`);
    if (utm.campaign) parts.push(`campaign=${utm.campaign}`);
    if (utm.term) parts.push(`term=${utm.term}`);
    if (utm.content) parts.push(`content=${utm.content}`);
    return parts.join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactFormSchema.parse(formData);

      const utmParams = getUtmParams();
      const userAgent = navigator.userAgent || '';
      const referrer = document.referrer || '';

      const webhookData = {
        id: generateId(),
        client_name: validatedData.name || '',
        client_email: validatedData.email || '',
        client_phone: validatedData.phone || '',
        property_type: validatedData.propertyType || '',
        service_req: validatedData.serviceNeeded?.join(', ') || '',
        client_note: validatedData.description || '',
        ip: '',
        agent: userAgent,
        ref: referrer,
        source: utmParams.source,
        medium: utmParams.medium,
        utm: buildUtmString(),
        timestamp: new Date().toISOString(),
        regulatory_concent: validatedData.privacyConsent ? 'yes' : 'no',
        marketing_concent: validatedData.marketingConsent ? 'yes' : 'no',
      };

      const results = { telegram: false, webhook: false };
      const submitErrors: string[] = [];

      const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (telegramBotToken && telegramChatId) {
        try {
          const messageParts: string[] = [
            `🏠 *New Lead*`,
            ``,
            `👤 *${webhookData.client_name}*`,
            `📞 ${webhookData.client_phone}`,
            `📧 ${webhookData.client_email}`,
            ``,
            `🔧 *Service:* ${webhookData.service_req}`,
          ];

          if (webhookData.client_note) {
            messageParts.push(`💬 *Message:* ${webhookData.client_note}`);
          }

          const hasTracking = webhookData.source || webhookData.ref || webhookData.utm;
          if (hasTracking) {
            messageParts.push(``, `📊 *Source:*`);
            if (webhookData.source) {
              messageParts.push(
                `  • UTM: ${webhookData.source}${webhookData.medium ? ` / ${webhookData.medium}` : ''}`,
              );
            }
            if (webhookData.ref) messageParts.push(`  • Ref: ${webhookData.ref}`);
          }

          const telegramMessage = messageParts.join('\n').trim();

          const telegramResponse = await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: telegramChatId,
                text: telegramMessage,
                parse_mode: 'Markdown',
              }),
            },
          );

          const telegramResult = await telegramResponse.json();
          if (telegramResponse.ok && telegramResult.ok) {
            results.telegram = true;
          } else {
            console.error('Telegram API error:', telegramResult);
            submitErrors.push('Telegram notification failed');
          }
        } catch (telegramErr) {
          console.error('Telegram send error:', telegramErr);
          submitErrors.push('Telegram notification failed');
        }
      }

      const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK;
      const apiKey = import.meta.env.VITE_FORM_API_KEY;

      if (webhookUrl) {
        try {
          const headers: Record<string, string> = {
            'Content-Type': 'application/json',
          };

          if (apiKey) {
            headers['x-make-apikey'] = apiKey;
          }

          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(webhookData),
          });

          if (response.ok) {
            results.webhook = true;
          } else {
            console.error('Webhook error:', response.statusText);
            submitErrors.push('Webhook submission failed');
          }
        } catch (webhookErr) {
          console.error('Webhook send error:', webhookErr);
          submitErrors.push('Webhook submission failed');
        }
      }

      if (results.telegram || results.webhook) {
        toast({
          title: 'Thank you for contacting us!',
          description: "Your message has been received. We'll get back to you within 1 hour.",
        });

        setFormData(emptyFormState());
      } else {
        throw new Error('Unable to send message. Please try again or contact us directly.');
      }
    } catch (error: unknown) {
      const zodError = error as { errors?: { path: (string | number)[]; message: string }[]; message?: string };
      if (zodError.errors && Array.isArray(zodError.errors)) {
        const fieldErrors: Record<string, string> = {};
        zodError.errors.forEach((err) => {
          if (err.path?.[0]) {
            fieldErrors[String(err.path[0])] = err.message;
          }
        });
        setErrors(fieldErrors);

        toast({
          title: 'Please check your information',
          description: 'Some required fields are missing or invalid. Please review the form and try again.',
          variant: 'destructive',
        });
      } else {
        const errorMessage =
          zodError.message === 'Unable to send message. Please try again or contact us directly.'
            ? zodError.message
            : `Something went wrong. Please try again or contact us directly at ${BUSINESS_INFO.phone}.`;

        toast({
          title: 'Unable to send message',
          description: errorMessage,
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-11 text-sm ${errors.name ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`h-11 text-sm ${errors.email ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`h-11 text-sm ${errors.phone ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Select
            value={formData.propertyType || ''}
            onValueChange={(value) =>
              setFormData({ ...formData, propertyType: value as ContactFormData['propertyType'] })
            }
          >
            <SelectTrigger className={`h-11 text-sm ${errors.propertyType ? 'border-destructive' : 'border-border/50'}`}>
              <SelectValue placeholder="Property Type *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="multi-unit">Multi-Unit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.propertyType && <p className="text-destructive text-xs mt-1">{errors.propertyType}</p>}
        </div>

        <div>
          <Select
            value={formData.serviceNeeded?.[0] || ''}
            onValueChange={(value) => setFormData({ ...formData, serviceNeeded: [value] })}
          >
            <SelectTrigger className={`h-11 text-sm ${errors.serviceNeeded ? 'border-destructive' : 'border-border/50'}`}>
              <SelectValue placeholder="Service Needed *" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceNeeded && <p className="text-destructive text-xs mt-1">{errors.serviceNeeded}</p>}
        </div>

        <div>
          <Textarea
            placeholder="Project details (optional)"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className={`text-sm resize-none ${errors.description ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.description && <p className="text-destructive text-xs mt-1">{errors.description}</p>}
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy-consent-compact"
              checked={formData.privacyConsent}
              onCheckedChange={(checked) => setFormData({ ...formData, privacyConsent: checked as boolean })}
              className={errors.privacyConsent ? 'border-destructive' : ''}
            />
            <label
              htmlFor="privacy-consent-compact"
              className="text-xs text-muted-foreground leading-tight cursor-pointer"
            >
              I agree to the{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                Privacy Policy
              </Link>{' '}
              and consent to the processing of my personal data. *
            </label>
          </div>
          {errors.privacyConsent && <p className="text-destructive text-xs">{errors.privacyConsent}</p>}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="marketing-consent-compact"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => setFormData({ ...formData, marketingConsent: checked as boolean })}
            />
            <label
              htmlFor="marketing-consent-compact"
              className="text-xs text-muted-foreground leading-tight cursor-pointer"
            >
              I would like to receive promotional emails and updates about services and offers.
            </label>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full btn-primary border-0 h-auto py-3.5"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              Schedule a Call
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-center text-muted-foreground text-xs">
          <CheckCircle2 className="inline h-3 w-3 mr-1" />
          No obligation - Free consultation - Quick response
        </p>
      </form>
    );
  }

  if (variant === 'default' || variant === 'contact') {
    return (
      <form onSubmit={handleSubmit} className={cn(isContactPage ? 'space-y-6' : 'space-y-8')}>
        <div className={cn('grid md:grid-cols-2', isContactPage ? 'gap-5' : 'gap-6')}>
          <div className="space-y-2">
            <Label htmlFor="name" className={fieldLabelClass}>
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={fieldInputClass(!!errors.name)}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={fieldLabelClass}>
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={fieldInputClass(!!errors.email)}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className={cn('grid md:grid-cols-2', isContactPage ? 'gap-5' : 'gap-6')}>
          <div className="space-y-2">
            <Label htmlFor="phone" className={fieldLabelClass}>
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={BUSINESS_INFO.phone}
              className={fieldInputClass(!!errors.phone)}
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.phone}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="propertyType" className={fieldLabelClass}>
              Property Type *
            </Label>
            <Select
              value={formData.propertyType || ''}
              onValueChange={(value) =>
                setFormData({ ...formData, propertyType: value as ContactFormData['propertyType'] })
              }
            >
              <SelectTrigger className={fieldSelectClass(!!errors.propertyType)}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="multi-unit">Multi-Unit</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.propertyType && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <span>⚠</span> {errors.propertyType}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceNeeded" className={fieldLabelClass}>
            Service Needed *
          </Label>
          <Select
            value={formData.serviceNeeded?.[0] || ''}
            onValueChange={(value) => setFormData({ ...formData, serviceNeeded: [value] })}
          >
            <SelectTrigger className={fieldSelectClass(!!errors.serviceNeeded)}>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceNeeded && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.serviceNeeded}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className={fieldLabelClass}>
            Project Description (optional)
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={6}
            placeholder="Please describe your project in detail..."
            className={cn(
              'resize-none',
              isContactPage ? 'text-sm' : 'text-base',
              errors.description ? 'border-destructive' : 'border-border/50 focus:border-primary',
            )}
          />
          {errors.description && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.description}
            </p>
          )}
        </div>

        <div
          className={cn(
            'space-y-4 bg-muted/30 rounded-xl border border-border/50',
            isContactPage ? 'p-5' : 'p-6',
          )}
        >
          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy-consent"
              checked={formData.privacyConsent}
              onCheckedChange={(checked) => setFormData({ ...formData, privacyConsent: checked as boolean })}
              className={`mt-0.5 ${errors.privacyConsent ? 'border-destructive' : ''}`}
            />
            <label
              htmlFor="privacy-consent"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              I agree to the{' '}
              <Link to="/privacy-policy" className="text-primary font-semibold hover:underline" target="_blank">
                Privacy Policy
              </Link>{' '}
              and consent to the collection and processing of my personal data for the purpose of responding to my
              inquiry. *
            </label>
          </div>
          {errors.privacyConsent && (
            <p className="text-destructive text-sm flex items-center gap-1 ml-6">
              <span>⚠</span> {errors.privacyConsent}
            </p>
          )}

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing-consent"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => setFormData({ ...formData, marketingConsent: checked as boolean })}
              className="mt-0.5"
            />
            <label
              htmlFor="marketing-consent"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              I would like to receive promotional emails, newsletters, and updates about services and special offers.
              You can unsubscribe at any time.
            </label>
          </div>
        </div>

        <div className={isContactPage ? 'pt-2' : 'pt-4'}>
          <Button
            type="submit"
            size="lg"
            className={cn('w-full btn-primary h-auto text-base', isContactPage ? 'py-3.5' : 'py-4')}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending Message...
              </span>
            ) : (
              <>
                Send Message
                <Send className={cn('ml-2', isContactPage ? 'h-5 w-5' : 'h-6 w-6')} />
              </>
            )}
          </Button>
          <p className="text-center text-muted-foreground text-sm mt-3">
            <CheckCircle2 className="inline h-4 w-4 mr-1" />
            We typically respond within 1 hour during business hours
          </p>
        </div>
      </form>
    );
  }

  return null;
};

export default LeadGenForm;
