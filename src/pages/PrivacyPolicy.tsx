import PageShell from '@/components/layout/PageShell';

const PrivacyPolicy = () => (
  <PageShell
    banner={{
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your information.',
      breadcrumb: [
        { label: 'Home', to: '/' },
        { label: 'Privacy Policy' },
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
            One Stop Property Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="mt-10 mb-4">Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you voluntarily provide when requesting a quote or contacting us.</li>
            <li><strong>Property Information:</strong> Details about your property, including address, type, and specific service needs.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
          </ul>

          <h2 className="mt-10 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide, operate, and maintain our services</li>
            <li>Process and respond to your service requests and inquiries</li>
            <li>Send you quotes, invoices, and service-related communications</li>
            <li>Improve our website and services</li>
            <li>Communicate with you about promotions, updates, and company news (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-10 mb-4">Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, email service providers, and scheduling tools. These parties are obligated to keep your information confidential.
          </p>

          <h2 className="mt-10 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="mt-10 mb-4">Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
          </p>

          <h2 className="mt-10 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="mt-10 mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="mt-10 mb-4">Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="mt-10 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="mt-10 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
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

export default PrivacyPolicy;
