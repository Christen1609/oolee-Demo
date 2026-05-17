export default function BrandStrip({
  brands,
  bg = "bg-white",
}: {
  brands: string[];
  bg?: string;
}) {
  return (
    <section className={`${bg} py-10`}>
      <div className="marquee-mask">
        <div className="marquee-track">
          <BrandRow brands={brands} />
          <BrandRow brands={brands} ariaHidden />
        </div>
      </div>
    </section>
  );
}

function BrandRow({
  brands,
  ariaHidden = false,
}: {
  brands: string[];
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 items-center gap-14 px-7"
      aria-hidden={ariaHidden || undefined}
    >
      {brands.map((b, i) => (
        <li
          key={`${b}-${i}`}
          className="whitespace-nowrap text-xl font-bold tracking-tight text-oolee-ink/80"
        >
          {b}
        </li>
      ))}
    </ul>
  );
}
