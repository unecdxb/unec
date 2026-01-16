
"use client";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
interface Props {
    delay?: number;
    title: string;
    mClass?: string;
    titleColor?: string;
}
const SubTitle = ({title, mClass, titleColor, delay}: Props) => {
  return ( 
      <motion.h2 variants={moveUp(delay ? delay : 0.2)} initial="hidden" whileInView="show" viewport={{amount:0.2,once:true}} className={`text-32 xs:text-36 xl:text-40 3xl:text-50  uppercase font-light leading-[1.2] ${mClass ? mClass : 'mb-2 xl:mb-6'} ${titleColor?titleColor:'text-secondary'}`}>
        {title}
      </motion.h2>
   );
}
 
export default SubTitle;