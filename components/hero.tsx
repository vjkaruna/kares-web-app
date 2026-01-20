import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight tracking-tight text-balance">
          Your Agent for
          <br />
          <span className="italic">Comprehensive Care</span>
        </h1>

        <p className="mt-8 md:mt-12 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto text-pretty">
          Kares AI is a new approach to healthcare. We bring together
          personalized data about your lifestyle, routines and habits, and your
          long-term goals, to provide the most comprehensive approach to care
          management possible. Our personalized healthcare agent helps you
          navigate a complex medical system, and stay ahead of long-term
          management of conditions like prediabetes and cardiac care, by arming
          you with the right information and care team to stay ahead of your
          goals.
        </p>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="font-sans text-base bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            Download the App
          </a>
          <a
            href="#how-it-works"
            className="font-sans text-base bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/80 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Image Grid */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 md:aspect-auto md:h-full">
            <Image
              src="/images/walking.jpg"
              alt="Couple walking on a nature trail"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/healthy-meal.jpg"
              alt="Healthy colorful meal"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/wearables.jpg"
              alt="Health tracking wearable devices"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/exercise.jpg"
              alt="Person doing yoga exercise"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/stethoscope.jpg"
              alt="Medical stethoscope"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
