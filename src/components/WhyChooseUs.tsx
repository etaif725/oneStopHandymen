import { WHY_CHOOSE_US } from '@/constants/business';
import { getIcon } from '@/components/layout/iconMap';

const WhyChooseUs = () => {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Why One Stop</p>
            <h2 className="display-lg text-balance mb-6">
              Not a 9-to-5 management company
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg leading-relaxed text-foreground italic">
                "Most investors are tired of poor communication and management companies
                that disappear after business hours. We built this differently."
              </p>
            </blockquote>
            <p className="lead">
              For remote investors, communication is everything. We operate as a modern
              boots-on-the-ground partner with real-time updates from the field.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.title}>
                  <Icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.75} />
                  <h3 className="font-semibold text-foreground mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
