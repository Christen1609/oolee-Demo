"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "@/lib/catalog";

export type UserProfile = {
  profession: "Education" | "Healthcare";
  city: string;
  shift?: "Day" | "Night" | "Mixed";
  interests: string[];
};

export const DEFAULT_PROFILE: UserProfile = {
  profession: "Healthcare",
  city: "Adelaide",
  shift: "Night",
  interests: ["Wellness & Beauty", "Everyday & Food"],
};

const CITIES = [
  "Adelaide",
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Perth",
  "Hobart",
  "Darwin",
  "Canberra",
];

const SHIFTS: NonNullable<UserProfile["shift"]>[] = ["Day", "Night", "Mixed"];

function Chip({
  label,
  filled,
}: {
  label: string;
  filled?: boolean;
}) {
  return (
    <span
      className={
        filled
          ? "inline-flex items-center rounded-pill bg-oolee-pink-soft px-3 py-1 text-xs font-medium text-oolee-pink"
          : "inline-flex items-center rounded-pill border border-oolee-line bg-oolee-bg-alt px-3 py-1 text-xs font-medium text-oolee-muted"
      }
    >
      {label}
    </span>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-pill border px-4 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-oolee-pink bg-oolee-pink-soft text-oolee-pink"
          : "border-oolee-line bg-white text-oolee-ink hover:bg-oolee-bg-alt"
      }`}
    >
      {children}
    </button>
  );
}

export default function PersonalizationBar({
  profile,
  onChange,
}: {
  profile: UserProfile;
  onChange: (next: UserProfile) => void;
}) {
  const [open, setOpen] = useState(false);

  function setProfession(p: "Education" | "Healthcare") {
    if (p === "Education") {
      onChange({ ...profile, profession: p, shift: undefined });
    } else {
      onChange({
        ...profile,
        profession: p,
        shift: profile.shift ?? "Day",
      });
    }
  }

  function setCity(c: string) {
    onChange({ ...profile, city: c });
  }

  function setShift(s: NonNullable<UserProfile["shift"]>) {
    onChange({ ...profile, shift: s });
  }

  function toggleInterest(cat: string) {
    const has = profile.interests.includes(cat);
    onChange({
      ...profile,
      interests: has
        ? profile.interests.filter((i) => i !== cat)
        : [...profile.interests, cat],
    });
  }

  return (
    <div className="mb-5 rounded-xl border border-oolee-line bg-white p-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-wrap items-center gap-2 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-oolee-muted">
          Searching as:
        </span>
        <Chip label={profile.profession} filled />
        <Chip label={profile.city} filled />
        {profile.shift && <Chip label={`${profile.shift} shift`} filled />}
        {profile.interests.map((i) => (
          <Chip key={i} label={i} filled />
        ))}
        <span className="ml-auto text-xs font-medium text-oolee-pink">
          {open ? "Done" : "Edit"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 1, 0.81, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid grid-cols-1 gap-5 border-t border-oolee-line pt-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-oolee-muted">
                  Profession
                </label>
                <div className="flex flex-wrap gap-2">
                  <ToggleButton
                    active={profile.profession === "Education"}
                    onClick={() => setProfession("Education")}
                  >
                    Education
                  </ToggleButton>
                  <ToggleButton
                    active={profile.profession === "Healthcare"}
                    onClick={() => setProfession("Healthcare")}
                  >
                    Healthcare
                  </ToggleButton>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-oolee-muted">
                  City
                </label>
                <select
                  value={profile.city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-pill border border-oolee-line bg-white px-4 py-1.5 text-xs font-medium text-oolee-ink focus:border-oolee-pink focus:outline-none"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {profile.profession === "Healthcare" && (
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-oolee-muted">
                    Shift pattern
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SHIFTS.map((s) => (
                      <ToggleButton
                        key={s}
                        active={profile.shift === s}
                        onClick={() => setShift(s)}
                      >
                        {s}
                      </ToggleButton>
                    ))}
                  </div>
                </div>
              )}

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-oolee-muted">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <ToggleButton
                      key={c}
                      active={profile.interests.includes(c)}
                      onClick={() => toggleInterest(c)}
                    >
                      {c}
                    </ToggleButton>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-pink"
                >
                  Done
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
