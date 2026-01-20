import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight mb-8">
            Contact Information
          </h1>

          <p className="text-xl font-serif text-muted-foreground italic mb-12">
            {"We're here to help with any questions about your care journey."}
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h2 className="text-xl font-serif text-foreground mb-2">
                General Inquiries
              </h2>
              <p className="font-sans text-muted-foreground">
                hello@karesai.com
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h2 className="text-xl font-serif text-foreground mb-2">
                Customer Support
              </h2>
              <p className="font-sans text-muted-foreground">
                support@karesai.com
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h2 className="text-xl font-serif text-foreground mb-2">
                Healthcare Provider Partnerships
              </h2>
              <p className="font-sans text-muted-foreground">
                partners@karesai.com
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h2 className="text-xl font-serif text-foreground mb-2">
                Press & Media
              </h2>
              <p className="font-sans text-muted-foreground">
                press@karesai.com
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-secondary rounded-2xl">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Office Location
            </h2>
            <address className="font-sans text-muted-foreground not-italic leading-relaxed">
              Kares AI, Inc.
              <br />
              123 Health Innovation Drive
              <br />
              San Francisco, CA 94107
              <br />
              United States
            </address>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
