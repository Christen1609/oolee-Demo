// Catalog data is ILLUSTRATIVE for demo purposes. Offer headlines and discount
// values are synthetic and not real oolee promotions.

export type Category =
  | "Auto & Transport"
  | "Everyday & Food"
  | "Health & Fitness"
  | "House & Garden"
  | "Shopping & Fashion"
  | "Wellness & Beauty"
  | "Travel"
  | "Technology";

export type Offer = {
  id: string;
  brand: string;
  category: Category;
  headline: string;
  description: string;
  claimCtaText: string;
  imageBg: string;
  imageFg: string;
};

export const CATEGORIES: Category[] = [
  "Auto & Transport",
  "Everyday & Food",
  "Health & Fitness",
  "House & Garden",
  "Shopping & Fashion",
  "Wellness & Beauty",
  "Travel",
  "Technology",
];

export const OFFERS: Offer[] = [
  {
    id: "hertz-15",
    brand: "Hertz",
    category: "Auto & Transport",
    headline: "15% off any car rental",
    description:
      "Members save 15% on weekly and weekend rentals across Hertz Australia, including 4WDs for regional shifts.",
    claimCtaText: "Claim Your Offer",
    imageBg: "111111",
    imageFg: "FFD400",
  },
  {
    id: "mobile-tyre-shop",
    brand: "Mobile Tyre Shop",
    category: "Auto & Transport",
    headline: "$40 off mobile tyre fitting",
    description:
      "Tyres fitted at home, day or night, ideal for shift workers. Free fitting on a set of four.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFCD00",
    imageFg: "111111",
  },
  {
    id: "nissan-fleet",
    brand: "Nissan",
    category: "Auto & Transport",
    headline: "Healthcare fleet pricing on new Nissans",
    description:
      "Access fleet-tier pricing on selected Nissan models for nurses and teachers via approved dealers.",
    claimCtaText: "Claim Your Offer",
    imageBg: "C3002F",
    imageFg: "FFFFFF",
  },
  {
    id: "subaru-fleet",
    brand: "Subaru",
    category: "Auto & Transport",
    headline: "Fleet pricing on Outback and Forester",
    description:
      "Subaru fleet program for oolee members. Eligible on new Outback, Forester, and XV models.",
    claimCtaText: "Claim Your Offer",
    imageBg: "00307C",
    imageFg: "FFFFFF",
  },
  {
    id: "hellofresh-50",
    brand: "HelloFresh",
    category: "Everyday & Food",
    headline: "Save 50% on your first three boxes",
    description:
      "Fresh ingredients delivered weekly. Half-off the first three orders, with free shipping on order one.",
    claimCtaText: "Claim Your Offer",
    imageBg: "00A862",
    imageFg: "FFFFFF",
  },
  {
    id: "everyplate-40",
    brand: "EveryPlate",
    category: "Everyday & Food",
    headline: "40% off your first EveryPlate order",
    description:
      "Budget-friendly meal kits delivered weekly. Members save 40% on the first box.",
    claimCtaText: "Claim Your Offer",
    imageBg: "F26430",
    imageFg: "FFFFFF",
  },
  {
    id: "youfoodz-25",
    brand: "Youfoodz",
    category: "Everyday & Food",
    headline: "$25 off ready-made meals",
    description:
      "Pre-cooked, chef-made meals delivered chilled. $25 off your first order over $69.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFD200",
    imageFg: "111111",
  },
  {
    id: "muscle-chef",
    brand: "Muscle Chef",
    category: "Everyday & Food",
    headline: "$30 off high-protein meal plans",
    description:
      "High-protein meals built for shift workers. Members save $30 on plans of 6 meals or more.",
    claimCtaText: "Claim Your Offer",
    imageBg: "0A0A0A",
    imageFg: "FF3B30",
  },
  {
    id: "chemist-direct",
    brand: "Chemist Direct",
    category: "Everyday & Food",
    headline: "Members-only price on essentials",
    description:
      "Save on first-aid, vitamins, and everyday pharmacy items with member pricing across the range.",
    claimCtaText: "Claim Your Offer",
    imageBg: "00A0E9",
    imageFg: "FFFFFF",
  },
  {
    id: "lyca-mobile",
    brand: "Lyca Mobile",
    category: "Everyday & Food",
    headline: "Bonus data on prepaid plans",
    description:
      "Bonus data on selected prepaid plans for oolee members. Recharge online to claim.",
    claimCtaText: "Claim Your Offer",
    imageBg: "F47B20",
    imageFg: "FFFFFF",
  },
  {
    id: "nordictrack",
    brand: "NordicTrack",
    category: "Health & Fitness",
    headline: "Up to $400 off treadmills and bikes",
    description:
      "Smart home cardio gear with iFit. Save on treadmills, exercise bikes, and rowers.",
    claimCtaText: "Claim Your Offer",
    imageBg: "0F0F0F",
    imageFg: "FFFFFF",
  },
  {
    id: "shokz-headphones",
    brand: "SHOKZ",
    category: "Health & Fitness",
    headline: "20% off bone-conduction headphones",
    description:
      "Open-ear headphones perfect for nurses on call. 20% off all OpenRun and OpenSwim models.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FF6900",
    imageFg: "FFFFFF",
  },
  {
    id: "brooks-running",
    brand: "Brooks Running",
    category: "Health & Fitness",
    headline: "15% off running shoes",
    description:
      "Cushioned running shoes built for long shifts on hard floors. Members save 15% sitewide.",
    claimCtaText: "Claim Your Offer",
    imageBg: "0033A0",
    imageFg: "FFFFFF",
  },
  {
    id: "ultrahuman-ring",
    brand: "Ultrahuman",
    category: "Health & Fitness",
    headline: "$50 off the Ultrahuman Ring",
    description:
      "Sleep, recovery, and heart-rate tracking from a smart ring. Members get $50 off Ring Air.",
    claimCtaText: "Claim Your Offer",
    imageBg: "111111",
    imageFg: "FFFFFF",
  },
  {
    id: "lskd-activewear",
    brand: "LSKD",
    category: "Health & Fitness",
    headline: "10% off activewear",
    description:
      "Australian activewear made for hard sessions. 10% off full price for oolee members.",
    claimCtaText: "Claim Your Offer",
    imageBg: "1A1A1A",
    imageFg: "FFD400",
  },
  {
    id: "koala-mattress",
    brand: "Koala",
    category: "House & Garden",
    headline: "$150 off Koala mattresses",
    description:
      "Award-winning mattresses with a 120-night trial. Members save $150 on queen and king sizes.",
    claimCtaText: "Claim Your Offer",
    imageBg: "EAE3D2",
    imageFg: "1A1A1A",
  },
  {
    id: "linen-house",
    brand: "Linen House",
    category: "House & Garden",
    headline: "25% off bedding and linen",
    description:
      "Premium quilt covers, sheets, and towels. 25% off full-price items for members.",
    claimCtaText: "Claim Your Offer",
    imageBg: "F2E6D8",
    imageFg: "1A1A1A",
  },
  {
    id: "wheel-and-barrow",
    brand: "Wheel & Barrow",
    category: "House & Garden",
    headline: "15% off kitchen and homewares",
    description:
      "Cookware, glassware, and gifts for the home. Members save 15% online and in store.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFFFFF",
    imageFg: "1A1A1A",
  },
  {
    id: "breville-appliances",
    brand: "Breville",
    category: "House & Garden",
    headline: "Member pricing on Breville appliances",
    description:
      "Espresso machines, blenders, and ovens at exclusive member prices via partner retailers.",
    claimCtaText: "Claim Your Offer",
    imageBg: "111111",
    imageFg: "C40A2D",
  },
  {
    id: "adidas-20",
    brand: "Adidas",
    category: "Shopping & Fashion",
    headline: "20% off full-price Adidas",
    description:
      "Members get an extra 20% off full-price footwear and apparel on adidas.com.au.",
    claimCtaText: "Claim Your Offer",
    imageBg: "111111",
    imageFg: "FFFFFF",
  },
  {
    id: "new-balance",
    brand: "New Balance",
    category: "Shopping & Fashion",
    headline: "15% off New Balance footwear",
    description:
      "Comfortable trainers and lifestyle shoes. 15% off full-price styles for members.",
    claimCtaText: "Claim Your Offer",
    imageBg: "C8102E",
    imageFg: "FFFFFF",
  },
  {
    id: "peter-jackson",
    brand: "Peter Jackson",
    category: "Shopping & Fashion",
    headline: "25% off suits and formalwear",
    description:
      "Australian menswear for special occasions. Members save 25% on suits, shirts, and ties.",
    claimCtaText: "Claim Your Offer",
    imageBg: "1A1A1A",
    imageFg: "C2A661",
  },
  {
    id: "emu-australia",
    brand: "EMU Australia",
    category: "Shopping & Fashion",
    headline: "15% off sheepskin boots",
    description:
      "Genuine Australian sheepskin boots and slippers. 15% off online for oolee members.",
    claimCtaText: "Claim Your Offer",
    imageBg: "BB8E5A",
    imageFg: "FFFFFF",
  },
  {
    id: "the-oodie",
    brand: "The Oodie",
    category: "Shopping & Fashion",
    headline: "$20 off any Oodie",
    description:
      "The original oversized hooded blanket. Members get $20 off any single Oodie purchase.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFB6C1",
    imageFg: "1A1A1A",
  },
  {
    id: "antler-luggage",
    brand: "Antler",
    category: "Shopping & Fashion",
    headline: "20% off Antler luggage",
    description:
      "Lightweight, durable suitcases for work and travel. 20% off the full range online.",
    claimCtaText: "Claim Your Offer",
    imageBg: "1B1B1B",
    imageFg: "DDB976",
  },
  {
    id: "endota-spa",
    brand: "endota",
    category: "Wellness & Beauty",
    headline: "15% off endota spa treatments",
    description:
      "Massages, facials, and packages at endota spa. Members save 15% on bookings nationwide.",
    claimCtaText: "Claim Your Offer",
    imageBg: "EFE9DD",
    imageFg: "1A1A1A",
  },
  {
    id: "loccitane",
    brand: "L'Occitane",
    category: "Wellness & Beauty",
    headline: "20% off L'Occitane skincare",
    description:
      "French skincare and body care. Members save 20% on selected ranges, including hand creams.",
    claimCtaText: "Claim Your Offer",
    imageBg: "D49C3D",
    imageFg: "FFFFFF",
  },
  {
    id: "ourritual",
    brand: "OurRitual",
    category: "Wellness & Beauty",
    headline: "First month half-price",
    description:
      "Personalised wellness programs with expert support. Members get the first month at 50% off.",
    claimCtaText: "Claim Your Offer",
    imageBg: "F4E1D2",
    imageFg: "1A1A1A",
  },
  {
    id: "luxury-escapes",
    brand: "Luxury Escapes",
    category: "Travel",
    headline: "$100 off curated holiday packages",
    description:
      "Hand-picked hotel and tour packages worldwide. Members save $100 on bookings over $1,000.",
    claimCtaText: "Claim Your Offer",
    imageBg: "0E3D2E",
    imageFg: "F4D17A",
  },
  {
    id: "norwegian-cruise",
    brand: "Norwegian Cruise Line",
    category: "Travel",
    headline: "Free onboard credit on selected cruises",
    description:
      "US$100 onboard credit on selected Norwegian Cruise Line itineraries booked through oolee.",
    claimCtaText: "Claim Your Offer",
    imageBg: "0B3D91",
    imageFg: "FFFFFF",
  },
  {
    id: "ecruising-travel",
    brand: "ecruising Travel",
    category: "Travel",
    headline: "Bonus credit on river cruises",
    description:
      "Up to $200 in onboard credit on selected European river cruises for oolee members.",
    claimCtaText: "Claim Your Offer",
    imageBg: "4D8EBC",
    imageFg: "FFFFFF",
  },
  {
    id: "lg-electronics",
    brand: "LG",
    category: "Technology",
    headline: "Up to 25% off LG appliances and TVs",
    description:
      "Exclusive member portal with discounted pricing on LG OLED TVs, washers, and fridges.",
    claimCtaText: "Claim Your Offer",
    imageBg: "A50034",
    imageFg: "FFFFFF",
  },
  {
    id: "nikon-cameras",
    brand: "Nikon",
    category: "Technology",
    headline: "10% off mirrorless cameras and lenses",
    description:
      "Nikon Z series cameras and NIKKOR Z lenses at member pricing. 10% off RRP.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFD400",
    imageFg: "1A1A1A",
  },
  {
    id: "wacom-tablets",
    brand: "Wacom",
    category: "Technology",
    headline: "15% off Wacom pen tablets",
    description:
      "Drawing and signature tablets for teachers and creatives. 15% off across the Wacom range.",
    claimCtaText: "Claim Your Offer",
    imageBg: "1A1A1A",
    imageFg: "FFFFFF",
  },
  {
    id: "norton-security",
    brand: "Norton",
    category: "Technology",
    headline: "60% off first year of Norton 360",
    description:
      "Antivirus, VPN, and password manager in one subscription. 60% off the first 12 months.",
    claimCtaText: "Claim Your Offer",
    imageBg: "FFFF00",
    imageFg: "1A1A1A",
  },
];

export function offerImage(o: Offer): string {
  return `https://placehold.co/600x400/${o.imageBg}/${o.imageFg}/png?text=${encodeURIComponent(
    o.brand,
  )}&font=montserrat`;
}

export function getOfferById(id: string): Offer | undefined {
  return OFFERS.find((o) => o.id === id);
}
