"use client";

import { useState } from "react";
import type { LocaleContent } from "@/lib/i18n";
import { PrimaryButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 14,
  color: "var(--fg)",
  background: "var(--bg-alt)",
  border: "1.5px solid var(--border)",
  borderRadius: 10,
  outline: "none",
  resize: "vertical",
  transition: "border-color 0.15s",
};

export default function ContactForm({ ui }: { ui: LocaleContent["ui"] }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: ui.opportunityTypes[0],
    subject: "",
    message: "",
  });

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--indigo)";
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--border)";
  };

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
    <Card style={{ padding: "32px 28px" }}>
      {sent ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--sage-pale)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 20 20" fill="var(--sage)">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
            {ui.sentTitle}
          </h3>
          <p style={{ fontSize: 14, color: "var(--fg-mid)", marginBottom: 20 }}>{ui.sentBody}</p>
          <button
            onClick={() => setSent(false)}
            style={{
              background: "none",
              border: "1.5px solid var(--border)",
              borderRadius: 8,
              padding: "8px 16px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 13,
              color: "var(--fg-mid)",
              cursor: "pointer",
            }}
          >
            {ui.sendAnother}
          </button>
        </div>
      ) : (
        <>
          <h3 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 22, color: "var(--fg)" }}>
            {ui.sendTitle}
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>
                {ui.formAbout}
              </label>
              <select
                value={form.type}
                required
                onChange={(e) => setForm((v) => ({ ...v, type: e.target.value }))}
                onFocus={focus}
                onBlur={blur}
                style={{ ...inputStyle, height: 44, cursor: "pointer" }}
              >
                {ui.opportunityTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>
                {ui.nameLabel}
              </label>
              <input
                type="text"
                placeholder={ui.namePlaceholder}
                value={form.name}
                required
                onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                onFocus={focus}
                onBlur={blur}
                style={{ ...inputStyle, height: 44 }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>
                {ui.emailLabel}
              </label>
              <input
                type="email"
                placeholder={ui.emailPlaceholder}
                value={form.email}
                required
                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                onFocus={focus}
                onBlur={blur}
                style={{ ...inputStyle, height: 44 }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>
                {ui.subjectLabel}
              </label>
              <input
                type="text"
                placeholder={ui.subjectPlaceholder}
                value={form.subject}
                required
                onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
                onFocus={focus}
                onBlur={blur}
                style={{ ...inputStyle, height: 44 }}
              />
              <p style={{ fontSize: 11, color: "var(--fg-soft)", marginTop: 4 }}>
                {ui.willBeSentAs}: <em>{form.type}: {form.subject || "…"}</em>
              </p>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 6 }}>
                {ui.messageLabel}
              </label>
              <textarea
                rows={4}
                placeholder={ui.messagePlaceholder}
                value={form.message}
                required
                onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                onFocus={focus}
                onBlur={blur}
                style={inputStyle}
              />
            </div>
            <PrimaryButton type="submit" style={{ width: "100%", justifyContent: "center", padding: "13px 0" }}>
              {ui.sendMessage} →
            </PrimaryButton>
          </form>
        </>
      )}
    </Card>
  );
}
