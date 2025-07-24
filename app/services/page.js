import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Fitness Coaching Services | Personalized Training & Online Coaching",
  description:
    "Level up your fitness with personalized training programs, one-on-one coaching, and online group sessions. Tailored plans to help you lose fat, build muscle, and reach your goals.",
  openGraph: {
    title:
      "Fitness Coaching Services | Personalized Training & Online Coaching",
    description:
      "Level up your fitness with personalized training programs, one-on-one coaching, and online group sessions. Tailored plans to help you lose fat, build muscle, and reach your goals.",
    url: "https://yourdomain.com/services",
    siteName: "[Your Name] Fitness Coaching",
    images: [
      {
        url: "https://yourdomain.com/heroImg.webp",
        alt: "Professional fitness coach helping client",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

function page() {
  const services = [
    {
      title: "Personalized Training Programs",
      desc: "Tailored workout plans that fit your goals and lifestyle, helping you get stronger, leaner, and healthier.",
      features: [
        "Custom plans for weight loss or muscle gain",
        "Progress tracking and regular updates",
      ],
    },
    {
      title: "One-on-One Coaching",
      desc: "Direct access to me with personalized guidance, motivation, and accountability to keep you on track.",
      features: [
        "Weekly video or phone check-ins",
        "Customized nutrition advice included",
      ],
    },
    {
      title: "Online Group Training",
      desc: "Join a supportive community with live virtual sessions designed to boost your fitness and motivation.",
      features: [
        "Scheduled live workouts in real time",
        "Community support and challenges",
      ],
    },
  ];

  return (
    <section className="min-h-screen space-y-12 text-text-primary py-24 px-4 md:px-12">
      <div className="space-y-4">
        <h1
          className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Level Up Your Fitness With My Services
        </h1>
        <p className="text-lg max-w-xl mx-auto text-text-muted text-center">
          Our tailored fitness coaching services are designed to help you crush
          your goals, build strength, and transform your body.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-8 group hover:bg-bg-secondary transition border border-border p-8 rounded-xl"
          >
            <div className="space-y-4">
              <h2
                className="text-xl text-accent sm:text-3xl leading-tight max-w-3xl mx-auto tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h2>
              <p className="text-lg max-w-xl mx-auto text-text-muted group-hover:text-text-primary/80 transition">
                {service.desc}
              </p>
            </div>
            <ul className="space-y-4 mt-auto">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex flex-col md:flex-row items-center gap-2"
                >
                  <Check className="text-accent w-6 h-6" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link
        href="/contact"
        className="flex items-center w-fit mx-auto bg-accent hover:bg-accent-hover transition text-white font-semibold py-4 px-10 cursor-pointer"
      >
        Get Your Site Started Today
      </Link>

      <div className="h-full w-full bg-bg-secondary text-text-primary rounded-xl space-y-4 py-8 mt-20">
        <h1
          className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Can&apos;t Find What You&apos;re Looking For?
        </h1>
        <p className="text-base lg:text-lg max-w-xl mx-auto text-center">
          Get In Contact With Me To Discuss Your Needs.
        </p>
        <Link
          href="/contact"
          className="flex items-center w-fit mx-auto bg-accent hover:bg-accent-hover transition font-semibold py-4 px-10 cursor-pointer"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default page;
