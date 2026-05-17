import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Support | oolee",
};

const FAQS = [
  {
    question: "What is oolee?",
    answer: (
      <div className="space-y-3">
        <p>
          At oolee, we believe that teaching and nursing professionals deserve
          recognition and rewards for their hard work and dedication. oolee is
          more than just a discount platform; it&apos;s a community dedicated
          to supporting teaching and nursing heroes. Join us at oolee and
          discover how our exclusive offers can help you save on the things you
          love.
        </p>
        <p>
          We aim to make everyday essentials more affordable, allowing you to
          focus on what truly matters, caring for others.
        </p>
      </div>
    ),
  },
  {
    question: "Who is eligible to use oolee?",
    answer:
      "Australian teaching and nursing professionals, plus their immediate household. Verification is part of sign-up.",
  },
  {
    question: "How do I sign up for oolee?",
    answer:
      "Click Free Sign Up at the top of any page, verify your profession via the prompts, and start browsing offers.",
  },
  {
    question: "Is oolee free to use?",
    answer:
      "Yes, completely free. There are no membership fees and no premium tiers.",
  },
  {
    question: "How do I redeem a discount or offer?",
    answer:
      "Click Claim Your Offer on any card. Some offers redirect to the partner site with a member code; others issue a voucher directly.",
  },
  {
    question: "What types of discounts can I find on oolee?",
    answer:
      "Auto, food, fitness, home, fashion, wellness, travel, and tech. We add new categories as we sign new partners.",
  },
  {
    question: "How often are new offers added?",
    answer:
      "We refresh the catalog every fortnight, with limited-time promotions running between.",
  },
  {
    question: "Can businesses partner with oolee?",
    answer:
      "Yes. See the For Business page for the partner application.",
  },
  {
    question: "What should I do if I have trouble redeeming an offer?",
    answer:
      "Contact support via the form on this page and a team member will respond within one business day.",
  },
  {
    question: "Is my personal information safe with oolee?",
    answer:
      "Yes. We use industry-standard encryption and we never sell personal data to third parties.",
  },
];

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-page px-6 py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-oolee-ink">
            <span aria-hidden>📄</span> Frequently Asked Questions
          </h1>
          <Accordion items={FAQS} defaultOpen={0} />
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
