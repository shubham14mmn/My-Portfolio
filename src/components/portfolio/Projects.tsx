// Projects section - animated project cards with image placeholders
import { ExternalLink, Github, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Real-Time Chat Application",
    icon: MessageSquare,
    description:
      "A full-stack chat app with real-time messaging, online presence, profile updates and image sharing.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time messaging",
      "Authentication",
      "Online/offline users",
      "Profile updates",
      "Image sharing",
    ],
    gradient: "from-primary/30 to-accent/30",
  },
  {
    title: "Weather Data Analysis",
    icon: BarChart3,
    description:
      "Python-based analysis of weather datasets with cleaning, trend analysis and visualization of rainfall and temperature.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Data cleaning",
      "Trend analysis",
      "Weather visualization",
      "Rainfall & temperature insights",
    ],
    gradient: "from-accent/30 to-primary/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Selected work that reflects what I'm learning and shipping"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-glow"
            >
              {/* Image placeholder */}
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.gradient}`}
              >
                <p.icon className="h-20 w-20 text-foreground/70 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mb-5 space-y-1 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/shubham14mmn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href="https://github.com/shubham14mmn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
