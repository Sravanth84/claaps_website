import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/global/Container";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { Badge } from "@/components/global/Badge";
import { CTASection } from "@/components/global/CTASection";
import { caseStudies, getCaseStudyBySlug } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  return { title: caseStudy.headline, description: caseStudy.outcome };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <>
      <section className="border-b border-graphite-700 py-20 md:py-28">
        <Container size="default" className="max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: caseStudy.headline },
            ]}
          />
          <Badge className="mt-6">{caseStudy.industry}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            {caseStudy.headline}
          </h1>
        </Container>
      </section>

      <section className="border-b border-graphite-700 py-20 md:py-28">
        <Container size="default" className="max-w-3xl">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Challenge</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Approach</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">{caseStudy.approach}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Outcome</h2>
              <p className="mt-4 text-base leading-7 text-slate-400">{caseStudy.outcome}</p>
            </div>
          </div>

          {caseStudy.metrics && caseStudy.metrics.length > 0 ? (
            <div className="mt-12 grid gap-6 border-t border-graphite-700 pt-12 sm:grid-cols-3">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-mono-data text-3xl text-cyan-700">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <CTASection title="Discuss a similar challenge" />
    </>
  );
}
