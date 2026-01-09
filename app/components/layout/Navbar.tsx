"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IconType } from 'react-icons';

interface SocialLink {
  icon: IconType | 'custom';
  href: string;
  label: string;
  customSrc?: string;
}
const Navbar = () => {
   const socialLinks: SocialLink[] = [
      { icon: FaFacebookF, href: '#', label: 'Facebook' },
      { icon: FaTwitter, href: '#', label: 'Twitter' },
      { icon: FaInstagram, href: '#', label: 'Instagram' },
      { icon: FaYoutube, href: '#', label: 'YouTube' },
      { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
      { icon: 'custom', href: '#', label: 'Bayt', customSrc: '/assets/images/icons/bayt.svg' },
    ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/downloads", label: "Downloads" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Original Header - Always visible on top */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between pt-4 xl:py-4">
            <div>
              <Link href="/">
                <Image src="/assets/images/unec-logo.svg" alt="Logo" width={150} height={150} className="object-contain w-10 xl:w-20" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex gap-5 xl:gap-10 2xl:gap-12">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className={index < navLinks.length - 1 ? "relative after:content-[''] after:absolute after:right-[-10px] xl:after:right-[-20px] 2xl:after:right-[-24px] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-4 after:bg-white/30" : ""}
                  >
                    <Link
                      href={link.href}
                      className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white text-3xl z-50"
              aria-label="Open menu"
            >
              <IoIosMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Scrolled Header - Shows when scrolling down */}
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: isScrolled ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-40 bg-white shadow-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 xl:py-4">
            <div>
              <Link href="/">
                <Image
                  src="/assets/images/unec-logo-dark.svg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="object-contain w-10 xl:w-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Scrolled */}
            <nav className="hidden lg:block">
              <ul className="flex gap-5 xl:gap-8 2xl:gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-800 text-base xl:text-18 uppercase hover:text-primary transition-all duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button - Scrolled */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-gray-800 text-3xl"
              aria-label="Open menu"
            >
              <IoIosMenu />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-[70] lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
                  <Image src="/assets/images/unec-logo-dark.svg" alt="Logo" width={100} height={100} className="object-contain w-10" />
                  <button onClick={closeMobileMenu} className="text-gray-800 text-4xl hover:text-gray-600 transition-colors" aria-label="Close menu" >
                    <IoCloseOutline />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-6">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link href={link.href} onClick={closeMobileMenu} className="block text-gray-800 text-sm uppercase hover:bg-gray-100 rounded-lg transition-all duration-200 font-light" >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="flex items-center gap-1 flex-wrap px-6 pb-10 pt-10 border-t border-gray-200">
                  <h3 className="text-2xl font-normal mb-4">Connect</h3>
                  <ul className="flex items-center gap-1 flex-wrap">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link href={social.href} key={index} aria-label={social.label} className="w-8 h-8 bg-primary  rounded-full border border-white text-white flex items-center justify-center hover:bg-black transition-colors group" >
                        {social.icon === 'custom' && social.customSrc ? (
                          <Image src={social.customSrc} alt={social.label} width={20} height={20} className="w-4 h-4 group-hover:scale-110 transition-all " />
                        ) : (
                          typeof Icon !== 'string' && <Icon className="text-sm group-hover:scale-110 transition-all " />
                        )}
                      </Link>
                    );
                  })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;