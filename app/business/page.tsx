import Link from "next/link";
import BrandStrip from "@/components/BrandStrip";
import FeatureCard from "@/components/FeatureCard";
import HomeIllustration from "@/components/HomeIllustration";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export const metadata = {
  title: "For Business | oolee",
};

const BUSINESS_BRANDS = [
  "SUBARU",
  "Breville",
  "endota spa",
  "koala",
  "NordicTrack",
  "NORWEGIAN",
  "Hertz",
];

const BUSINESS_FEATURES = [
  {
    icon: "👥",
    title: "Access to Niche Audience",
    body: "Reach thousands of loyal, engaged teaching and nursing professionals who value your offer.",
  },
  {
    icon: "🛒",
    title: "Wide Variety of Categories",
    body: "Enjoy a diverse range of deals across dining, fashion, wellness, and more, all in one place.",
  },
  {
    icon: "🔒",
    title: "Reach a Closed Member Group",
    body: "We protect your brand by verifying the members who can access your offer.",
  },
  {
    icon: "📣",
    title: "Member-Only Promotions",
    body: "We offer opportunities to elevate your brand's exposure to our members through featured and limited-time offers.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2">
          <Reveal>
            <span className="pill-badge mb-5">For Business</span>
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-oolee-navy md:text-4xl">
              Partner with oolee and Reach{" "}
              <span className="text-oolee-blue">
                Teaching and Nursing Professionals Nationwide
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-oolee-muted">
              Join a growing network of trusted brands providing exclusive deals
              and discounts to teaching and nursing professionals. By partnering
              with oolee, you&apos;ll tap into a dedicated audience of frontline
              workers who are looking for savings across a variety of
              categories.
            </p>
            <div className="mt-7">
              <Link href="#" className="btn-pink">
                Become Partner
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center md:justify-end">
            <HomeIllustration />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <BrandStrip brands={BUSINESS_BRANDS} bg="bg-oolee-bg-alt" />
      </Reveal>

      <section className="bg-oolee-dark py-12">
        <div className="mx-auto max-w-page px-6">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-5">
            <Reveal>
              <h2 className="text-2xl font-bold text-white md:col-span-1">
                Why choose <span className="text-oolee-pink">Us?</span>
              </h2>
            </Reveal>
            <RevealStagger className="grid grid-cols-1 gap-5 md:col-span-4 md:grid-cols-4">
              {BUSINESS_FEATURES.map((f) => (
                <RevealItem key={f.title}>
                  <FeatureCard icon={f.icon} title={f.title} body={f.body} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>
    </>
  );
}
