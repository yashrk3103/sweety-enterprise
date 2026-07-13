"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding Management",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:sweetykhunt345@gmail.com?subject=${encodeURIComponent("Consultation Request - Sweety Enterprise")}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-maroon/10 bg-white p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-maroon/80">
          Name
        </label>
        <input
          id="name"
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
          value={form.eventType}
          onChange={(event) => setForm((prev) => ({ ...prev, eventType: event.target.value }))}
          className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
        >
          <option>Wedding Management</option>
          <option>Birthday & Personal Celebrations</option>
          <option>Corporate Events</option>
          <option>Social & Cultural Functions</option>
          <option>Vendor Alignment & Coordination</option>
          <option>On-Site Supervision</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-maroon/80">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-maroon/20 px-3 py-2 text-sm outline-none transition focus:border-gold"
        />
      </div>

      <button type="submit" className="rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition duration-200 hover:scale-105 hover:bg-maroon/90">
        Book Consultation
      </button>
    </form>
  );
}
