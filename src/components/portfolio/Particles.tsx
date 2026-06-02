// Floating background particles - pure CSS animated dots
export function Particles() {
  // Pre-defined dot positions for a calm, animated background
  const dots = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-primary/30 blur-sm animate-drift"
          style={{
            width: `${6 + (i % 5) * 4}px`,
            height: `${6 + (i % 5) * 4}px`,
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${14 + (i % 6) * 2}s`,
          }}
        />
      ))}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
    </div>
  );
}
