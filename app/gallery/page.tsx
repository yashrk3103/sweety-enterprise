import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-maroon">Gallery</h1>
      <p className="mt-3 text-sm leading-7 text-maroon/80">
        Preview event styles by category. Replace these placeholders later with final files in <code className="rounded bg-cream px-1 py-0.5">/public/gallery</code>.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
