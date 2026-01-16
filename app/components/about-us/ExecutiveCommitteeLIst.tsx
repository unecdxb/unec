
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { aboutUsData } from "./data";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const ExecutiveCommitteeLIst = () => {
  return (
    <section className="sp-py" id="executive-committee">
      <div className="container">
        <SubTitle title="Executive Committee" mClass="mb-4 xl:mb-12" />
        <div className="grid grid-cols-2 xs:grid-cols-3  lg:grid-cols-3 gap-x-2 xl:gap-x-10 gap-y-6 xl:gap-y-10">
          {
            aboutUsData.executiveCommittee.items.map((item, index) => (
              <motion.div variants={moveUp(0.2 + index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} key={index}>
                <div className="flex flex-col gap-4 border-b border-black/20 pb-4 xl:pb-6 transition-all duration-300" >
                  <div className="w-full h-[150px] xs:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[350px] 3xl:h-[450px] bg-[#424155] overflow-hidden">
                    <Image src={item.image} alt={item.name} width={1920} height={1080} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-20 xs:text-25 text-secondary font-light leading-[1.1] mb-2  xs:mb-2">{item.name}</h3>
                    <p className="text-16 xs:text-17 text-primary">{item.position}</p>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ExecutiveCommitteeLIst;