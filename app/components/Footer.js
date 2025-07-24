import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-bg-primary text-text-primary border-t border-border py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4 flex flex-col items-center md:justify-start justify-center">
          <h1 className="text-xl font-bold text-center md:text-start">
            YourName
          </h1>
          <p className="text-xs text-center md:text-start">
            I create custom coaching programs tailored to your goals. Whether
            it&apos;s fat loss, muscle gain, or overall health, I can tackle it.
            Start your journey with a coach who&apos;s serious about your
            success.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-2 text-accent font-semibold"
          >
            Let&apos;s Work Together →
          </Link>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-center">Company</h2>
          <ul className="space-y-1 text-xs flex flex-col lg:flex-row items-center justify-center gap-4 text-text-muted">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-center">Resources/Links</h2>
          <ul className="space-y-1 text-xs flex flex-col lg:flex-row items-center justify-center gap-4 text-text-muted">
            <li>
              <Link href="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-accent">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-12 text-center text-sm">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
