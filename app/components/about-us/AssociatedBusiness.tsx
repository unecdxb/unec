
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { AboutData } from "./type";
const AssociatedBusiness = ({ data }: { data: AboutData["seventhSection"] }) => {
  return (
    <section className="sp-py" id="associated-business">
      <div className="container">
        <SubTitle title={data.title} mClass="mb-4 xl:mb-12" />
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 items-stretch bg-light px-6 py-8 xl:px-12 xl:py-15">

              <>
                <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className={index % 2 === 0 ? "xl:order-2" : "xl:order-1"}>
                  <div className="w-full h-full">
                    <Image src={item.image} alt={item.imageAlt} width={1920} height={1080} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <div className="flex flex-col justify-between xl:order-1">
                  <div>
                    <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-24 font-bold  mb-2 xl:mb-4 text-secondary">{item.title}</motion.h3>
                    <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-secondary/80 mb-2 md:mb-4">{item.description}</motion.p>
                  </div>
                  {/* <div className="w-fit mt-16 text-center">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-black to-black  font-semibold 
              text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                <span className="relative z-10">Visit Website</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

            </div> */}
                  <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                    <PrimaryBtn href="" text="Visit Website" />
                  </motion.div>
                </div>
              </>

            </div>
            <hr className="last:hidden h-[1px] border-gray-200 m-0" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AssociatedBusiness;