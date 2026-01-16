"use client";
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp, moveRight } from "../motionVarients";
interface PageBnrProps {
  title: string;
  image?: string;
}
const PageBnr = ({ title, image }: PageBnrProps) => {
  return ( 
    <section className="h-[350px] md:h-[300px] lg:h-[350px] xl:h-[450px] bg-black/60 w-full relative">
      <div className="absolute top-0 left-0 w-full h-[30%] bg-linear-to-b from-black/50 to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-black/70 to-transparent z-1"></div>
      {image && (
        <Image src={image} alt="Banner" className="w-full h-full object-cover absolute top-0 left-0 z-0" width={1920} height={1080} />
      )}
      <div className="container h-full relative z-10">
        <div className="flex flex-col justify-end gap-4 h-full pb-10 md:pb-16 lg:pb-20 xl:pb-24">
          <motion.h1 variants={moveRight(0.2)} initial="hidden" animate="show" viewport={{ amount: 0.1, once: true }} className="text-40 xl:text-60 font-light uppercase text-white leading-1.1">{title}</motion.h1>
          <Breadcrumb />
        </div>
      </div>
    </section>
   );
}
 
export default PageBnr;