import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return ( 
    <header className="absolute top-0 left-0 w-full z-50 ">
      <div className="container">
        <div className="flex items-center justify-between py-2 xl:py-4">
          <div>
            <Link href="/">
              <Image src="/assets/images/unec-logo.svg" alt="Logo" width={150} height={150} className="object-contain w-15 xl:w-20" />
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5 xl:gap-10 2xl:gap-12">
                <li><Link href="/" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">Home</Link></li>
                <li><Link href="/about-us" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">About Us</Link></li>
                <li><Link href="/projects" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">Projects</Link></li>
                <li><Link href="/news" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">News</Link></li>
                <li><Link href="/careers" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">Careers</Link></li>
                <li><Link href="/contact-us" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">Contact Us</Link></li>
                <li><Link href="/downloads" className="text-white text-18 uppercase hover:text-white/80 transition-all duration-200">Downloads</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Navbar;