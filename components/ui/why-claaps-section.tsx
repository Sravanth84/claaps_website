import {
  MapPin,
  ClipboardList,
  Award,
  Building2,
  Percent,
  Handshake,
  Network,
  Target,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const reasons: { icon: LucideIcon; text: string }[] = [
  { icon: MapPin, text: "Best in class technology expertise" },
  {
    icon: ClipboardList,
    text: "Full life cycle project management, implementation, migration, support and audit services",
  },
  {
    icon: Award,
    text: "World class senior level subject matter experts in both Oracle GRC and Risk Management Cloud",
  },
  {
    icon: Building2,
    text: "Deep domain knowledge and core expertise in financial, supply chain and procurement",
  },
  {
    icon: Percent,
    text: "Spend up to 65% less on implementation and support without compromising on quality and schedule",
  },
  { icon: Handshake, text: "Adherence to Service Level Agreements (SLA)" },
  {
    icon: Network,
    text: "Innovative and scalable solutions tailored to your needs",
  },
  {
    icon: Target,
    text: "Integrated global delivery model to bring down the cost",
  },
];

export default function WhyClaapsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-electric-600 to-electric-500 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-1/4 -right-1/4 size-[60%] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 size-[55%] rounded-full bg-cyan-700/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.08em] text-white/70">
          Why Claaps
        </p>
        <h2 className="mt-3 text-center text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
          Why work with Claaps?
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <RevealOnScroll key={reason.text} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-4 rounded-xl bg-white p-6 text-center shadow-elevation-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-700/10 text-cyan-700">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <p className="text-sm font-medium leading-snug text-offwhite-50">
                    {reason.text}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
