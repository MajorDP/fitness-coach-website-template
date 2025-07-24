import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me - Personalized Fitness Coaching | [Your Name]",
  description:
    "Professional fitness coach with 5+ years of experience. Custom weight loss and strength training programs tailored to your goals. Achieve lasting results with personalized coaching.",
  openGraph: {
    title: "About Me - Personalized Fitness Coaching | [Your Name]",
    description:
      "Professional fitness coach with 5+ years of experience. Custom weight loss and strength training programs tailored to your goals.",
    url: "https://yourdomain.com/about",
    siteName: "[Your Name] Fitness Coaching",
    images: [
      {
        url: "https://yourdomain.com/aboutImg.webp",
        alt: "Professional fitness coach helping client",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

function Page() {
  const services = [
    {
      title: "Personalized Training Programs",
      features: [
        "Custom plans for weight loss or muscle gain",
        "Progress tracking and regular updates",
      ],
    },
    {
      title: "One-on-One Coaching",
      features: [
        "Customized nutrition advice included",
        "Weekly video or phone check-ins",
      ],
    },
    {
      title: "Online Group Training",
      features: [
        "Scheduled live workouts in real time",
        "Community support and challenges",
      ],
    },
  ];

  return (
    <section className="min-h-screen space-y-32 text-text-primary py-24 px-4 md:px-12">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="w-full lg:w-3/4 xl:w-1/2 h-[20rem] lg:h-auto rounded-tr-full relative">
          <Image
            src="/aboutImg.webp"
            alt="Professional fitness coach helping client"
            fill
            className="w-full h-full object-cover rounded-tl-[8rem] rounded-bl-[8rem] rounded-br-[8rem] shadow-lg shadow-accent-hover"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide text-center lg:text-left"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who Am I? - Your Future Partner in Fitness Success
            </h1>
            <p className="text-base lg:text-lg max-w-xl mx-auto lg:mx-0 text-text-muted text-center lg:text-left">
              I&apos;m a professional fitness coach specializing in personalized
              weight loss programs and strength training. With 5+ years of
              experience helping clients achieve their fitness transformations,
              I focus on delivering tailored coaching that drives results.
              Whether your goal is to get in shape or improve overall health, my
              professional guidance will help you reach your fitness goals
              faster. Join me to start your fitness journey with a coach who
              prioritizes your success and lasting results.
            </p>
          </div>
          <ul className="flex flex-col items-center md:items-start md:w-fit md:mx-auto lg:mx-0 gap-4">
            <li className="flex flex-col md:flex-row text-center items-center gap-2">
              <Check className="text-accent w-6 h-6" />
              Personalized workouts and nutrition for your goals
            </li>
            <li className="flex flex-col md:flex-row text-center items-center gap-2">
              <Check className="text-accent w-6 h-6" />
              Effective plans to burn fat and build muscle
            </li>
            <li className="flex flex-col md:flex-row text-center items-center gap-2">
              <Check className="text-accent w-6 h-6" />
              Motivating coaching to keep you on track
            </li>
          </ul>
          <Link
            href="/services"
            className="flex items-center w-fit mx-auto lg:mx-0 bg-accent hover:bg-accent-hover text-center transition-colors duration-300 text-white font-semibold py-4 px-10 cursor-pointer"
          >
            See My Services
          </Link>
        </div>
      </div>
      <article className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide">
            Why Work With Me?
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-text-muted">
            I don&apos;t do cookie-cutter programs. Every workout, every meal
            plan, and every check-in is designed around your life and goals.
            What I value is honest coaching that gets you stronger and fitter as
            fast as possible.
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row text-center justify-between gap-6 max-w-3xl mx-auto">
          <li>
            <strong className="text-3xl text-accent">45+</strong>
            <br />
            Happy Clients
          </li>
          <li>
            <strong className="text-3xl text-accent">100%</strong>
            <br />
            Guaranteed Results
          </li>
          <li>
            <strong className="text-3xl text-accent">24 Hours</strong>
            <br />
            Response Time
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-8 group hover:bg-bg-secondary transition border border-border p-8 rounded-xl"
            >
              <h2
                className="text-xl text-accent sm:text-3xl leading-tight max-w-3xl tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h2>
              <ul className="space-y-4 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex flex-col md:flex-row items-center justify-center gap-2"
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
          className="flex items-center w-fit mx-auto bg-accent hover:bg-accent-hover text-center transition-colors duration-300 text-white font-semibold py-4 px-10 cursor-pointer"
        >
          Get In Contact
        </Link>
      </article>
    </section>
  );
}

export default Page;
