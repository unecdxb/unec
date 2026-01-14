import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from "next/link";
import { IconType } from 'react-icons';
import { CgBrackets } from "react-icons/cg";
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
    <footer className="pt-12 bg-black text-white font-suisse-intl">
      <div className="container">
        <div className="grid grid-cols-1 xs:grid-cols-3 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
          <div className="col-span-2 xs:col-span-3 xl:col-span-1 border-b border-white/20 xl:border-b-0 pb-6 xl:pb-0">
            <div className="mb-5 md:mb-6 lg:mb-12">
              <Image src="/assets/images/logo-footer.png" alt="" width={489} height={149} className="w-auto h-[70px]" />
            </div>
            <div>
              <h3 className="text-2xl font-normal md:mb-4 mb-2">Subscribe to our newsletter</h3>
              <div className="relative w-full max-w-[80vw] xs:max-w-[60vw] md:max-w-[70%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <MdEmail className="text-gray-400 text-xl" />
                </div>
                <input type="email" placeholder="Enter your email address" className="w-full py-3 pl-12 pr-24 text-sm xs:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                <button className="absolute inset-y-0 right-0 flex items-center px-6 text-white rounded-r-lg hover:bg-white/10 cursor-pointer transition-colors">
                  <IoMdSend className="text-xl" />
                </button>
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
            </div>
            <div className="flex items-center gap-3 xl:hidden mt-6">
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
            </div>
          </div>
          <div>
            <h3 className="text-xl xl:text-2xl font-normal mb-4 !font-suisse-intl">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary " />
                  <span className="hover:text-white/70 transition-colors duration-200">About us</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">News</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Contact us</span>
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Downloads</span>
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <h3 className="text-xl xl:text-2xl font-normal mb-4 !font-suisse-intl">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://unec.co/wp-content/uploads/2025/03/New-UNEC-Draft-Revision-of-QHSE-Policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">QHSE Policy</span>
                </Link>
              </li>
              <li>
                <Link href="https://unec.co/wp-content/uploads/2021/10/Code-of-Conduct-and-Business-Ethics-policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Code of Conduct</span>
                </Link>
              </li>
              <li>
                <Link href="https://unec.co/wp-content/uploads/2021/10/equal-opportunity-policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Equal Opportunity Policy</span>
                </Link>
              </li>
              <li>
                <Link href="https://unec.co/wp-content/uploads/2021/10/Modern-Slavery-Policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Modern Slavery Policy</span>
                </Link>
              </li>
              <li>
                <Link href="https://unec.co/wp-content/uploads/2021/10/Whistleblowing-policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Whistleblowing Policy</span>
                </Link>
              </li>
              <li>
                <Link href="https://unec.co/wp-content/uploads/2022/09/Data-Protection-and-Data-Security-Policy.pdf" target="_blank" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Data Protection Policy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl xl:text-2xl font-normal mb-4 ">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact-us" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Connect Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span className="hover:text-white/70 transition-colors duration-200">Enquiry Form</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="py-4 border-t border-white/20 mt-6">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-y-2">
            <p className="text-white/50 ">© {new Date().getFullYear()} UNEC. All rights reserved.</p>
            <div className="items-center gap-3 hidden xl:flex">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;