import Link from "next/link";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Success Stories",
    href: "/testimonials",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full px-6 py-4 lg:px-12 lg:py-6 flex justify-between items-center z-10 text-text-primary bg-bg-secondary relative"
    >
      <div className="text-lg lg:text-xl font-bold">Logo/Name</div>

      <ul className="hidden lg:flex gap-8 text-sm lg:text-lg">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="hover:text-accent transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="hidden lg:block px-4 py-2 text-text-primary bg-accent hover:bg-accent-hover transition font-semibold"
      >
        Get In Contact
      </Link>

      <MobileNav links={navLinks} />
    </nav>
  );
}
