"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS credentials ────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_sweety";
const EMAILJS_TEMPLATE_ID = "template_69wso67";
const EMAILJS_PUBLIC_KEY = "npey6T9jrZRc-HsE-";
// ─────────────────────────────────────────────────────────────────

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding Management",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      event_type: form.eventType,
      message: form.message,
      to_email: "sweetykhunt345@gmail.com",
    };

    try {
      // 1. Send notification email to the owner
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send auto-reply acknowledgment to the client
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (replyErr) {
        // Don't fail the whole submission if auto-reply fails
        console.warn("Auto-reply failed (owner was still notified):", replyErr);
      }

      setStatus("success");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      const e = err as { status?: number; text?: string };
      console.error("EmailJS Error:", e.status, e.text);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-maroon/10 bg-white p-6"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-maroon/80">
          Name
        </label>
        <input
          id="name"
          name="from_name"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-maroon/80">
            Email
          </label>
          <input
            id="email"
            name="from_email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-maroon/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className="mb-1 block text-sm font-medium text-maroon/80">
          Event Type
        </label>
        <select
          id="eventType"
          name="event_type"
          value={form.eventType}
          onChange={(event) => setForm((prev) => ({ ...prev, eventType: event.target.value }))}
          className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
        >
          <option>Wedding Management</option>
          <option>Birthday &amp; Personal Celebrations</option>
          <option>Corporate Events</option>
          <option>Social &amp; Cultural Functions</option>
          <option>Vendor Alignment &amp; Coordination</option>
          <option>On-Site Supervision</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-maroon/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
        />
      </div>

      {/* Status feedback */}
      {status === "success" && (
        <div className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 border border-green-200">
          ✅ Your consultation request has been sent! We&apos;ll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 border border-red-200">
          ❌ Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition duration-200 hover:scale-105 hover:bg-maroon/90 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending..." : "Book Consultation"}
      </button>
    </form>
  );
}
