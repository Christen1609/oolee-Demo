import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Ambassador | oolee",
};

const AMBASSADOR_ITEMS = [
  {
    question: "Become an oolee Ambassador",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-oolee-ink">
          Help grow the community. Unlock bigger rewards. Create more value for
          everyone.
        </p>
        <p>
          oolee is built on community. The more members we have using the
          platform, the more powerful it becomes, for you, your colleagues,
          your employer, and our brand partners.
        </p>
        <p>That&apos;s where oolee Ambassadors come in.</p>
        <p>
          As an Ambassador, you help spread the word about oolee within your
          workplace and professional network, and in return, you&apos;re
          rewarded for every successful referral. The more people you refer,
          the greater the rewards.
        </p>
      </div>
    ),
  },
  {
    question: "What is an oolee Ambassador?",
    answer:
      "An ambassador is a trusted member who introduces oolee to their colleagues, workplace, and professional network. We provide referral codes, marketing assets, and a milestone-based reward program.",
  },
  {
    question: "Why Your Support Matters",
    answer:
      "Every new member strengthens the bargaining position of the community, which means better offers from our brand partners.",
  },
  {
    question: "What's In It for You?",
    answer:
      "Milestone-based digital gift cards, exclusive ambassador-only offers, and early access to new partnerships.",
  },
  {
    question: "Why Promote oolee to Your Colleagues?",
    answer:
      "Colleagues working similar shift patterns benefit from the same offers you do. Sharing what works costs nothing and helps everyone save.",
  },
  {
    question: "Why Introduce oolee to Your Employer?",
    answer:
      "Employer-supported sign-ups unlock additional team benefits and we partner with HR to make rollout simple.",
  },
];

export default function AmbassadorPage() {
  return (
    <section className="mx-auto max-w-page px-6 py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Accordion items={AMBASSADOR_ITEMS} defaultOpen={0} />
        </Reveal>
        <Reveal delay={0.15}>
        <ContactForm
          title={
            <>
              Join the Ambassador Program
            </>
          }
          intro={
            <p>
              If you believe in what oolee is building and want to help grow a
              stronger, more valuable community. We&apos;d love to have you on
              board.
            </p>
          }
          bullets={[
            { icon: "🎁", label: "Get Rewarded Today:" },
            { label: "Milestone 1: 10 members = $20 Digital Gift Card" },
            { label: "Milestone 2: 25 members = $60 Digital Gift Card" },
            { label: "Milestone 3: 50 members = $150 Digital Gift Card" },
            { label: "Milestone 4: 100+ Members = $400 Digital Gift Card" },
          ]}
          messagePlaceholder="Please describe your interest in detail"
        />
        </Reveal>
      </div>
    </section>
  );
}
