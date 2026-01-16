
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const Main = () => {
  return (
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 xl:gap-x-20 items-stretch">
          <motion.div variants={moveUp(0.2+0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-full">
            <Image src="/assets/images/about-us/abt-main.jpg" alt="About Us" width={1920} height={1080} className="w-full h-full object-cover" />
          </motion.div>
          <div className="h-full flex flex-col justify-between gap-5">
              <div> 
                <SubTitle title="Who We Are" mClass="mb-2 xl:mb-6" delay={0.8} />
                <div>
                  <motion.p variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-4 last:mb-0 ">Headquartered in Dubai, United Arab Emirates and established in 1976, [UNEC] is a renowned General Contracting Company with a portfolio spanning local and regional markets, exhibiting our extensive experience across the construction industry.</motion.p>
                  <motion.p variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-4 last:mb-0">With proven ability in delivering highly acclaimed projects, we continue to partner with prominent real estate developers to shaping cities and building tomorrows skylines, today.
                    [UNEC] is a renowned General Contracting Company headquartered in Dubai, United Arab Emirates. Established in 1976, the company boasts a portfolio spanning local and regional markets, exhibiting our extensive experience across the construction industry.</motion.p>
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-1 xl:gap-4 ">
                <motion.div variants={moveUp(1.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#chairman-message" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Chairman Message</span></Link>
                </motion.div>
                <motion.div variants={moveUp(1.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#executive-committee" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Executive Committee</span></Link>
                </motion.div>
                <motion.div variants={moveUp(1.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#our-values" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Our Values</span></Link>
                </motion.div>
                <motion.div variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#awards-recognition" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Awards & Recognition</span></Link>
                </motion.div>
                <motion.div variants={moveUp(2.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#associated-business" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">Associated Business</span></Link>
                </motion.div>
                <motion.div variants={moveUp(2.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                <Link href="#qhse" className="text-white text-xs md:text-sm xl:text-base bg-black px-4 py-2 hover:bg-primary hover:translate-y-[-2px] group transition-all"><span className="inline-block transition-all duration-300">QHSE</span></Link>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;