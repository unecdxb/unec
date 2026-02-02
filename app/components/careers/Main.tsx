'use client';
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { CareerData } from "./type";

const Main = ({ data }: { data: CareerData['firstSection']['items'][number] }) => {
  return (
    <section className="">
      <div className="container sp-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="h-full">
            <Image src={data.image} width={1920} height={1080} alt={data.imageAlt} className="w-full h-full xl:max-h-[60dvh] object-cover" />
          </motion.div>
          <div>
            <SubTitle title={data.title} />
            <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>{data.description}</motion.p>
          </div>
        </div>
      </div>
      <hr className="h-1 border-gray-200 mb-0" />
    </section>
  );
}

export default Main;