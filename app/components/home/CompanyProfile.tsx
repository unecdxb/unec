"use client";
import MechanicalCounter from "../common/MechanicalCounter";
import PrimaryBtn from "../common/PrimaryBtn";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const CompanyProfile = () => {
  const stats = [
    { end: 1976, label: 'Establishment Year', suffix: '' },
    { end: 48, label: 'Years of Dedication', suffix: '' },
    { end: 11000, label: 'Workforce', suffix: '' },
    { end: 11, label: 'Billions AED Current Projects', suffix: '' },
    { end: 341, label: 'Projects Completed', suffix: '' },
    { end: 21, label: 'On-Going Projects', suffix: '' },
  ];
  return ( 
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr] gap-y-10 gap-x-10 xl:gap-x-20 ">
          <div className="flex flex-col justify-between gap-4">
           <div className="space-y-2 xl:space-y-4 font-medium ">
              <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}} className="text-19 xl:text-20 font-light xl:font-normal text-secondary">
                [ UNEC ] is a multi-award winning general contracting company with more than 40 years of expertise in the region.</motion.p>
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}} className="text-19 xl:text-20 font-light xl:font-normal text-secondary">Our vast experience, forward-thinking innovations and commitment to the highest standards in professionalism, safety and efficiency have made us a trusted collaborator to the developers of some of the area's most iconic buildings and landmarks.</motion.p>
           </div>
             <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}}>
              <PrimaryBtn href="/about-us" text="Corporate &nbsp;Profile" />
             </motion.div>
          </div>
          <div>
            <div className="grid grid-cols-2 xs:grid-cols-3  md:grid-cols-2 gap-[2px]">
              {stats.map((stat, index) => (
                <MechanicalCounter key={index} keyIndex={index} end={stat.end} label={stat.label} suffix={stat.suffix} duration={2.5} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default CompanyProfile;