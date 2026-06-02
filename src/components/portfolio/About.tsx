// About section - intro, education, key facts
import { GraduationCap, MapPin, Code, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: GraduationCap, label: "B.Tech CSE", value: "Galgotias University" },
  { icon: Code, label: "CGPA", value: "8.66 / 10" },
  { icon: MapPin, label: "Location", value: "Bihar, India" },
  { icon: Heart, label: "Passion", value: "Full Stack & DSA" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me"
          description="A quick look at who I am and what I do"
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="reveal space-y-4 text-muted-foreground">
            <p>
              Hello! I'm <span className="text-foreground font-semibold">Shubham Raj</span>,
              a Computer Science Engineering student at{" "}
              <span className="text-foreground font-semibold">Galgotias University</span>{" "}
              with a current CGPA of <span className="text-primary font-semibold">8.66</span>.
            </p>
            <p>
              I'm passionate about <span className="text-foreground font-semibold">Full Stack
              Development</span> and love crafting end-to-end web applications using
              React, Node.js, and MongoDB. Alongside building, I sharpen my problem-solving
              skills daily through <span className="text-foreground font-semibold">Data
              Structures & Algorithms</span>.
            </p>
            <p>
              I enjoy turning ideas into real, working products and continuously learn
              new tools, frameworks, and concepts to grow as a well-rounded developer.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-gradient-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              >
                <f.icon className="mb-3 h-6 w-6 text-primary" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </p>
                <p className="font-semibold">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
