import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Client Success Stories | Real Fitness Transformations",
  description:
    "See real fitness transformations from clients who committed and crushed their goals with personalized coaching.",
  openGraph: {
    title: "Client Success Stories | Real Fitness Transformations",
    description:
      "Discover how my coaching helped clients lose fat, build muscle, and transform their bodies with proven results and personalized programs.",
    url: "https://yourdomain.com/testimonials",
    siteName: "[Your Name] Fitness Coaching",
    images: [
      {
        url: "https://yourdomain.com/beforeafterclient1.webp",
        alt: "Client Rachel's 12-week weight loss transformation",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

function page() {
  const successStories = [
    {
      name: "Rachel - 12-Week Weight Loss Transformation",
      image: "/beforeafterclient1.webp",
      description:
        "Rachel came in feeling tired, stuck, and frustrated with yo-yo diets. Through consistent training and guided nutrition, she lost over 18 pounds, toned her core, and reignited her confidence - proving that sustainable fat loss is possible.",
      stats: [
        "Lost 18 lbs and 4 inches off her waist in 12 weeks",
        "Went from zero energy to working out 4x a week consistently",
      ],
    },
    {
      name: "Marcus - From High Body Fat to Lean Muscle",
      image: "/beforeafterclient2.png",
      description:
        "Marcus was holding extra fat and struggled with strength. After 1 year of focused resistance training and meal coaching, he cut fat, gained muscle definition, and now confidently walks shirtless at the beach.",
      stats: [
        "Dropped 10% body fat and gained visible abs and chest definition",
        "Increased strength across all compound lifts by 30%+",
      ],
    },
    {
      name: "David - Skinny to Fit in Just 14 Weeks",
      image: "/beforeafterclient3.jpg",
      description:
        "David started lean but lacked muscle and structure. With a hypertrophy-focused plan and progressive overload, he added size to his arms, shoulders, and legs — finally achieving the athletic build he'd always wanted.",
      stats: [
        "Gained 15 lbs of lean muscle in 10 weeks",
        "Transformed from skinny frame to visibly muscular physique",
      ],
    },
  ];

  return (
    <section
      className="min-h-screen space-y-32 text-text-primary py-24 px-2 md:px-12"
      id="testimonials"
    >
      <header className="space-y-4 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl leading-tight tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Fitness Success Of My Clients
        </h1>
        <p className="text-base lg:text-lg text-text-muted">
          I&apos;m not here to sell you promises. These are a few of my clients
          who put in the work and saw real results. This is what my coaching
          helped them achieve.
        </p>
      </header>

      <div className="space-y-24">
        {successStories.map((story, index) => (
          <article
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 items-start`}
            key={story.description}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
              <div className="relative w-full aspect-square md:w-[30rem] md:h-[20rem] mx-auto">
                <Image
                  src={story.image}
                  alt="Before website redesign"
                  fill
                  className="w-full h-full object-cover object-top rounded-xl border border-border"
                />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 text-xs md:text-sm font-semibold rounded">
                  Before & After
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full text-center lg:text-left">
              <h2 className="text-2xl font-semibold">{story.name}</h2>
              <p className="text-text-muted max-w-3xl">{story.description}</p>
              <ul className="text-text-muted space-y-4">
                {story.stats.map((stat) => (
                  <li
                    key={stat}
                    className="flex flex-col md:flex-row items-center gap-2"
                  >
                    <Check className="text-accent w-6 h-6" /> {stat}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="h-full w-full bg-bg-secondary text-text-primary rounded-xl space-y-4 py-8 mt-20">
        <h1
          className="text-4xl sm:text-5xl leading-tight max-w-3xl mx-auto tracking-wide text-center p-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready To Become The Next Success Story?
        </h1>
        <Link
          href="/contact"
          className="flex items-center w-fit mx-auto bg-accent hover:bg-accent-hover transition font-semibold py-4 px-10 cursor-pointer"
        >
          Let&apos;s talk
        </Link>
      </div>
    </section>
  );
}

export default page;
