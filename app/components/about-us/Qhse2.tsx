"use client";
import SubTitle from "../common/SubTitle";
import { aboutUsData } from "./data";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const QHSE2 = () => {
    return (
        <section className="border-t border-gray-300 sp-py" id="qhse">
            <div className="container">
                <SubTitle title="QHSE" mClass="mb-4 xl:mb-12" />
                <div className="grid grid-cols-1 xl:grid-cols-3 divide-y-2 divide-black border-2 max-xl:p-6 max-xl:gap-3">

                    {
                        aboutUsData.QHSEData.items.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div variants={moveUp(index * 0.2 + 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} key={index} className={`last:border-r-0
  ${index !== 0 && index % 3 === 0 ? "xl:col-span-3" : "xl:col-span-1"}
  xl:p-8
  ${(index + 1) % 3 !== 0 ? "xl:border-r-2 border-black" : ""}
`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4 xl:mb-6">
                                            <h3 className="text-25 font-light text-black ">{item.title}</h3>
                                            <div className="flex items-center ">
                                                <IconComponent className="text-50 text-secondary" />
                                            </div>
                                        </div>
                                        <div className={`w-10 h-1 bg-secondary mb-5 xl:mb-7 opacity-100 translate-y-0`} />
                                        <div className="flex flex-wrap justify-between gap-4">
                                            {
                                                item.description.map((desc, index) => {
                                                    return (
                                                        <p className="font-light text-secondary/80 2xl:text-justify" key={index}>{desc}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default QHSE2;