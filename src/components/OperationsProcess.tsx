const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    text: 'We learn your portfolio goals, property types, and operational gaps.',
  },
  {
    num: '02',
    title: 'Site Assessment',
    text: 'Walkthroughs, condition reports, and a clear plan before you commit capital.',
  },
  {
    num: '03',
    title: 'Execution',
    text: 'Renovation, leasing, Section 8 prep, or management with real-time field updates.',
  },
  {
    num: '04',
    title: 'Ongoing Ops',
    text: 'Long-term oversight, tenant coordination, and investor reporting you can trust.',
  },
];

const OperationsProcess = () => {
  return (
    <section className="section-pad band-dark">
      <div className="site-container">
        <div className="max-w-2xl mb-12">
          <p className="section-label section-label-light">How We Work</p>
          <h2 className="display-lg text-white text-balance">
            A clear process from first call to long-term operations
          </h2>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-step">
              <div className="process-num">{step.num}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsProcess;
