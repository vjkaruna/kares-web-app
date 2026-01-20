import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg font-sans text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              At Kares AI, we take your privacy seriously. This policy outlines
              how we collect, use, and protect your personal health information.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We collect health data from connected devices, personal
              information you provide, and usage data to improve your care
              experience.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-10 mb-4">
              How We Use Your Data
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Your data is used exclusively to personalize your healthcare
              experience, provide insights to your care team, and improve our
              services.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-10 mb-4">
              Data Security
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We employ industry-leading security measures and are fully HIPAA
              compliant to ensure your health information is protected at all
              times.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-10 mb-4">
              Your Rights
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal
              data at any time. Contact us for any privacy-related requests.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
