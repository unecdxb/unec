
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const MVV = () => {
  return ( 
    <section className="">
      <div className="container border-t border-gray-300 sp-py">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-20">
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/mission.svg" alt="Mission" width={100} height={100} className="w-full h-10 xl:h-15 object-contain " />
            </motion.div>
            <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Mission</motion.h3>
            <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">To serve the region with reliable, high-quality construction through Innovative Machinery, Professional Manpower and the Accomplished mastery that comes with experience.</motion.p>
          </div>
          <div>
            <motion.div variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/vision.svg" alt="Vision" width={100} height={100} className="w-full h-10 xl:h-13 object-contain " />
            </motion.div>
            <motion.h3 variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Vision</motion.h3>
            <motion.p variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">A Strong and Trusted Partner – building a lasting legacy for our employees, our clients and our nation.</motion.p>
          </div>
          <div>
            <motion.div variants={moveUp(1.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/promise.svg" alt="Promise" width={100} height={100} className="w-full h-10 xl:h-15 object-contain invert-100 brightness-0" />    
            </motion.div>
            <motion.h3 variants={moveUp(1.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Promise</motion.h3>
            <motion.p variants={moveUp(1.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Bringing Tomorrow’s Advantage, Today</motion.p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MVV;