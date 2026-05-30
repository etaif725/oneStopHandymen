import { WHY_CHOOSE_US } from '@/constants/business';
import { STORY } from '@/constants/copy';
import { getIcon } from '@/components/layout/iconMap';

const WhyChooseUs = () => {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">{STORY.whyEyebrow}</p>
            <h2 className="display-lg text-balance mb-6">{STORY.whyTitle}</h2>
            <div className="space-y-4 mb-8">
              {STORY.whyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="lead">{STORY.whyLead}</p>
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
