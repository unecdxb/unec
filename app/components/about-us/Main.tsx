import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
const Main = () => {
  return (
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20">
          <div>
            <Image src="/assets/images/about-us/abt-main.jpg" alt="About Us" width={1920} height={1080} className="w-full h-full object-cover" />
          </div>
          <div>
            <SubTitle title="Who We Are" mClass="mb-4 xl:mb-6" />
            <p className="mb-4 text-19">Headquartered in Dubai, United Arab Emirates and established in 1976, [UNEC] is a renowned General Contracting Company with a portfolio spanning local and regional markets, exhibiting our extensive experience across the construction industry.</p>
            <p className="text-19">With proven ability in delivering highly acclaimed projects, we continue to partner with prominent real estate developers to shaping cities and building tomorrows skylines, today.
              [UNEC] is a renowned General Contracting Company headquartered in Dubai, United Arab Emirates. Established in 1976, the company boasts a portfolio spanning local and regional markets, exhibiting our extensive experience across the construction industry.</p>
              <div className="mt-6 flex items-center flex-wrap gap-4">
                <Link href="#chairman-message" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Chairman Message</span></Link>
                <Link href="#executive-committee" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Executive Committee</span></Link>
                <Link href="#our-values" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Our Values</span></Link>
                <Link href="#awards-recognition" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Awards & Recognition</span></Link>
                <Link href="#associated-business" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Associated Business</span></Link>
                <Link href="#qhse" className="text-white bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">QHSE</span></Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;