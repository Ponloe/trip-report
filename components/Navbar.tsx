import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/#profile", label: "Profile" },
  { href: "/#overview", label: "Overview" },
  { href: "/#reports", label: "Reports" },
  { href: "/team", label: "Team" },
  { href: "/#conclusion", label: "Conclusion" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Angkor Verde Foods home">
        <span className="brand-logo">
          <Image
            src="/angkor-verde-logo.png"
            alt="Angkor Verde Foods Co., Ltd. logo"
            width={64}
            height={64}
            priority
          />
        </span>
        <span>
          <strong>Angkor Verde Foods</strong>
          <small>BUS430 Trip Report</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Report navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
