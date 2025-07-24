import Link from "next/link";
import { sendQuery } from "../lib/services";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact [Your Name] | Start Your Fitness Transformation Today",
  description:
    "Get in touch with [Your Name] Fitness Coaching to begin your personalized fitness journey. Fast responses and free discovery calls available.",
  openGraph: {
    title: "Contact [Your Name] | Start Your Fitness Transformation Today",
    description:
      "Reach out now for custom coaching plans tailored to your goals. Book a free discovery call to discuss how we can work together.",
    url: "https://yourdomain.com/contact",
    siteName: "[Your Name] Fitness Coaching",
    images: [
      {
        url: "https://yourdomain.com/heroImg.webp",
        alt: "Professional fitness coach helping clients worldwide",
      },
    ],
    type: "website",
    locale: "en-US",
  },
};

function page() {
  return (
    <section className="min-h-screen py-24 px-4 md:px-12 text-text-primary space-y-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1
          className="text-4xl sm:text-5xl tracking-wide leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to Start Your Fitness Journey?
        </h1>
        <p className="text-base lg:text-lg text-text-muted">
          Reach out today to start your personalized coaching plan. I&apos;ll
          respond within 24 hours to help you get moving.
        </p>
      </div>

      <ContactForm />

      <article className="text-center mt-24 space-y-4 max-w-2xl mx-auto p-4">
        <h2 className="text-3xl font-semibold">Prefer to Talk Directly?</h2>
        <p className="text-text-muted">
          You can book a free 15-minute discovery call to walk through your
          goals and see if we&apos;re the right fit.
        </p>
        <Link
          href="https://calendly.com/your-link"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 mt-4"
        >
          Book a Discovery Call
        </Link>
      </article>
    </section>
  );
}

export default page;
