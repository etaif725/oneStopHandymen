import PageShell from '@/components/layout/PageShell';

const TermsOfUse = () => (
  <PageShell
    banner={{
      eyebrow: 'Legal',
      title: 'Terms of Use',
      description: 'Terms governing use of our website and services.',
      breadcrumb: [
        { label: 'Home', to: '/' },
        { label: 'Terms of Use' },
      ],
    }}
  >
    <section className="section-pad">
      <div className="site-container">
        <div className="content-prose mx-auto">
          <p>
            <strong>Last Updated:</strong> January 2026
          </p>

          <p>
            Welcome to One Stop Property Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Use. Please read them carefully before using our services.
          </p>

          <h2 className="mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing our website or requesting our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="mt-10 mb-4">2. Description of Services</h2>
          <p>
            One Stop Property Solutions provides property maintenance, handyman services, property management, and related services in Central Arkansas. Our services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>General handyman and repair services</li>
            <li>Property staging and preparation</li>
            <li>Residential and commercial maintenance</li>
            <li>Remodeling and custom projects</li>
            <li>Roofing, painting, and pressure washing</li>
            <li>Property management solutions</li>
            <li>Seasonal services including holiday light installation</li>
          </ul>

          <h2 className="mt-10 mb-4">3. Service Agreements</h2>
          <p>
            All service requests are subject to availability and our acceptance. Upon accepting your service request, we will provide you with an estimate or quote. The final scope of work, pricing, and timeline will be agreed upon before work begins. Additional charges may apply for work outside the original scope.
          </p>

          <h2 className="mt-10 mb-4">4. Estimates and Pricing</h2>
          <p>
            We provide free estimates for most services. Estimates are based on the information available at the time and may be subject to change upon further inspection. We strive to provide accurate pricing, but unforeseen conditions may require adjustments. Any changes to the original estimate will be communicated and approved before additional work is performed.
          </p>

          <h2 className="mt-10 mb-4">5. Payment Terms</h2>
          <p>
            Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, credit cards, debit cards, and checks. For larger projects, we may require deposits or progress payments. Late payments may be subject to additional fees as permitted by law.
          </p>

          <h2 className="mt-10 mb-4">6. Cancellation Policy</h2>
          <p>
            You may cancel or reschedule a service appointment with at least 24 hours notice without penalty. Cancellations with less than 24 hours notice may be subject to a cancellation fee. We reserve the right to cancel or reschedule services due to weather, safety concerns, or other circumstances beyond our control.
          </p>

          <h2 className="mt-10 mb-4">7. Property Access</h2>
          <p>
            You agree to provide reasonable access to your property for the performance of services. You are responsible for securing valuables, pets, and personal items. We are not responsible for items left in work areas. Please inform us of any security systems, access codes, or special instructions prior to service.
          </p>

          <h2 className="mt-10 mb-4">8. Warranties and Guarantees</h2>
          <p>
            We stand behind our workmanship and will address any issues related to our work. Warranty terms may vary by service type and will be communicated at the time of service. Warranties do not cover damage caused by misuse, neglect, or normal wear and tear. Materials may be covered by manufacturer warranties.
          </p>

          <h2 className="mt-10 mb-4">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, One Stop Property Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
          </p>

          <h2 className="mt-10 mb-4">10. Insurance and Licensing</h2>
          <p>
            We maintain appropriate business licenses and insurance coverage for the services we provide. Proof of insurance is available upon request. Our team members are trained and qualified to perform the services offered.
          </p>

          <h2 className="mt-10 mb-4">11. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of One Stop Property Solutions and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2 className="mt-10 mb-4">12. User Conduct</h2>
          <p>When using our website, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Submit false or misleading information</li>
            <li>Attempt to interfere with the website's operation</li>
            <li>Use the website for any unlawful purpose</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2 className="mt-10 mb-4">13. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be resolved through binding arbitration in accordance with the laws of the State of Arkansas.
          </p>

          <h2 className="mt-10 mb-4">14. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of Arkansas, without regard to its conflict of law provisions.
          </p>

          <h2 className="mt-10 mb-4">15. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2 className="mt-10 mb-4">16. Contact Information</h2>
          <p>If you have any questions about these Terms of Use, please contact us:</p>
          <div className="border border-border bg-muted/30 p-6 mt-4">
            <p className="font-semibold text-foreground mb-2">One Stop Property Solutions</p>
            <p>Email: Info@onestoppropertyar.com</p>
            <p>Phone: (501) 737-0930</p>
            <p>Service Area: Little Rock, AR & Surrounding Areas</p>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default TermsOfUse;
