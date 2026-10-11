import Reveal from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal variant="fade">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
