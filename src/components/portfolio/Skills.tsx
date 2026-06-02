// Skills section - animated cards with progress bars
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 88 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Tailwind CSS", level: 88 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "Socket.io", level: 75 },
  { name: "Git & GitHub", level: 88 },
  { name: "Power BI", level: 70 },
  { name: "Excel", level: 80 },
  { name: "Pandas", level: 78 },
  { name: "NumPy", level: 75 },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Tech I work with"
          description="A toolkit I've built through projects, coursework and curiosity"
        />

        <div
          ref={ref}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group rounded-xl border border-border bg-gradient-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-xs font-medium text-primary">
                  {s.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-hero transition-[width] duration-1000 ease-out"
                  style={{ width: visible ? `${s.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
