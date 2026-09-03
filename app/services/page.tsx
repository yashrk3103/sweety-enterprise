const services = [
  {
    title: "Wedding Management",
    tagline: "Every ritual, perfectly timed.",
  },
  {
    title: "Birthday & Personal Celebrations",
    tagline: "Milestones made magical.",
  },
  {
    title: "Corporate Events",
    tagline: "Professional events, flawlessly executed.",
  },
  {
    title: "Social & Cultural Functions",
    tagline: "Bringing people together, the right way.",
  },
  {
    title: "Vendor Alignment & Coordination",
    tagline: "The right vendors, without the runaround.",
  },
  {
    title: "On-Site Supervision",
    tagline: "We're there so you don't have to worry.",
  },
  {
    title: "Mehndi Hand Work",
    tagline: "Our in-house mehndi artist creates beautiful hand designs for festivals, weddings, and special occasions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-maroon">Our Services</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-maroon/80">
        End-to-end planning and event operations tailored for your occasion, team, and timeline, along with personal mehndi hand work for your celebrations.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="hover-lift rounded-2xl border border-maroon/10 bg-white p-6">
            <h2 className="font-heading text-2xl font-semibold text-maroon">{service.title}</h2>
            <p className="mt-3 text-sm text-maroon/75">{service.tagline}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
