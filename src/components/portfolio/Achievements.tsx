// Achievements section - animated counters and cards
import { useEffect, useRef, useState } from "react";
import { Trophy, Code2, Brain, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Code2, value: 150, suffix: "+", label: "DSA Problems Solved" },
  { icon: Brain, value: 15, suffix: "+", label: "Technologies Learned" },
  { icon: Target, value: 8.66, suffix: "", label: "Current CGPA", decimals: 2 },
  { icon: Trophy, value: 2, suffix: "+", label: "Major Projects" },
];

// Custom hook: animates a number from 0 to target when triggered
function useCounter(target: number, run: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Number((target * p).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, decimals]);
  return value;
}

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones so far"
          description="Numbers that highlight my progress and consistency"
        />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.label} {...it} run={run} />
          ))}
        </div>

        <div className="reveal mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card">
          <p className="text-muted-foreground">
            Strong understanding of{" "}
            <span className="text-foreground font-semibold">
              arrays, recursion, sorting, searching
            </span>{" "}
            and{" "}
            <span className="text-foreground font-semibold">time complexity</span>{" "}
            — practiced consistently on LeetCode and other platforms.
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  value,
  suffix,
  label,
  decimals,
  run,
}: {
  icon: typeof Trophy;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  run: boolean;
}) {
  const v = useCounter(value, run, decimals);
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <p className="font-display text-4xl font-bold text-gradient">
        {v}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
