"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FeatureSectionProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageAspectRatio?: string;
  phoneStyle?: boolean;
}

export function FeatureSection({
  number,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageAspectRatio = "4/3",
  phoneStyle = false,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const headerHeight = 80; // Account for fixed header

      // Check if section is in view and header should be sticky
      const shouldBeSticky =
        sectionRect.top <= headerHeight && sectionRect.bottom > headerHeight + 100;

      setIsSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] py-16 md:py-24">
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className={`transition-all duration-300 ${
          isSticky
            ? "fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm py-6 border-b border-border"
            : "relative py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-sans text-sm md:text-base text-primary font-medium tracking-wide uppercase">
              {number}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-xl md:text-2xl lg:text-3xl font-serif text-muted-foreground italic">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        className={`max-w-7xl mx-auto px-6 ${isSticky ? "mt-52 md:mt-56" : "mt-8 md:mt-12"}`}
      >
        <div
          className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
        >
          <div className="flex-1">
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              {description}
            </p>
          </div>

          <div className={`flex-1 w-full ${phoneStyle ? "flex justify-center" : ""}`}>
            <div 
              className={`relative overflow-hidden ${
                phoneStyle 
                  ? "rounded-3xl shadow-2xl border border-border" 
                  : "rounded-2xl"
              }`} 
              style={{ 
                aspectRatio: imageAspectRatio,
                ...(phoneStyle ? { maxWidth: "280px", width: "100%" } : {})
              }}
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
