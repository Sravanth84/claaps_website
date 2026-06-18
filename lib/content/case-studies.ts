export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  industry: string;
  serviceSlug: string;
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics?: CaseStudyMetric[];
};

/**
 * No case studies have been published yet. This array stays empty until
 * real, client-approved case studies exist — the case studies page renders
 * explicit placeholders instead of fabricated entries.
 */
export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const placeholderCaseStudySlots = [
  { industry: "Financial Services", serviceSlug: "oracle-grc" },
  { industry: "Healthcare", serviceSlug: "oracle-risk-management-cloud" },
  { industry: "Energy & Utilities", serviceSlug: "regulatory-compliance-consulting" },
];
