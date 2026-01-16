"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const SubContents = () => {
  return (
    <section className="sp-py" id="associated-business">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 items-center bg-light px-6 py-8 xl:px-12 xl:py-15">
          <div className="xl:order-2 h-full">
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-full">
              <Image src="/assets/images/careers/careers-main.jpg" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="xl:order-1">
            <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-32 uppercase text-secondary font-normal mb-2 xl:mb-4">WHY WORK WITH US</motion.h3>
            <div className="space-y-4">
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Joining [UNEC] makes you part of a team which is dedicated to achieving the highest level of excellence in best practices, creativity and cutting-edge thinking. Together we aim to turn the vision of a project into reality.</motion.p>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">We always believe that a new project is a new challenge. And each challenge adds valuable experience to the team. With the large variety of UNEC’s project portfolio ranging from towers, malls, schools, hospitals, villas to the most iconic developments. [UNEC] is always keen to pass on this knowledge and expertise to the generations of tomorrow.</motion.p>
            </div>
          </div>
          
        </div>
        <hr className="h-[1px] border-gray-200 mb-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 items-center bg-light px-6 py-8 xl:px-12 xl:py-15">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-full">
            <div className="h-full">
              <Image src="/assets/images/careers/careers-2.jpg" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <div className="">
            <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-32 uppercase text-secondary font-normal  mb-2 xl:mb-4">BENEFITS OF WORKING WITH [UNEC]</motion.h3>
           <div className="space-y-4">
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">At [UNEC], we have a “one team, one family” culture. UNEC continuously demonstrates strong commitment to the ongoing development of our people.</motion.p>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Our employee’s job satisfaction and career path development is always a top Priority at [UNEC]. The Employee Performance Appraisal Scheme and training & development programs, as well as the introduction of S.M.A.R.T goal settings and Key Performance Indicators KPI’s, ensures that we tailor career prospects to every individuals’ needs and always focus on encouraging employee-led career conversations.</motion.p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubContents;