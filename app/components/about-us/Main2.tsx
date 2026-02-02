
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const Main = () => {
    return (
        <section className="sp-py">
            <div className="container border-gray-300 flex flex-col gap-14">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8">
                    <div className="border-gray-300/80 border-r-2 pr-5">
                        {/* <motion.div variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
                            <Image src="/assets/images/about-us/icons/mission.svg" alt="Mission" width={100} height={100} className="w-full h-10 xl:h-15 object-contain " />
                        </motion.div> */}
                        <motion.p variants={moveUp(1.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 xl:text-20 text-secondary font-[700] mb-2 xl:mb-4 uppercase">Our [Mission]</motion.p>
                        <motion.p variants={moveUp(1.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="xl:text-13 font-[700] text-secondary">To serve the region with reliable, high-quality construction through Innovative Machinery, Professional Manpower and the Accomplished mastery that comes with experience.</motion.p>
                    </div>
                    <div className="border-gray-300/80 border-r-2 pr-5">
                        {/* <motion.div variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
                            <Image src="/assets/images/about-us/icons/vision.svg" alt="Vision" width={100} height={100} className="w-full h-10 xl:h-13 object-contain " />
                        </motion.div> */}
                        <motion.p variants={moveUp(1.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 xl:text-20 text-secondary font-[700] mb-2 xl:mb-4 uppercase">Our [Vision]</motion.p>
                        <motion.p variants={moveUp(1.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="xl:text-13 font-[700] text-secondary">A Strong and Trusted Partner – building a lasting legacy for our employees, our clients and our nation.</motion.p>
                    </div>
                    <div>
                        {/* <motion.div variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
                            <Image src="/assets/images/about-us/icons/promise.svg" alt="Promise" width={100} height={100} className="w-full h-10 xl:h-15 object-contain invert-100 brightness-0" />
                        </motion.div> */}
                        <motion.p variants={moveUp(1.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 xl:text-20 text-secondary font-[700] mb-2 xl:mb-4 uppercase">Our [Promise]</motion.p>
                        <motion.p variants={moveUp(1.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="xl:text-13 font-[700] text-secondary">Bringing Tomorrow’s Advantage, Today</motion.p>
                    </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-y-10 xl:gap-x-20">
                    <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#chairman-message" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[Chairman Message]</p></Link>
                    </motion.div>
                    <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#executive-committee" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[Executive Committee]</p></Link>
                    </motion.div>
                    <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#our-values" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[Our Values]</p></Link>
                    </motion.div>
                    <motion.div variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#awards-recognition" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[Awards & Recognition]</p></Link>
                    </motion.div>
                    <motion.div variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#associated-business" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[Associated Business]</p></Link>
                    </motion.div>
                    <motion.div variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-[90px] bg-[#EBEBEB]">
                        <Link href="#qhse" className="text-xs md:text-sm xl:text-[1rem] uppercase  w-full h-full flex items-center justify-center text-center hover:translate-y-[-2px] group transition-all"><p className="inline-block transition-all duration-300 text-secondary font-[700]">[QHSE]</p></Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Main;