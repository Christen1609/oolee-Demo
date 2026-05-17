import Image from "next/image";
import Link from "next/link";
import { Offer, offerImage } from "@/lib/catalog";

export default function OfferCard({
  offer,
  featured = false,
  reason,
}: {
  offer: Offer;
  featured?: boolean;
  reason?: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-oolee-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={offerImage(offer)}
          alt={`${offer.brand} offer`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          unoptimized
        />
        {featured && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-pill bg-oolee-pink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-oolee-muted">
          {offer.brand}
        </div>
        <h3 className="text-sm font-semibold text-oolee-ink leading-snug">
          {offer.headline}
        </h3>
        <p className="text-xs leading-relaxed text-oolee-muted">
          {offer.description}
        </p>
        {reason && (
          <p className="mt-1 rounded-md bg-oolee-blue-light px-3 py-2 text-[11px] leading-relaxed text-oolee-blue">
            <span className="font-semibold">Why it matches: </span>
            {reason}
          </p>
        )}
        <div className="mt-auto pt-3">
          <Link href="#" className="btn-pink w-full">
            {offer.claimCtaText}
          </Link>
        </div>
      </div>
    </article>
  );
}
