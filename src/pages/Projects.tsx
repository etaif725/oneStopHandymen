import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import { PROJECTS_COPY } from '@/constants/copy';

const projectImages = [
  'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
];

const Projects = () => (
  <PageShell
    banner={{
      eyebrow: 'Projects',
      title: 'Work across Central Arkansas',
      description: PROJECTS_COPY.bannerDescription,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Projects' }],
    }}
  >
    <section className="section-pad">
      <div className="site-container">
        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS_COPY.projects.map((p, i) => (
            <figure key={p.title} className="group">
              <div className="overflow-hidden border border-border mb-4">
                <img
                  src={projectImages[i]}
                  alt={p.title}
                  className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <figcaption>
                <span className="text-xs uppercase tracking-widest text-accent">{p.tag}</span>
                <p className="font-semibold mt-1 mb-2">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.story}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="btn-primary">
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Projects;
