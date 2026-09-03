import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-maroon">Contact Us</h1>
      <p className="mt-3 text-sm leading-7 text-maroon/80">Tell us about your event or mehndi hand-work needs, and we will connect you with our team or mehndi artist for a free consultation.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-maroon/10 bg-cream p-6">
            <h2 className="font-heading text-2xl font-semibold">Business Details</h2>
            <p className="mt-3 text-sm text-maroon/80">D-201 Navkar Palace, Opp. Gadhpur Township, Khadsad, Surat, Gujarat – 394326</p>
            <p className="mt-2 text-sm text-maroon/80">Phone: +91 9898077321 / 9033043868</p>
            <p className="mt-2 text-sm text-maroon/80">Email: sweetykhunt345@gmail.com</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-maroon/10">
            <iframe
              title="Sweety Enterprise Location"
              src="https://www.google.com/maps?q=D-201%20Navkar%20Palace%2C%20Opp.%20Gadhpur%20Township%2C%20Khadsad%2C%20Surat%2C%20Gujarat%20394326&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
