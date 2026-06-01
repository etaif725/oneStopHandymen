import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { PROJECTS_COPY } from '@/constants/copy';
import { PROJECT_GALLERY, getProjectPair } from '@/lib/projectGallery';

const featuredPairs = PROJECTS_COPY.projects.map((_, index) => getProjectPair(index + 1)).filter(
  (pair): pair is NonNullable<typeof pair> => pair !== undefined,
);

const galleryPairs = PROJECT_GALLERY.filter((pair) => pair.id > PROJECTS_COPY.projects.length);

const Projects = () => (
  <PageShell
    banner={{
      eyebrow: 'Projects',
      title: 'Work across Central Arkansas',
      description: PROJECTS_COPY.bannerDescription,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Projects' }],
    }}
  >
    <section className="section-pad border-b border-border">
      <div className="site-container">
        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS_COPY.projects.map((project, index) => {
            const pair = featuredPairs[index] ?? getProjectPair(index + 1);
            if (!pair) return null;

            return (
              <figure key={project.title}>
                <BeforeAfterSlider
                  beforeSrc={pair.before}
                  afterSrc={pair.after}
                  beforeAlt={`${project.title} before renovation`}
                  afterAlt={`${project.title} after renovation`}
                  className="mb-4"
                />
                <figcaption>
                  <span className="text-xs uppercase tracking-widest text-accent">{project.tag}</span>
                  <p className="font-semibold mt-1 mb-2">{project.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.story}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>

    {galleryPairs.length > 0 && (
      <section className="section-pad band-muted border-b border-border">
        <div className="site-container">
          <p className="section-label">{PROJECTS_COPY.galleryEyebrow}</p>
          <h2 className="display-lg text-balance mb-4 max-w-2xl">{PROJECTS_COPY.galleryTitle}</h2>
          <p className="lead max-w-3xl mb-10">{PROJECTS_COPY.galleryDescription}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPairs.map((pair) => (
              <figure key={pair.id}>
                <BeforeAfterSlider
                  beforeSrc={pair.before}
                  afterSrc={pair.after}
                  beforeAlt={`Project ${pair.id} before renovation`}
                  afterAlt={`Project ${pair.id} after renovation`}
                />
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Project {String(pair.id).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="section-pad">
      <div className="site-container text-center">
        <Link to="/contact" className="btn-primary">
          Discuss your project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </PageShell>
);

export default Projects;
