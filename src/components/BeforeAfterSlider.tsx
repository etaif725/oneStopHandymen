import { useCallback, useId, useRef, useState } from 'react';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  initialPosition?: number;
};

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before renovation',
  afterAlt = 'After renovation',
  className,
  initialPosition = 50,
}: BeforeAfterSliderProps) => {
  const sliderId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const draggingRef = useRef(false);

  const setPositionFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const { left, width } = container.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPositionFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setPositionFromClientX(event.clientX);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const clipRight = 100 - position;

  return (
    <div
      ref={containerRef}
      className={cn(
        'before-after-slider group relative aspect-[16/10] overflow-hidden border border-border bg-muted touch-none select-none',
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-foreground/90 text-background shadow-lg transition-transform group-hover:scale-105"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <GripVertical className="h-5 w-5" strokeWidth={2.25} />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-sm bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-sm bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
        After
      </span>

      <label htmlFor={sliderId} className="sr-only">
        Drag to compare before and after photos
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="before-after-range-input"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent before visible`}
      />
    </div>
  );
};

export default BeforeAfterSlider;
