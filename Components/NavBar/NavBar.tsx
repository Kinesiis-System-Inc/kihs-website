"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowDownRight } from "lucide-react";
import { PiSirenThin } from "react-icons/pi";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const upperNavLink = [
    { href: "/social-responsibility", label: "Social Responsibility (CSR)" },
    { href: "/career", label: "Careers With Us" },
    { href: "/frequantly-asked-questions", label: "FAQ" },
  ];

  const navLinks = [
    { href: "/", label: "" },
    { href: "/about", label: "About Us" },
    { href: "/medical-services", label: "Medical Services" },
    { href: "/patients-and-visitors", label: "Patients & Visitors" },
    { href: "/doctors-and-dept", label: "Doctors & Dept" },
    { href: "/academics", label: "Academics" },
  ];

  return (
    <nav className="fixed w-[100vw] top-0 left-0 right-0 bg-white z-50">
      <div className="w-full hidden md:block md:h-14 bg-primary1 p-4">
        <div className="hidden md:flex space-x-8">
          {upperNavLink.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors text-white text-[14px]`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-14 md:h-16 w-full md:w-max md:absolute md:top-0 md:right-20 bg-alert1 rounded-b-2xl flex items-center justify-around gap-4 px-4 text-white text-[12px] md:tex-[16px]">
        <PiSirenThin className="text-white" size={24} />
        <span>24x7 Helpline</span>
        <div className="flex gap-2 font-semibold">
          <a href="tel:0233-2305329">0233-2305329</a>
        </div>
      </div>
      <div className="w-full mx-auto px-8 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            <Image src="/logo.png" alt="KIHS Logo" width={90} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors text-[16px] ${
                  pathname === link.href ? "text-primary1" : "text-customGrey"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={"/contact-us"}
            className="px-3 py-1 bg-inherit flex gap-1 items-center justify-center border-[2px] border-solid border-primary1 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary1 hover:text-white hover:shadow-lg"
          >
            <span className="font-medium text-[16px]">Contact Us</span>
            <ArrowDownRight size={24} />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded hover:bg-gray-100 ${
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {upperNavLink.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 rounded hover:bg-gray-100 ${
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
