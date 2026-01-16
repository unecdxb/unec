'use client';
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const Main = () => {
  return ( 
    <section className="">
      <div className="container sp-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-full">
            <Image src="/assets/images/careers/careers-main.jpg" width={1920} height={1080} alt="" className="w-full h-full xl:max-h-[60dvh] object-cover" />
          </motion.div>
          <div>
            <SubTitle title="BUILD A PROMISING CAREER THAT LASTS Become an integral part of [UNEC] now!" />
            <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>Here at [UNEC], we want to make a difference in shaping tomorrow’s legacy. Hence, we provide an environment for our employees where they can explore their talents and growth opportunities. We are focused on the continuous development of our team members’ career paths by enhancing and sharpening their competencies & capabilities.</motion.p>
          </div>
        </div>
      </div>
      <hr className="h-1 border-gray-200 mb-0" />
    </section> 
   );
}
 
export default Main;