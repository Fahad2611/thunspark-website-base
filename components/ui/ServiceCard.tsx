import { ArrowUpRight } from "lucide-react";
import type { Service } from "../../content/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_rgba(255,210,31,0.12)]">
      <p className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase text-text-secondary">
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        {service.group}
      </p>
      <div className="flex items-start justify-between gap-5">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {service.name}
        </h3>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {service.tagline}
      </p>
    </article>
  );
}