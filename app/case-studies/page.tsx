import type { Metadata } from "next";
import { Container } from "@/components/global/Container";
import { SectionHeading } from "@/components/global/SectionHeading";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { Badge } from "@/components/global/Badge";
import { PlaceholderBlock } from "@/components/global/PlaceholderBlock";
import { CTASection } from "@/components/global/CTASection";
import { caseStudies, placeholderCaseStudySlots } from "@/lib/content/case-studies";
import { getServiceBySlug } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Claaps Oracle GRC and risk management engagements, by industry and service.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-graphite-700 py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
          <SectionHeading
            as="h1"
            eyebrow="Proof of work"
            title="Case Studies"
            lead="Published case studies require client approval before they go live. Until then, these slots are marked explicitly rather than filled with invented results."
            className="mt-6"
          />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          {caseStudies.length === 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {placeholderCaseStudySlots.map((slot) => {
                const service = getServiceBySlug(slot.serviceSlug);
                return (
                  <div key={slot.industry} className="flex flex-col gap-4">
                    <Badge>{slot.industry}</Badge>
                    {service ? (
                      <p className="text-sm text-slate-400">{service.shortTitle}</p>
                    ) : null}
                    <PlaceholderBlock label="Case study in development — available on request" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((cs) => (
                <a
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="rounded-lg border border-graphite-700 bg-navy-800 p-6 transition-colors duration-200 hover:border-electric-500/40"
                >
                  <Badge>{cs.industry}</Badge>
                  <h3 className="mt-4 text-xl font-medium text-offwhite-50">{cs.headline}</h3>
                  <p className="mt-3 text-sm text-slate-400">{cs.outcome}</p>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title="Discuss a similar challenge"
        lead="References and detailed engagement summaries are available on request during a consultation."
      />
    </>
  );
}
