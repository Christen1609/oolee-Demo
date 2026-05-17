import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-baseline ${className}`}>
      <span className="text-2xl font-bold tracking-tight text-oolee-navy">
        oo
      </span>
      <span className="text-2xl font-bold tracking-tight text-oolee-pink">
        lee
      </span>
    </Link>
  );
}
