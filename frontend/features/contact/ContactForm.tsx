"use client";

import { useState } from "react";
import type { LocaleContent } from "@/lib/i18n";
import { PrimaryButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const inputClass = "w-full px-[14px] py-3 font-sans text-sm text-fg bg-bg-alt border-[1.5px] border-border rounded-[10px] outline-none resize-y transition-[border-color] duration-150 focus:border-indigo";

export default function ContactForm({ ui }: { ui: LocaleContent["ui"] }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: ui.opportunityTypes[0],
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type}: ${form.subject}`);
    const body = encodeURIComponent(
      `${ui.mailName}: ${form.name}\n${ui.mailEmail}: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:ruanfailache@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Card className="py-8 px-7">
      {sent ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 rounded-full bg-sage-pale flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="var(--sage)">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-xl mb-2">{ui.sentTitle}</h3>
          <p className="text-sm text-fg-mid mb-5">{ui.sentBody}</p>
          <button
            onClick={() => setSent(false)}
            className="bg-transparent border-[1.5px] border-border rounded-lg px-4 py-2 font-sans text-[13px] text-fg-mid cursor-pointer"
          >
            {ui.sendAnother}
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-display font-bold text-xl mb-[22px] text-fg">{ui.sendTitle}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-fg mb-1.5">{ui.formAbout}</label>
              <select
                value={form.type}
                required
                onChange={(e) => setForm((v) => ({ ...v, type: e.target.value }))}
                className={`${inputClass} h-11 cursor-pointer`}
              >
                {ui.opportunityTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-fg mb-1.5">{ui.nameLabel}</label>
              <input
                type="text"
                placeholder={ui.namePlaceholder}
                value={form.name}
                required
                onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                className={`${inputClass} h-11`}
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-fg mb-1.5">{ui.emailLabel}</label>
              <input
                type="email"
                placeholder={ui.emailPlaceholder}
                value={form.email}
                required
                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                className={`${inputClass} h-11`}
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-fg mb-1.5">{ui.subjectLabel}</label>
              <input
                type="text"
                placeholder={ui.subjectPlaceholder}
                value={form.subject}
                required
                onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
                className={`${inputClass} h-11`}
              />
              <p className="text-[11px] text-fg-soft mt-1">
                {ui.willBeSentAs}: <em>{form.type}: {form.subject || "…"}</em>
              </p>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-fg mb-1.5">{ui.messageLabel}</label>
              <textarea
                rows={4}
                placeholder={ui.messagePlaceholder}
                value={form.message}
                required
                onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                className={inputClass}
              />
            </div>
            <PrimaryButton type="submit" className="w-full justify-center py-[13px] px-0">
              {ui.sendMessage} →
            </PrimaryButton>
          </form>
        </>
      )}
    </Card>
  );
}
