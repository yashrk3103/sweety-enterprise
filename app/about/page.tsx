export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <h1 className="font-heading text-4xl font-semibold text-maroon">About Sweety Enterprise</h1>
        <p className="mt-4 text-base leading-8 text-maroon/80">
          Based in Surat, Gujarat, Sweety Enterprise is built on a simple idea: every celebration deserves thoughtful planning and flawless execution.
          We partner with families, professionals, and organizations to design events that feel personal, elegant, and stress-free.
        </p>
        <p className="mt-4 text-base leading-8 text-maroon/80">
          From intimate functions to large gatherings, our team aligns every moving part—planning, vendors, logistics, and on-ground support—so hosts can stay present and enjoy the occasion.
        </p>
      </section>

      <section className="rounded-2xl border border-maroon/10 bg-cream p-6">
        <h2 className="font-heading text-2xl font-semibold text-maroon">Our Mission & Approach</h2>
        <p className="mt-3 text-sm leading-7 text-maroon/80">
          We believe event management should feel collaborative and transparent. Our approach starts with understanding your priorities, then building a practical, beautiful event plan around your budget and timeline.
          With reliable vendors and strong supervision on event day, we ensure each detail is delivered the way you imagined.
        </p>
      </section>
    </div>
  );
}
