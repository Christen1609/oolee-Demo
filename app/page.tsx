import Link from "next/link";
import { OFFERS } from "@/lib/catalog";
import OfferCard from "@/components/OfferCard";
import FeatureCard from "@/components/FeatureCard";
import BrandStrip from "@/components/BrandStrip";
import HomeIllustration from "@/components/HomeIllustration";
import WaveDecoration from "@/components/WaveDecoration";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

const HOME_BRANDS = [
  "koala",
  "NordicTrack",
  "HelloFresh",
  "new balance",
  "Hertz",
  "NORWEGIAN",
  "nib",
  "NISSAN",
  "Breville",
  "SUBARU",
  "endota spa",
  "Adidas",
  "L'OCCITANE",
  "Norton",
  "LG",
  "Luxury Escapes",
];

const HOME_FEATURES = [
  {
    icon: "🎁",
    title: "Exclusive Discounts",
    body: "Access special offers and discounts from top brands, tailored specifically for teachers and nurses.",
  },
  {
    icon: "✨",
    title: "Wide Variety of Offers",
    body: "Enjoy a diverse range of deals across dining, fashion, wellness, and more, all in one place.",
  },
  {
    icon: "🎫",
    title: "Easy Access to Vouchers",
    body: "Instantly download and redeem your vouchers with just a few clicks. Savings have never been easier.",
  },
  {
    icon: "📣",
    title: "Member-Only Promotions",
    body: "Gain access to exclusive promotions and limited-time offers available only to our members.",
  },
];

const HOME_CATEGORIES = [
  "All",
  "Dining & Food",
  "Fashion & Apparel",
  "Health & Wellness",
  "Travel & Leisure",
  "Entertainment & Streaming",
];

export default function HomePage() {
  const topOffers = OFFERS.slice(0, 6);

  return (
    <>
      <section className="bg-oolee-blue-light">
        <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2">
          <Reveal>
            <span className="pill-badge mb-5">Discounts of up to 50%</span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-oolee-navy md:text-5xl">
              Exclusive Savings for{" "}
              <span className="text-oolee-blue">Teachers &amp; Nurses</span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-oolee-muted">
              Join Our Community to Unlock Great Discounts
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/offers" className="btn-pink">
                Browse Offers
              </Link>
              <Link href="#" className="btn-white-outline">
                Free Member Signup
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center md:justify-end">
            <HomeIllustration />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <BrandStrip brands={HOME_BRANDS} />
      </Reveal>

      <section className="relative overflow-hidden">
        <WaveDecoration />
        <div className="relative mx-auto max-w-page px-6 py-14">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-oolee-navy md:text-4xl">
              Top Offers from Your{" "}
              <span className="text-oolee-pink">Favorite Brands</span>
            </h2>
            <p className="mt-3 text-sm text-oolee-muted">
              Handpicked Offers to Help You Save on Everyday Favorites
            </p>
          </Reveal>

          <RevealStagger className="mt-8 flex flex-wrap justify-center gap-2">
            {HOME_CATEGORIES.map((c, i) => (
              <RevealItem key={c}>
                <span
                  className={`category-pill ${
                    i === 0 ? "category-pill-active" : ""
                  }`}
                >
                  {c}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>

          <RevealStagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topOffers.map((o) => (
              <RevealItem key={o.id}>
                <OfferCard offer={o} featured />
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-10 text-center">
            <Link href="/offers" className="btn-white-outline">
              View all offers
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-oolee-dark py-12">
        <div className="mx-auto max-w-page px-6">
          <RevealStagger className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {HOME_FEATURES.map((f) => (
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
