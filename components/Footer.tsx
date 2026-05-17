import Link from "next/link";
import Logo from "./Logo";

const PRODUCT_LINKS = [
  { label: "Offers", href: "/offers" },
  { label: "New Offers", href: "/offers" },
  { label: "Business", href: "/business" },
  { label: "Support", href: "/support" },
];
const POLICY_LINKS = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];
const SUPPORT_LINKS = [
  { label: "FAQ's", href: "/support" },
  { label: "Support", href: "/support" },
];

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-oolee-line text-oolee-muted hover:border-oolee-pink hover:text-oolee-pink"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-oolee-line bg-white">
      <div className="mx-auto max-w-page px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <div className="mt-5 flex items-center gap-2">
              <SocialIcon>
                <span className="text-xs font-bold">f</span>
              </SocialIcon>
              <SocialIcon>
                <span className="text-[10px] font-bold">in</span>
              </SocialIcon>
              <SocialIcon>
                <span className="text-xs">◎</span>
              </SocialIcon>
              <SocialIcon>
                <span className="text-xs">♪</span>
              </SocialIcon>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-oolee-ink">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-oolee-muted">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-oolee-pink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-oolee-ink">
              Policies
            </h4>
            <ul className="space-y-3 text-sm text-oolee-muted">
              {POLICY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-oolee-pink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-oolee-ink">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-oolee-muted">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-oolee-pink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-oolee-line pt-6 text-center text-xs text-oolee-muted">
          Copyright © oolee 2025
        </div>
      </div>
    </footer>
  );
}
