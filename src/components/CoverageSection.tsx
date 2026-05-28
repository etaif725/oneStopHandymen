import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import ArkansasCoverageMap from '@/components/ArkansasCoverageMap';
import { BUSINESS_INFO } from '@/constants/business';
import { SERVICE_AREA_LOCATIONS, type ServiceAreaLocation } from '@/constants/serviceAreaMap';

const CoverageSection = () => {
  const [activeArea, setActiveArea] = useState<ServiceAreaLocation | null>(null);

  return (
    <section className="section-pad band-muted border-y border-border">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="section-label">Coverage</p>
            <h2 className="display-lg text-balance">Central Arkansas markets</h2>
          </div>
          <p className="lead max-w-md lg:text-right">
            Physically on the ground across the region. Hover the map or select a market below.
          </p>
        </div>

        <div className="coverage-layout">
          <ArkansasCoverageMap
            activeId={activeArea?.id}
            onAreaHover={setActiveArea}
            onAreaSelect={setActiveArea}
          />

          <div className="coverage-sidebar">
            <div className="coverage-sidebar-card">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    {activeArea?.name ?? 'Central Arkansas'}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {activeArea
                      ? activeArea.primary
                        ? 'Headquarters and primary operations hub for investor support across the region.'
                        : `Active service coverage in ${activeArea.name} and surrounding neighborhoods.`
                      : 'Select a pin or market to see where we operate on the ground.'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {SERVICE_AREA_LOCATIONS.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    className="coverage-area-chip"
                    data-active={activeArea?.id === area.id ? 'true' : undefined}
                    data-primary={area.primary ? 'true' : undefined}
                    onMouseEnter={() => setActiveArea(area)}
                    onFocus={() => setActiveArea(area)}
                    onClick={() => setActiveArea(area)}
                  >
                    {area.name}
                  </button>
                ))}
              </div>

              {activeArea && (
                <>
                  <hr className="rule my-6" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Zip codes we serve
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeArea.zipCodes.map((zip) => (
                        <span key={zip} className="coverage-zip-chip">
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="coverage-sidebar-meta">
              <p className="text-muted-foreground text-sm">
                {BUSINESS_INFO.hours.weekdays} · {BUSINESS_INFO.hours.emergency}
              </p>
              <Link to="/contact" className="btn-outline-dark">
                Ask about your market
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
