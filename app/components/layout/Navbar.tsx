import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return ( 
    <header className="absolute top-0 left-0 w-full z-50 ">
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <div>
            <Link href="/">
              <Image src="/assets/images/logo-white.png" alt="Logo" width={150} height={150} className="object-contain w-20" />
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                <li><Link href="/" className="text-white uppercase">Home</Link></li>
                <li><Link href="/about" className="text-white uppercase">About Us</Link></li>
                <li><Link href="/projects" className="text-white uppercase">Projects</Link></li>
                <li><Link href="/news" className="text-white uppercase">News</Link></li>
                <li><Link href="/careers" className="text-white uppercase">Careers</Link></li>
                <li><Link href="/contact" className="text-white uppercase">Contact Us</Link></li>
                <li><Link href="/downloads" className="text-white uppercase">Downloads</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Navbar;