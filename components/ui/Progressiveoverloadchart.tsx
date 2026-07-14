const BARS = [1, 2, 3, 4, 5, 6, 7, 8].map((week) => ({
  week,
  height: 28 + week * 9,
}));

const BAR_WIDTH = 22;
const GAP = 14;
const BASELINE = 120;

export default function ProgressiveOverloadChart() {
  return (
    <figure className="overload-chart">
      <svg
        viewBox="0 0 300 150"
        role="img"
        aria-label="Illustration of training load increasing gradually across eight weeks."
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
            rx="3"
            className={
              index >= BARS.length - 3
                ? 'overload-chart__bar overload-chart__bar--accent'
                : 'overload-chart__bar'
            }
          />
        ))}
      </svg>

      <figcaption className="overload-chart__caption">
        Illustrative only. Progression is gradual and individual — not a projection
        of your results.
      </figcaption>
    </figure>
  );
}