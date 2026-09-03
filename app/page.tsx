import Image from "next/image";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Wedding Management",
    description: "From engagement to reception, every moment is managed with care.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Personal Celebrations",
    description: "Birthdays and private milestones planned to feel special.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Events",
    description: "Professional execution for conferences, launches, and team events.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mehndi Hand Work",
    description: "Beautiful traditional mehndi hand work by our in-house artist, available for festivals, weddings, and special occasions.",
    image:
      "https://images.pexels.com/photos/2659721/pexels-photo-2659721.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const whyChooseUs = [
  "End-to-End Planning",
  "Trusted Vendor Network",
  "On-Ground Presence",
  "Personalized Approach",
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="relative min-h-[68vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80"
          alt="Beautifully decorated wedding event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-maroon/65" />
        <div className="relative mx-auto flex min-h-[68vh] w-full max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-cream">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Event Management in Surat</p>
            <h1 className="font-heading mt-4 text-4xl font-bold leading-tight sm:text-5xl">Your Partner for Every Celebration</h1>
            <p className="mt-5 text-base text-cream/95 sm:text-lg">
              Sweety Enterprise plans meaningful events for families, businesses, and communities with seamless coordination and elegant execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon transition duration-200 hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="rounded-full border border-cream px-6 py-3 text-sm font-semibold text-cream transition duration-200 hover:bg-cream hover:text-maroon">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-maroon">Our Service Categories</h2>
            <p className="mt-2 text-sm text-maroon/75">Flexible planning support for every type of event.</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-gold underline-offset-4 transition hover:underline">
            View all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service) => (
            <Link key={service.title} href="/services" className="hover-lift overflow-hidden rounded-2xl border border-maroon/10 bg-white">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title === "Mehndi Hand Work" ? "Intricate mehndi design on an open hand" : service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-maroon/75">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-3xl bg-cream px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-maroon">Why Choose Us</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((point) => (
            <div key={point} className="rounded-xl border border-maroon/10 bg-white px-4 py-4 text-sm font-medium text-maroon hover-lift">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-3xl bg-maroon px-4 py-12 text-cream sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold">Ready to Plan Your Next Event?</h2>
        <p className="mt-3 text-sm text-cream/90 sm:text-base">
          Call +91 9898077321 / 9033043868 or email sweetykhunt345@gmail.com to discuss your event goals.
        </p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon transition duration-200 hover:scale-105">
          Book a Free Consultation
        </Link>
      </section>
    </div>
  );
}
