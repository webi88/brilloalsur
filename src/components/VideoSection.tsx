"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface VideoSectionProps {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  reversed?: boolean;
  image: string;
  imageAlt?: string;
}

export default function VideoSection({
  id,
  badge,
  title,
  highlight,
  description,
  reversed = false,
  image,
  imageAlt = "Imagen de la sección",
}: VideoSectionProps) {
  return (
    <section id={id} className="section-padding bg-cream-50">
      <div
        className={`container-max flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-12 lg:gap-16 items-center`}
      >
        {/* Text */}
        <AnimateOnScroll
          className="flex-1 space-y-6"
          direction={reversed ? "right" : "left"}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-700 text-sm font-medium">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">
            {title}{" "}
            <span className="text-terracotta-500">{highlight}</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-body">
            {description}
          </p>
        </AnimateOnScroll>

        {/* Image */}
        <AnimateOnScroll
          className="flex-1 w-full"
          direction={reversed ? "left" : "right"}
          delay={0.2}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
