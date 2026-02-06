
"use client";
import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { IconType } from 'react-icons';
import { CgBrackets } from "react-icons/cg";
import { motion } from "framer-motion";
import { moveUp, moveLeft } from "../motionVarients";
import { footerData } from "./data";
// Define the type for social links
interface SocialLink {
  icon: IconType | 'custom';
  href: string;
  label: string;
  customSrc?: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: 'custom', href: '#', label: 'Bayt', customSrc: '/assets/images/icons/bayt.svg' },
  ];

  return (
    <footer className="py-12 bg-black text-white font-suisse-intl">
      <div className="container">
        <motion.div className="mb-5 md:mb-6 lg:mb-12" variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
          <Image src="/assets/images/logo-footer.png" alt="" width={489} height={149} className="w-auto h-[70px]" />
        </motion.div>
        <div className="grid grid-cols-1 xs:grid-cols-3 xl:grid-cols-[2fr_2fr_2fr_3fr] gap-6 relative overflow-hidden">
          <div>
            <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-xl xl:text-2xl font-[600] mb-4 !font-suisse-intl uppercase">Quick Links</motion.h3>
            <ul className="space-y-3">
              {
                footerData.quickLinks.map((item, index) => (
                  <motion.li key={index} variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="group">
                    <Link href={item.href} className="flex items-center gap-3">
                      <Image src="/assets/images/chevicon-left.svg" alt="" width={8} height={8} className=" group-hover:translate-x-1 transition-all duration-200" />
                      <span className="hover:text-white/70 transition-colors duration-200 text-sm uppercase ">{item.title}</span>
                    </Link>
                  </motion.li>
                ))
              }
            </ul>

          </div>
          <div>
            <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-xl xl:text-2xl font-[600] mb-4 uppercase">Legal</motion.h3>
            <ul className="space-y-3">
              {
                footerData.documents.map((item, index) => (
                  <motion.li key={index} variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="group">
                    <Link href={item.href} target="_blank" className="flex items-center gap-3">
                      <Image src="/assets/images/chevicon-left.svg" alt="" width={8} height={8} className=" group-hover:translate-x-1 transition-all duration-200" />
                      <span className="hover:text-white/70 transition-colors duration-200 text-sm uppercase ">{item.title}</span>
                    </Link>
                  </motion.li>
                ))
              }
            </ul>
          </div>
          <div>
            <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-xl xl:text-2xl font-[600] mb-4 uppercase">Connect</motion.h3>
            <ul className="space-y-3">
              <motion.li variants={moveUp(0.4)} initial="hidden" animate="show" viewport={{ amount: 0.1, once: true }} className="group">
                <Link href="/contact-us" className="flex items-center gap-3">
                  <Image src="/assets/images/chevicon-left.svg" alt="" width={8} height={8} className=" group-hover:translate-x-1 transition-all duration-200" />
                  <span className="hover:text-white/70 transition-colors duration-200 text-sm uppercase ">Connect Us</span>
                </Link>
              </motion.li>
              <motion.li variants={moveUp(0.6)} initial="hidden" animate="show" viewport={{ amount: 0.1, once: true }} className="group">
                <Link href="/contact-us" className="flex items-center gap-3">
                  <Image src="/assets/images/chevicon-left.svg" alt="" width={8} height={8} className="group-hover:translate-x-1 transition-all duration-200" />
                  <span className="hover:text-white/70 transition-colors duration-200 text-sm uppercase ">Enquiry Form</span>
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="col-span-2 xs:col-span-3 xl:col-span-1 border-b border-white/20 xl:border-b-0 pb-6 xl:pb-0">
            <div className="flex gap-6 flex-col h-full justify-between">
              <div className="flex flex-col gap-6 w-full">
                <div className="w-full">
                  <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-lg font-bold md:mb-4 mb-2 uppercase">Subscribe to our newsletter</motion.h3>
                  <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="relative w-full max-w-[80vw] xs:max-w-[300px] xl:max-w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <MdEmail className="text-gray-400 text-xl" />
                    </div>
                    <input type="email" placeholder="Enter your email address" className="w-full py-3 pl-12 2xl:pr-24 text-sm xs:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                    <button className="absolute inset-y-0 right-0 flex items-center p-3 xl:px-6 text-white rounded-r-lg hover:bg-white/10 cursor-pointer transition-colors">
                      <IoMdSend className="text-xl" />
                    </button>
                  </motion.div>
                </div>
                <div className="xl:items-end gap-3 flex xl:justify-end w-full">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.div key={index} variants={moveLeft(index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                        <Link href={social.href} aria-label={social.label} className="w-8 h-8 bg-black border border-white text-white flex items-center justify-center hover:bg-gray-800 transition-colors group" >
                          {social.icon === 'custom' && social.customSrc ? (
                            <Image src={social.customSrc} alt={social.label} width={20} height={20} className="w-4 h-4 group-hover:scale-110 transition-all" />
                          ) : (
                            typeof Icon !== 'string' && <Icon className="text-sm group-hover:scale-110 transition-all " />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link href={social.href} key={index} aria-label={social.label} className="w-10 h-10 bg-black border border-white text-white flex items-center justify-center hover:bg-gray-800 transition-colors group" >
                      {social.icon === 'custom' && social.customSrc ? (
                        <Image src={social.customSrc} alt={social.label} width={20} height={20} className="w-5 h-5 group-hover:scale-110 transition-all " />
                      ) : (
                        typeof Icon !== 'string' && <Icon className="text-lg group-hover:scale-110 transition-all " />
                      )}
                    </Link>
                  );
                })}
              </div> */}
              <div className="flex items-end xl:justify-end">
                <div className="">
                  <div className="flex xl:justify-end xl:items-end flex-wrap gap-y-2">
                    <p className="text-white/90 uppercase text-xs">All rights reserved © {new Date().getFullYear()} UNEC. </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-3 xl:hidden mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link href={social.href} key={index} aria-label={social.label} className="w-8 h-8 bg-black border border-white text-white flex items-center justify-center hover:bg-gray-800 transition-colors group" >
                    {social.icon === 'custom' && social.customSrc ? (
                      <Image src={social.customSrc} alt={social.label} width={20} height={20} className="w-4 h-4 group-hover:scale-110 transition-all " />
                    ) : (
                      typeof Icon !== 'string' && <Icon className="text-sm group-hover:scale-110 transition-all " />
                    )}
                  </Link>
                );
              })}
            </div> */}

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;