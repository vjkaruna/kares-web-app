import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { PasswordGate } from "@/components/password-gate";

export default function Home() {
  return (
    <PasswordGate>
      <main className="min-h-screen bg-background">
        <Header />

        <Hero />

        {/* Features Section */}
        <div id="how-it-works" className="scroll-mt-20">
          <div id="features" className="scroll-mt-20">
            <FeatureSection
              number="1. Personalized and Patient-Centered"
              title="Care That Grows With You"
              subtitle="Treatment plans that fit your lifestyle."
              description="Your health journey is unique, and your care should be too. Kares AI learns from your daily routines, preferences, and goals to create treatment plans that seamlessly integrate into your life. As you evolve, so does your care—adapting to new challenges, celebrating milestones, and always keeping you at the center of every decision."
              imageSrc="/images/health-dashboard.png"
              imageAlt="Health dashboard showing heart rate, steps, sleep and blood oxygen metrics"
              imagePosition="right"
              imageAspectRatio="9/16"
              phoneStyle
            />

            <FeatureSection
              number="2. Always Connected"
              title="Data-Focused Treatment Plans"
              subtitle="Bringing in feedback about your heart health, sleep patterns, and diet into a tailored approach that works now."
              description="Your health data tells a story. Kares AI continuously integrates real-time insights from your favorite health devices—including Oura Ring, Alivecor Kardiamobile, and Apple Watch—to paint a complete picture of your wellbeing. Track your heart health, monitor sleep quality, and understand how your diet impacts your energy, all in one intelligent platform that learns and adapts with you."
              imageSrc="/images/wearables.jpg"
              imageAlt="Health tracking wearable devices including smartband and Oura ring"
              imagePosition="left"
            />

            <FeatureSection
              number="3. Smart Patient Visits"
              title="Your Care Team, Armed With Insights"
              subtitle="Primary care physicians, nursing staff, and specialists working together with the right information."
              description="Every appointment matters. Kares AI ensures your entire care team—from primary care physicians to specialists and nursing staff—has access to comprehensive, organized health data before you even walk through the door. This means more meaningful conversations, personalized 1:1 advice, and treatment decisions that truly make a difference in your health outcomes."
              imageSrc="/images/stethoscope.jpg"
              imageAlt="Medical stethoscope representing professional healthcare"
              imagePosition="right"
            />
          </div>
        </div>

        {/* Devices Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground tracking-tight mb-6">
              Works With Your Devices
            </h2>
            <p className="text-xl md:text-2xl font-serif text-muted-foreground italic mb-12">
              Seamlessly integrates with leading health technology
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 md:w-10 md:h-10 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-muted-foreground">
                  Oura Ring
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 md:w-10 md:h-10 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-muted-foreground">
                  Kardiamobile
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 md:w-10 md:h-10 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-muted-foreground">
                  Apple Watch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Images Section */}
        <section className="py-8 md:py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/healthy-meal.jpg"
                  alt="Healthy colorful meal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/exercise.jpg"
                  alt="Person doing yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2 md:col-span-1">
                <img
                  src="/images/scale.jpg"
                  alt="Digital weight scale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PasswordGate>
  );
}
