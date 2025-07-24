import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Your Name | Transform Your Body & Elevate Your Life",
  description:
    "Personalized fitness coaching programs for fat loss, muscle gain, and overall health. Work with a dedicated coach focused on real results.",
  openGraph: {
    title: "Your Name | Fitness Coaching",
    description:
      "Personalized coaching to transform your body and life. Fat loss, muscle building, and health programs that work.",
    url: "https://yourwebsite.com",
    siteName: "Your Name Fitness Coaching",
    images: [
      {
        url: "/heroImg.jpg",
        width: 800,
        height: 600,
        alt: "Professional fitness coach",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 text-text-primary py-24 px-4 md:px-12">
      <div className="flex flex-col gap-8 lg:gap-4">
        <h1
          className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide text-center lg:text-left"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Name - Transform Your Body. Elevate Your Life.
        </h1>
        <div className="block lg:hidden h-[20rem] md:h-[28rem] w-full rounded-tr-full relative">
          <Image
            src="/heroImg.jpg"
            alt="Professional fitness coach"
            fill
            className="w-full h-full object-cover object-top rounded-[8rem] shadow-lg shadow-accent-hover"
          />
        </div>
        <p className="text-base lg:text-lg max-w-xl mx-auto lg:mx-0 text-text-muted text-center lg:text-left">
          I create custom coaching programs tailored to your goals. Whether
          it&apos;s fat loss, muscle gain, or overall health, I can tackle it.
          Start your journey with a coach who&apos;s serious about your success.
        </p>
        <Link
          href="/contact"
          className="mt-8 flex items-center w-fit mx-auto lg:mx-0 bg-accent hover:bg-accent-hover transition-colors duration-300 text-white font-semibold py-4 px-10 cursor-pointer"
        >
          Get In Contact With Me
        </Link>
        <div className="text-text-muted text-base max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          Affordable, simple, and tailored to your needs.
        </div>
      </div>
      <div className="hidden lg:block w-full rounded-tr-full relative">
        <Image
          src="/heroImg.jpg"
          alt="Professional fitness coach"
          fill
          className="w-full h-full object-cover rounded-tr-[8rem] rounded-bl-[8rem] rounded-br-[8rem] shadow-lg shadow-accent-hover"
        />
      </div>
    </section>
  );
}
