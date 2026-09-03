import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold text-maroon">Gallery</h1>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
