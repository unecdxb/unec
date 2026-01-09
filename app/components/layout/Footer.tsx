import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
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
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: 'custom', href: '#', label: 'Bayt', customSrc: '/assets/images/icons/bayt.svg' },
  ];

  return (
    <footer className="pt-12 bg-black text-white font-suisse-intl">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
          <div>
            <div className="mb-4 md:mb-6 lg:mb-12">
              <Image src="/assets/images/logo-footer.png" alt="" width={489} height={149} className="w-auto h-[70px]" />
            </div>
            <div>
              <h3 className="text-2xl font-normal mb-4 !font-suisse-intl">Subscribe to our newsletter</h3>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <MdEmail className="text-gray-400 text-xl" />
                </div>
                <input type="email" placeholder="Enter your email address" className="w-full py-3 pl-12 pr-24 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                <button className="absolute inset-y-0 right-0 flex items-center px-6  text-white rounded-r-lg hover:bg-white/10 cursor-pointer transition-colors">
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
          </div>
          <div>
            <h3 className="text-2xl font-normal mb-4 !font-suisse-intl">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>About us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>News</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Contact us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Downloads</span>
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <h3 className="text-2xl font-normal mb-4 !font-suisse-intl">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>QHSE Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Code of Conduct</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Equal Opportunity Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Modern Slavery Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Whistleblowing Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Data Protection Policy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-normal mb-4 !font-suisse-intl">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Connect Us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgBrackets className="text-xl text-primary" />
                  <span>Enquiry Form</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="py-4 border-t border-white/20 mt-6">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-y-2">
            <p className="text-white/50">© 2025 UNEC. All rights reserved.</p>
            <div className="flex items-center gap-3 ">
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