import Link from "next/link";
import { Container } from "@/components/global/Container";
import { services } from "@/lib/content/services";
import { roles } from "@/lib/content/solutions";

export function Footer() {
  return (
    <footer className="border-t border-graphite-700 bg-navy-950">
      <Container>
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-offwhite-50">Services</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-electric-600">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-offwhite-50">Solutions</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {roles.map((r) => (
                <li key={r.slug}>
                  <Link href={`/solutions#${r.slug}`} className="hover:text-electric-600">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-offwhite-50">Company</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-electric-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-electric-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-offwhite-50">Legal</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/legal/privacy" className="hover:text-electric-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-electric-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-graphite-700 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Claaps Technology Services. All rights reserved.</p>
          <p>Oracle Governance, Risk &amp; Compliance Specialists</p>
        </div>
      </Container>
    </footer>
  );
}
