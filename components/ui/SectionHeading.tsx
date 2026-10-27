type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase text-text-secondary">
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
        {description}
      </p>
    </div>
  );
}