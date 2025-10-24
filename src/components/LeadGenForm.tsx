import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2, Send, Phone, Mail, Calendar, Clock, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/schemas/contactFormSchema';

interface LeadGenFormProps {
  variant?: 'default' | 'compact';
}

const LeadGenForm = ({ variant = 'default' }: LeadGenFormProps) => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const promoCode = searchParams.get('promo');
  const serviceFromPromo = searchParams.get('service');
  
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    email: '',
    phone: '',
    propertyType: undefined,
    serviceNeeded: [],
    description: '',
    preferredContact: 'phone',
    bestTimeToReach: '',
  });
  const [promoCodeValue, setPromoCodeValue] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-populate form when coming from promo bar
  useEffect(() => {
    if (promoCode && serviceFromPromo) {
      setPromoCodeValue(promoCode);
      setFormData(prev => ({
        ...prev,
        serviceNeeded: [serviceFromPromo],
        description: `I'm interested in the ${promoCode} promotion for ${serviceFromPromo}.`,
      }));
      
      // Show success toast
      toast({
        title: 'Promo Applied! 🎉',
        description: `${promoCode} has been applied to your quote request.`,
      });
    }
  }, [promoCode, serviceFromPromo, toast]);

  const services = [
    'Handyman Services',
    'Property Staging & Prep',
    'Lock Replacement & Installation',
    'Property Management Solutions',
    'Residential Maintenance',
    'Commercial Property Care',
    'Remodeling & Custom Projects',
    'Pre-Winter Roof Cleaning',
    'Gutter Cleaning Before Winter',
    'Roofing Services',
    'Painting Services',
    'Garage Door Painting',
    'Pressure Washing',
    'Holiday Light Installation',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Combine date and time into bestTimeToReach
      let bestTime = formData.bestTimeToReach || '';
      if (preferredDate || preferredTime) {
        const datePart = preferredDate ? new Date(preferredDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : '';
        const timePart = preferredTime || '';
        bestTime = [datePart, timePart].filter(Boolean).join(' at ');
      }

      const validatedData = contactFormSchema.parse({
        ...formData,
        bestTimeToReach: bestTime,
      });
      
      // Include promo code in the submission
      const submissionData = {
        ...validatedData,
        promoCode: promoCodeValue || undefined,
        submittedAt: new Date().toISOString(),
      };
      
      // Send to webhook
      let webhookUrl = import.meta.env.VITE_FORM_WEBHOOK;
      const apiKey = import.meta.env.VITE_FORM_API_KEY;
      
      if (!webhookUrl) {
        throw new Error('Form webhook URL is not configured');
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Add API key - Make.com can use either header or query parameter
      if (apiKey) {
        // Try as header first
        headers['x-make-apikey'] = apiKey;
        
        // Also add as query parameter for Make.com compatibility
        const url = new URL(webhookUrl);
        url.searchParams.append('apikey', apiKey);
        webhookUrl = url.toString();
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 1 hour.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: undefined,
        serviceNeeded: [],
        description: '',
        preferredContact: 'phone',
        bestTimeToReach: '',
      });
      setPromoCodeValue('');
      setPreferredDate('');
      setPreferredTime('');
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Compact variant - for Hero/sidebar forms
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
            onValueChange={(value: any) => setFormData({ ...formData, propertyType: value })}
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
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceNeeded && <p className="text-destructive text-xs mt-1">{errors.serviceNeeded}</p>}
        </div>

        {/* Promo Code Field */}
        {promoCodeValue && (
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/30 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Tag className="h-4 w-4 text-accent" />
              <Label className="text-xs font-bold text-accent uppercase">Promo Code Applied</Label>
            </div>
            <Input
              value={promoCodeValue}
              readOnly
              className="h-11 text-sm font-bold text-accent bg-white/50 border-accent/30 cursor-not-allowed"
            />
          </div>
        )}
        
        <div>
          <Textarea
            placeholder="Project Description *"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className={`text-sm resize-none ${errors.description ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.description && <p className="text-destructive text-xs mt-1">{errors.description}</p>}
        </div>
        
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm px-8 py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              Get Free Estimate
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        <p className="text-center text-muted-foreground text-xs">
          <CheckCircle2 className="inline h-3 w-3 mr-1" />
          No obligation • Free consultation • Quick response
        </p>
      </form>
    );
  }

  // Default variant - for Contact page (extensive form)
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-12 text-base ${errors.name ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`h-12 text-base ${errors.email ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone & Property Type */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(772) 453-7842"
            className={`h-12 text-base ${errors.phone ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
          />
          {errors.phone && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.phone}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyType" className="text-base font-semibold">Property Type *</Label>
          <Select
            value={formData.propertyType || ''}
            onValueChange={(value: any) => setFormData({ ...formData, propertyType: value })}
          >
            <SelectTrigger className={`h-12 text-base ${errors.propertyType ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}>
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

      {/* Service Needed */}
      <div className="space-y-2">
        <Label htmlFor="serviceNeeded" className="text-base font-semibold">Service Needed *</Label>
        <Select
          value={formData.serviceNeeded?.[0] || ''}
          onValueChange={(value) => setFormData({ ...formData, serviceNeeded: [value] })}
        >
          <SelectTrigger className={`h-12 text-base ${errors.serviceNeeded ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}>
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>{service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.serviceNeeded && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <span>⚠</span> {errors.serviceNeeded}
          </p>
        )}
      </div>

      {/* Promo Code Field */}
      {promoCodeValue && (
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/30 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Tag className="h-5 w-5 text-accent" />
              </div>
              <div>
                <Label className="text-sm font-bold text-accent uppercase tracking-wide">Special Promotion Applied</Label>
                <p className="text-xs text-muted-foreground mt-0.5">This code has been automatically applied to your quote</p>
              </div>
            </div>
            <Input
              value={promoCodeValue}
              readOnly
              className="h-12 text-base font-bold text-accent bg-white border-accent/30 cursor-not-allowed"
            />
          </div>
        </div>
      )}

      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-base font-semibold">Project Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={6}
          placeholder="Please describe your project in detail..."
          className={`text-base resize-none ${errors.description ? 'border-destructive' : 'border-border/50 focus:border-primary'}`}
        />
        {errors.description && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <span>⚠</span> {errors.description}
          </p>
        )}
      </div>

      {/* Contact Preference & Best Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-base font-semibold">Preferred Contact Method *</Label>
          <RadioGroup
            value={formData.preferredContact || ''}
            onValueChange={(value: any) => setFormData({ ...formData, preferredContact: value })}
            className="flex flex-col gap-3"
          >
            <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary/50 hover:bg-primary/5 ${
              formData.preferredContact === 'phone' ? 'border-primary bg-primary/10' : 'border-border/30'
            }`}>
              <RadioGroupItem value="phone" id="phone-contact" />
              <Label htmlFor="phone-contact" className="font-semibold cursor-pointer flex items-center gap-2 flex-1">
                <Phone className="h-4 w-4" />
                Phone
              </Label>
            </div>
            <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary/50 hover:bg-primary/5 ${
              formData.preferredContact === 'email' ? 'border-primary bg-primary/10' : 'border-border/30'
            }`}>
              <RadioGroupItem value="email" id="email-contact" />
              <Label htmlFor="email-contact" className="font-semibold cursor-pointer flex items-center gap-2 flex-1">
                <Mail className="h-4 w-4" />
                Email
              </Label>
            </div>
          </RadioGroup>
          {errors.preferredContact && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.preferredContact}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Best Time to Reach (Optional)</Label>
          <div className="space-y-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
              <Input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="h-12 text-base border-border/50 focus:border-primary pl-10"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
              <Select
                value={preferredTime}
                onValueChange={(value) => setPreferredTime(value)}
              >
                <SelectTrigger className="h-12 text-base border-border/50 focus:border-primary pl-10">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</SelectItem>
                  <SelectItem value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</SelectItem>
                  <SelectItem value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</SelectItem>
                  <SelectItem value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-muted-foreground text-xs">
            Select your preferred date and time for us to contact you
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg md:text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all font-bold border-0"
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
              <Send className="ml-2 h-6 w-6" />
            </>
          )}
        </Button>
        <p className="text-center text-muted-foreground text-sm mt-4">
          <CheckCircle2 className="inline h-4 w-4 mr-1" />
          We typically respond within 1 hour during business hours
        </p>
      </div>
    </form>
  );
};

export default LeadGenForm;
