// Reusable section heading with eyebrow + gradient title
interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mb-3 font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
