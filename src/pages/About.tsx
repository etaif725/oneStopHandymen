import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import { BUSINESS_INFO } from '@/constants/business';
import yonatan from '@/assets/yonatan.webp';
import david from '@/assets/david.webp';

const founders = [
  {
    name: 'Jonathan Azbel',
    role: 'Founder',
    imageUrl: yonatan,
    bio: 'Jonathan focuses on planning, oversight, and long-term property performance. He maintains a broader view of priorities, costs, and future needs so properties are managed efficiently over time.',
  },
  {
    name: 'David Vilhovezky',
    role: 'Founder',
    imageUrl: david,
    bio: 'David leads on-the-ground operations, tenant coordination, and project delivery. Investors get clear communication and reliable results at every stage.',
  },
];

const About = () => (
  <PageShell
    banner={{
      eyebrow: 'About',
      title: 'Built for investors who need a real local team',
      description: `Established ${BUSINESS_INFO.established}. Boots on the ground across Central Arkansas.`,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'About' }],
    }}
  >
    <section className="section-pad">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="content-prose max-w-none">
            <p className="section-label">Our story</p>
            <h2 className="display-lg mb-6 text-balance">
              From fragmented vendors to one local team.
            </h2>
            <p>
              One Stop Property Solutions was founded by Jonathan Azbel and David Vilhovezky with a
              mission to bring structure, reliability, and clarity to property services for real
              estate investors.
            </p>
            <p>
              Through years of working with private owners, commercial properties, and investors
              managing assets remotely, they identified recurring challenges caused by fragmented
              service models, scattered responsibility, and a lack of clear oversight.
            </p>
            <p>
              Rather than relying on multiple vendors and short-term solutions, the company was
              built around a centralized approach where communication, execution, and day-to-day
              property needs are handled in one place. This structure allows property owners to
              stay informed, make better decisions, and avoid unnecessary expenses while
              maintaining consistent performance over time.
            </p>
            <p>
              With a strong focus on clear communication and long-term planning, Jonathan and David
              ensure that each client feels involved and confident, as if managing the property
              themselves. The result is a service model that combines hands-on maintenance with
              structured management, designed to reduce friction, support growth, and protect the
              value of every property over the long term.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="Property operations in Arkansas"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>

    <section className="section-pad band-muted border-y border-border">
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
          <div className="border-l-2 border-accent pl-6">
            <p className="section-label">Mission</p>
            <h2 className="display-lg mb-4 text-balance">One team. One point of contact.</h2>
            <p className="text-muted-foreground leading-relaxed">
              We bring structure, reliability, and clarity to property services for real estate
              investors. We are not a traditional 9-to-5 management company. We operate with modern
              communication: real-time updates, group chats, photos from the field, and fast response
              times, so remote owners always know what is happening on the ground.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              From deal evaluation and Section 8 support to leasing and full property management,
              we handle the operational side in one place so you can scale with confidence.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <p className="section-label">Vision</p>
            <h2 className="display-lg mb-4 text-balance">Invest with confidence, from anywhere.</h2>
            <p className="text-muted-foreground leading-relaxed">
              We want every client to feel as involved and informed as if they were managing the
              property themselves, without the friction of juggling multiple vendors or chasing
              updates across disconnected teams.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our vision is a Central Arkansas operation where hands-on maintenance and structured
              management work together: reducing unnecessary costs, supporting portfolio growth, and
              protecting the long-term value of every asset we touch.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="site-container">
        <p className="section-label">Leadership</p>
        <h2 className="display-lg mb-12">Meet the founders</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {founders.map((f) => (
            <div key={f.name} className="border-l-2 border-accent pl-6">
              <img
                src={f.imageUrl}
                alt={f.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-border mb-5"
              />
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-sm text-accent font-medium uppercase tracking-wider mt-1 mb-4">
                {f.role}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad band-dark text-center">
      <div className="site-container max-w-xl">
        <h2 className="display-lg text-white mb-4">Work with us</h2>
        <p className="lead lead-light mb-8">
          Let us be your operational partner in Arkansas.
        </p>
        <Link to="/contact" className="btn-primary">
          Schedule a Call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </PageShell>
);

export default About;
