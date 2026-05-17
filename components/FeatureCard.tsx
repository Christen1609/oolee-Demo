export default function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="dark-feature-card">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
        {icon}
      </div>
      <h4 className="mb-2 text-sm font-semibold leading-snug">{title}</h4>
      <p className="text-xs leading-relaxed text-white/70">{body}</p>
    </div>
  );
}
