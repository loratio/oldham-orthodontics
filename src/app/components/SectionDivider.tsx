type SectionDividerProps = {
  from: string;
  to: string;
  variant?: "default" | "tight" | "into-cta" | "out-of-cta";
};

const PATHS = [
  "M0,0 L0,60 C180,100 360,120 540,90 C720,60 900,110 1080,100 C1200,94 1340,70 1440,80 L1440,0 Z",
  "M0,60 C180,100 360,120 540,90 C720,60 900,110 1080,100 C1200,94 1340,70 1440,80 L1440,140 L0,140 Z",
];

export default function SectionDivider({ from, to, variant = "default" }: SectionDividerProps) {
  const wrapperClass =
    variant === "tight"
      ? "section-curve-divider curve-tight"
      : variant === "into-cta"
      ? "section-curve-divider curve-into-cta"
      : variant === "out-of-cta"
      ? "curve-out-of-cta"
      : "section-curve-divider";

  if (variant === "out-of-cta") {
    return (
      <div className={wrapperClass}>
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d="M0,80 C160,120 380,140 600,110 C820,80 1050,125 1260,135 C1360,140 1420,125 1440,115 L1440,180 L0,180 Z"
            fill={to}
          />
        </svg>
      </div>
    );
  }

  if (variant === "into-cta") {
    return (
      <div className={wrapperClass} style={{ background: "transparent" }}>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path
            d="M0,0 L0,50 C120,80 300,110 500,85 C700,60 850,100 1050,110 C1200,117 1350,90 1440,65 L1440,0 Z"
            fill={from}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={{ background: from }}>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path d={PATHS[0]} fill={from} />
        <path d={PATHS[1]} fill={to} />
      </svg>
    </div>
  );
}
