 const BARS = [1, 2, 3, 4, 5, 6, 7, 8].map((week) => ({
  week,
  height: 28 + week * 9,
}));
 
const BAR_WIDTH = 22;
const GAP = 14;
const BASELINE = 120;
const ACCENT_FROM = 5;
 
export default function ProgressiveOverloadChart() {
  return (
    <figure className="overload-chart">
      <figcaption className="overload-chart__header">
        <h3 className="overload-chart__title">Progressive Overload</h3>
        <p className="overload-chart__subtitle">
          Training load, week by week. Small increases, held under good technique.
        </p>
      </figcaption>
 
      <svg
        viewBox="0 0 300 145"
        role="img"
        aria-label="Bar chart illustrating training load rising gradually across eight weeks, with an upward trend arrow."
        className="overload-chart__svg"
      >
        <line
          x1="0"
          y1={BASELINE}
          x2="300"
          y2={BASELINE}
          className="overload-chart__axis"
        />
 
        {BARS.map(({ week, height }, index) => (
          <rect
            key={week}
            x={index * (BAR_WIDTH + GAP) + 8}
            y={BASELINE - height}
            width={BAR_WIDTH}
            height={height}
            rx="2"
            className={
              index >= ACCENT_FROM
                ? 'overload-chart__bar overload-chart__bar--accent'
                : 'overload-chart__bar'
            }
          />
        ))}
 
        <line
          x1="14"
          y1="78"
          x2="268"
          y2="14"
          className="overload-chart__trend"
        />

        <polygon
          points="278,10 267.6,17.8 265.2,8"
          className="overload-chart__arrow"
        />
 
        <text x="8" y="136" className="overload-chart__axis-label">
          Week 1
        </text>
        <text x="292" y="136" textAnchor="end" className="overload-chart__axis-label">
          Week 8
        </text>
      </svg>
 
      <p className="overload-chart__caption">
        Illustrative only. Progression is gradual and individual &mdash; not a projection
        of your results.
      </p>
    </figure>
  );
}
 