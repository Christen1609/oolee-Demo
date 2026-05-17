import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Employer | oolee",
};

const EMPLOYER_ITEMS = [
  {
    question: "Employee Benefits That Actually Get Used",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-oolee-ink">
          Support your staff. Strengthen engagement. Improve retention, without
          increasing costs.
        </p>
        <p>
          In education, healthcare, and other people-first industries,
          attracting and retaining great staff has never been more challenging.
          Cost-of-living pressures, burnout, and limited budgets are real, and
          traditional perks often miss the mark.
        </p>
        <p>
          <span className="font-semibold text-oolee-ink">oolee</span> is a free
          employee benefits platform designed to help employers genuinely reward
          and recognise their teams with meaningful, everyday savings from
          trusted national brands.
        </p>
      </div>
    ),
  },
  {
    question: "Why Employers Choose oolee",
    answer:
      "Zero platform cost, fast rollout, real engagement. Most employer rollouts hit 60% staff sign-up within a fortnight.",
  },
  {
    question: "Real Brands. Real Value.",
    answer:
      "Hertz, HelloFresh, Koala, NordicTrack, Norwegian Cruise Line, Nikon and dozens more. Offers your team will actually use.",
  },
  {
    question: "Designed for Education & Healthcare Employers",
    answer:
      "We understand shift patterns, payroll cycles, and the verification needs of regulated workforces.",
  },
  {
    question: "Why Benefits Matter More Than Ever",
    answer:
      "Real wage pressure is shrinking discretionary income for frontline staff. Offers that save $50 a week are a tangible retention lever.",
  },
  {
    question: "Join Employers Using oolee to Support Their Teams",
    answer:
      "Whether you employ 50 people or 5,000, oolee provides a scalable, easy-to-implement solution.",
  },
];

export default function EmployerPage() {
  return (
    <section className="mx-auto max-w-page px-6 py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="mb-5 aspect-video w-full overflow-hidden rounded-xl border border-oolee-line bg-oolee-bg-alt">
            <div className="flex h-full w-full items-center justify-center text-sm text-oolee-muted">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                  ▶
                </div>
                <p className="font-medium text-oolee-ink">
                  How oolee Helps Employers Boost Employee Engagement
                </p>
                <p className="mt-1 text-xs">Watch on YouTube</p>
              </div>
            </div>
          </div>
          <Accordion items={EMPLOYER_ITEMS} defaultOpen={0} />
        </Reveal>
        <Reveal delay={0.15}>
        <ContactForm
          title={
            <>
              Join Employers Using <span className="text-oolee-pink">oolee</span>{" "}
              to Support Their Team
            </>
          }
          intro={
            <p>
              Whether you employ 50 people or 5,000, oolee provides a scalable,
              easy-to-implement solution that helps your organisation show
              genuine appreciation for its people.
            </p>
          }
          bullets={[
            { icon: "🎁", label: "Register your interest using the form below, and discover how oolee can help you:" },
            { label: "Reward your staff" },
            { label: "Improve engagement" },
            { label: "Support wellbeing" },
            { label: "Strengthen retention" },
          ]}
        />
        </Reveal>
      </div>
    </section>
  );
}
