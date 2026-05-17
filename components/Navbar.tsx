import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/offers", label: "Offers" },
  { href: "/business", label: "For Business" },
  { href: "/about-us", label: "About us" },
  { href: "/support", label: "Support" },
  { href: "/ambassador", label: "Ambassador" },
  { href: "/employer", label: "Employer" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-transparent bg-white">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-oolee-ink hover:text-oolee-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="btn-pink-outline-glow">
            Free Sign Up
          </Link>
          <Link href="#" className="btn-pink">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
