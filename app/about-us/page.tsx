import Link from "next/link";
import BrandStrip from "@/components/BrandStrip";
import FeatureCard from "@/components/FeatureCard";
import HomeIllustration from "@/components/HomeIllustration";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export const metadata = {
  title: "About us | oolee",
};

const ABOUT_BRANDS = [
  "HELLO FRESH",
  "SUBARU",
  "Breville",
  "endota spa",
  "koala",
  "NordicTrack",
  "NISSAN",
];

const ABOUT_FEATURES = [
  {
    icon: "🎁",
    title: "Exclusive Discounts",
    body: "Access special offers and discounts from top brands, tailored specifically for teaching and nursing professionals.",
  },
  {
    icon: "✨",
    title: "Wide Variety of Offers",
    body: "Enjoy a diverse range of deals across dining, fashion, wellness, and more, all in one place.",
  },
  {
    icon: "🎫",
    title: "Easy Access to Vouchers",
    body: "Instantly download and redeem your discount with just a few clicks. Savings have never been easier.",
  },
  {
    icon: "📣",
    title: "Member-Only Promotions",
    body: "Gain access to exclusive promotions and limited-time offers available only to our members.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2">
          <Reveal>
            <span className="pill-badge mb-5">About oolee</span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-oolee-navy md:text-5xl">
              Empowering Teachers and Nurses with{" "}
              <span className="text-oolee-blue">Exclusive Savings</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-oolee-muted">
              At oolee, we&apos;re redefining how teaching and nursing
              professionals access discounts and special offers. Our platform
              brings exclusive savings from top brands right to your fingertips,
              helping you enjoy more of life whilst you continue to serve our
              communities. We are teaching and nursing families committed to
              recognising the contributions you make everyday.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#" className="btn-pink">
                Become Member
              </Link>
              <Link href="/business" className="btn-white-outline">
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
        <BrandStrip brands={ABOUT_BRANDS} bg="bg-oolee-bg-alt" />
      </Reveal>

      <section className="bg-oolee-dark py-12">
        <div className="mx-auto max-w-page px-6">
          <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {ABOUT_FEATURES.map((f) => (
              <RevealItem key={f.title}>
                <FeatureCard icon={f.icon} title={f.title} body={f.body} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
