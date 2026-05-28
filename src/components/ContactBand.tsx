import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';

const ContactBand = () => {
  return (
    <section className="band-dark section-pad border-t border-white/10">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 mr-4 gap-12 items-center">
          <div>
            <p className="section-label section-label-light">Ready to start?</p>
            <h2 className="display-lg text-white text-balance mb-4">
              Put a local team on the ground in Arkansas
            </h2>
            <p className="lead lead-light max-w-lg">
              Schedule a call to discuss your properties, portfolio goals, and how we
              can support your next move in Central Arkansas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <Link to="/contact" className="btn-primary w-full sm:w-auto lg:w-full text-center justify-center">
              Schedule a Call
            </Link>
            <a
              href={`tel:+15017370930`}
              className="btn-outline-light w-full sm:w-auto lg:w-full justify-center"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBand;
