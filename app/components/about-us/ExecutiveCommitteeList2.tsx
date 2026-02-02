
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { aboutUsData } from "./data";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const ExecutiveCommitteeLIst2 = () => {
    return (
        <section className="sp-py" id="executive-committee">
            <div className="container">
                <h2 className="text-25 xs:text-25 xl:text-25  uppercase leading-[1.2] mb-2 xl:mb-6 text-secondary font-[700]">
                    [ UNEC ] EXECUTIVE COMMITTEE
                </h2>
                <div className="grid grid-cols-2 xs:grid-cols-3  lg:grid-cols-3 gap-x-2 xl:gap-x-10 gap-y-6 xl:gap-y-10">
                    {
                        aboutUsData.executiveCommittee.items.map((item, index) => (
                            <motion.div variants={moveUp(0.2 + index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} key={index}>
                                <div className="flex flex-col gap-4 2xl:gap-6  border-black/20  transition-all duration-300 group relative" >
                                    <div className="w-full h-[150px] xs:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[370px] 3xl:h-[450px] bg-[#424155] overflow-hidden">
                                        <Image src={item.image} alt={item.name} width={1920} height={1080} className="w-full h-full object-cover object-top group-hover:scale-110 transition-all transition-linear duration-400" />
                                    </div>
                                    {/* <div>
                                        <h3 className="text-20 xs:text-25 text-secondary font-light leading-[1.1] mb-2  xs:mb-2">{item.name}</h3>
                                        <p className="text-16 xs:text-17 text-primary">{item.position}</p>
                                    </div> */}
                                    <div className="absolute left-0 bottom-0 p-4 xl:px-6 xl:py-8 opacity-0 group-hover:opacity-100 bg-black/70  transition-all duration-500 z-10 w-full flex  flex-col">
                                        <h3 className="text-white text-18 font-bold">{item.name}</h3>
                                        <p className="text-primary text-14 font-[700]"><span className="text-white uppercase text-14 ">[</span>{item.position}<span className="text-white uppercase text-14 ">]</span></p>
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

export default ExecutiveCommitteeLIst2;