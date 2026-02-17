"use client";
import SubTitle from "../common/SubTitle";
import { IoInfiniteOutline } from "react-icons/io5";
import { BsMagic } from "react-icons/bs";
import { GoLog } from "react-icons/go";
import { BsHouseCheck } from "react-icons/bs";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { AboutData } from "./type";
import AnchorSection from "../common/AnchorSection";

const OurValue = ({ data }: { data: AboutData["fifthSection"] }) => {
    return (
        <AnchorSection id={data.id}>
            <section className="sp-py bg-light">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] pb-10 md:pb-16 lg:pb-20 xl:pb-24 border-b border-gray-300">
                        <div>
                            <SubTitle title={data.title} mClass="mb-3 xl:mb-6" />
                        </div>
                        <div>
                            <motion.div
                                variants={moveUp(0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ amount: 0.1, once: true }}
                                className="mb-3 xl:mb-6"
                            >
                                {/* <IoInfiniteOutline className="text-24 text-secondary" /> */}
                                <Image src={data.items[0].image} alt={data.items[0].imageAlt} width={40} height={40} />
                            </motion.div>
                            <div>
                                <motion.h3
                                    variants={moveUp(0.4)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ amount: 0.1, once: true }}
                                    className="text-20 font-bold text-secondary mb-2 xl:mb-4 uppercase"
                                >
                                    {data.items[0].title}
                                </motion.h3>
                                <motion.p
                                    variants={moveUp(0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ amount: 0.1, once: true }}
                                    className="text-secondary"
                                >
                                    {data.items[0].description}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-20 sp-pt">
                        {data.items.slice(1).map((item: any, index: number) => (
                            <div key={index}>
                                <motion.div
                                    variants={moveUp(0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ amount: 0.1, once: true }}
                                    className="mb-3 xl:mb-6"
                                >
                                    {/* <BsMagic className="text-24 text-secondary" /> */}
                                    <Image src={item.image} alt={item.imageAlt} width={40} height={40} />
                                </motion.div>
                                <div>
                                    <motion.h3
                                        variants={moveUp(0.4)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ amount: 0.1, once: true }}
                                        className="text-20 font-bold text-secondary mb-2 xl:mb-4 uppercase"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        variants={moveUp(0.6)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ amount: 0.1, once: true }}
                                        className="text-secondary"
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </div>
                        ))}
                        {/* <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <BsHouseCheck className="text-24 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 font-bold text-secondary mb-2 xl:mb-4 uppercase">[ Construction ] Done Well</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">We always make sure to improve safety and efficiency while reducing our impact on the natural environment. When you join hands with [UNEC], you sign up for quality workmanship at an excellent value executed in a responsible and sustainable way.</motion.p>
            </div>
          </div>
          <div>
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mb-3 xl:mb-6">
              <GoLog className="text-24 text-secondary" />
            </motion.div>
            <div>
              <motion.h3 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 font-bold text-secondary mb-2 xl:mb-4 uppercase">[ Company ] Unlimited</motion.h3>
              <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">Future always excites us, innovation inspires us & creativity drives us. As technology and techniques evolve, [UNEC] continuously explores innovative ideas and implements the latest in construction tech to bolster the efficiency of our Processes, policies and upskilling our talent pool.</motion.p>
            </div>
          </div> */}
                    </div>
                </div>
            </section>
        </AnchorSection>
    );
};

export default OurValue;
