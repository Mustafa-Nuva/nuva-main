type VoiceWaveformProps = {
  bars?: number;
  className?: string;
  height?: number;
};

export default function VoiceWaveform({
  bars = 28,
  className,
  height = 48,
}: VoiceWaveformProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className ?? ""}`}
      style={{ height }}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        const delay = (i % 7) * 0.09;
        const scale = 0.5 + ((i * 37) % 100) / 100;
        return (
          <span
            key={i}
            className="wave-bar"
            style={{
              height: "100%",
              animationDelay: `${delay}s`,
              animationDuration: `${0.9 + (i % 5) * 0.12}s`,
              transform: `scaleY(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
}
