import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer id="download" className="py-16 md:py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* App Download Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight mb-4">
            Start Your Health Journey
          </h2>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground italic mb-10">
            Download Kares AI today
          </p>

          {/* App Screenshot */}
          <div className="flex justify-center mb-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border" style={{ aspectRatio: "9/16", maxWidth: "280px" }}>
              <img
                src="/images/app-progress.png"
                alt="Kares AI app showing daily progress tracking for exercise, healthy eating, and sleep"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-sans">Download on the</div>
                <div className="text-base font-sans font-semibold">
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-sans">Get it on</div>
                <div className="text-base font-sans font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border">
          <Logo size="sm" />

          <nav className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Information
            </Link>
          </nav>

          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kares AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
