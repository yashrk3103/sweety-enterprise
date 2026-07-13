"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "Weddings" | "Birthdays" | "Corporate" | "Cultural Functions";

type GalleryImage = {
  title: string;
  category: Category;
  src: string;
};

const categories: Category[] = ["Weddings", "Birthdays", "Corporate", "Cultural Functions"];

const galleryImages: GalleryImage[] = [
  {
    title: "Wedding Stage Decor",
    category: "Weddings",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Haldi Celebration",
    category: "Weddings",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Birthday Balloon Theme",
    category: "Birthdays",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Celebration Setup",
    category: "Birthdays",
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Conference Hall",
    category: "Corporate",
    src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Business Networking Event",
    category: "Corporate",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Community Cultural Gathering",
    category: "Cultural Functions",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Traditional Stage Program",
    category: "Cultural Functions",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Weddings");

  const filteredImages = useMemo(
    () => galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
              activeCategory === category
                ? "bg-maroon text-cream"
                : "border border-maroon/20 bg-white text-maroon hover:border-gold hover:text-gold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image) => (
          <figure key={image.title} className="hover-lift overflow-hidden rounded-2xl border border-maroon/10 bg-white">
            <div className="relative h-64 w-full">
              <Image src={image.src} alt={image.title} fill className="object-cover" />
            </div>
            <figcaption className="px-4 py-3 text-sm text-maroon/80">{image.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
