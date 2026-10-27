import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import { caseStudies } from "../content/case-studies";
import { services } from "../content/services";

export default function Home() {
  return (
    <main className="flex-1 bg-bg-base text-text-primary">
      <section className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <p className="mb-7 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Social-first digital marketing agency
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            More marketing. Better decisions. Real growth.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            ThunSpark is a strategy-led digital marketing agency helping
            ambitious brands turn attention into lasting business growth.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="#featured-work" size="lg">
              Start a project
            </Button>
            <Button href="#manifesto" size="lg" variant="secondary">
              See how we work
            </Button>
          </div>
        </div>
      </section>

      <section aria-label="Selected clients" className="border-y border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-6 sm:flex-row sm:gap-8">
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
            Trusted by
          </p>
          <p className="text-center font-mono text-xs leading-6 tracking-[0.1em] text-text-secondary sm:text-sm">
            COO &amp; CRY <span className="px-2 text-accent">·</span> MEDILOVE
            <span className="px-2 text-accent">·</span> SUNCITY FIRE
            <span className="px-2 text-accent">·</span> HOMEWARE EXPO
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
        id="manifesto"
      >
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-accent">
          A better way to grow
        </p>
        <p className="max-w-5xl font-display text-3xl font-medium leading-tight sm:text-5xl sm:leading-[1.15]">
          You don&apos;t need more marketing. You need a marketing system that
          solves business problems <span className="text-accent">—</span> not
          one that generates more content.
        </p>
      </section>

      <section className="border-y border-border bg-bg-elevated/50" id="services">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <SectionHeading
            align="left"
            description="Strategy, creativity, and execution working together to build sustainable momentum for your business."
            eyebrow="What we do"
            title="Six capabilities. One growth system."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32"
        id="featured-work"
      >
        <SectionHeading
          align="left"
          description="A few of the brands and business challenges we’ve had the pleasure of working on."
          eyebrow="Proof in practice"
          title="Selected Work"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article
              className="overflow-hidden rounded-xl border border-border bg-surface"
              key={caseStudy.slug}
            >
              <div
                aria-label={`Image placeholder for ${caseStudy.client}`}
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-bg-elevated"
                role="img"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-5 border border-border"
                />
                <span className="relative font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                  {caseStudy.client}
                </span>
              </div>
              <div className="flex items-start justify-between gap-6 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {caseStudy.client}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {caseStudy.industry}
                  </p>
                </div>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Case study
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
