import { OPERATIONS_SOFT } from '@/constants/copy';

const OperationsProcess = () => {
  return (
    <section className="section-pad band-dark">
      <div className="site-container">
        <div className="max-w-2xl mb-12">
          <p className="section-label section-label-light">{OPERATIONS_SOFT.eyebrow}</p>
          <h2 className="display-lg text-white text-balance">{OPERATIONS_SOFT.title}</h2>
        </div>
        <div className="process-grid">
          {OPERATIONS_SOFT.steps.map((step) => (
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
