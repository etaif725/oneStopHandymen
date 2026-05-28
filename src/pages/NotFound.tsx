import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="section-pad min-h-[60vh] flex items-center pt-[calc(var(--site-top)+4rem)]">
        <div className="site-container text-center max-w-lg mx-auto">
          <p className="section-label">Error 404</p>
          <h1 className="display-xl mb-4">Page not found</h1>
          <p className="lead mb-10">
            The page you requested does not exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return home
            </Link>
            <button
              type="button"
              className="btn-outline-dark inline-flex items-center justify-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              Go back
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
