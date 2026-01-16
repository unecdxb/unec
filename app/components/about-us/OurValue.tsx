
"use client";
import SubTitle from "../common/SubTitle";
import { IoInfiniteOutline } from "react-icons/io5";
import { BsMagic } from "react-icons/bs";
import { GoLog } from "react-icons/go";
import { BsHouseCheck } from "react-icons/bs";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const OurValue = () => {
  return ( 
    <section className="sp-py bg-light" id="our-values">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] pb-10 md:pb-16 lg:pb-20 xl:pb-24 border-b border-gray-300">
          <div>
            <SubTitle title="OUR NAME SPELLS OUR [ VALUES ]" mClass="mb-3 xl:mb-6" />
          </div>
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <IoInfiniteOutline className="text-50 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-25 font-light text-secondary mb-2 xl:mb-4">[ United ] in Approach</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">We build relationships that last to exercise mutual benefits. That is because our interests are always aligned with yours. We consider ourselves as a part of your team since the very start and every decision is aligned with your deadline and goals in mind, resulting in successful outcomes. Our commitment continues even after delivery since we always look for everlasting relationships with our clients. It is a unity of purpose shared by everyone at [UNEC], where experts from many fields come together as one. We bring combined experience and expertise to every job, each team member taking pride in their contribution to our collective strength.</motion.p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-20 sp-pt">
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <BsMagic className="text-50 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-25 font-light text-secondary mb-2 xl:mb-4">[ Engineering ] Solutions</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Engineering is in our DNA and it influences the way we strive to solve your problems and meet your requirements. We cherish the challenges that come with complex projects because they result in solutions that create the outstanding.</motion.p>
            </div>
          </div>
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <BsHouseCheck className="text-50 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-25 font-light text-secondary mb-2 xl:mb-4">[ Construction ] Done Well</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">We always make sure to improve safety and efficiency while reducing our impact on the natural environment. When you join hands with [UNEC], you sign up for quality workmanship at an excellent value executed in a responsible and sustainable way.</motion.p>
            </div>
          </div>
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <GoLog className="text-50 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-25 font-light text-secondary mb-2 xl:mb-4">[ Company ] Unlimited</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Future always excites us, innovation inspires us & creativity drives us. As technology and techniques evolve, [UNEC] continuously explores innovative ideas and implements the latest in construction tech to bolster the efficiency of our Processes, policies and upskilling our talent pool.</motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default OurValue;