
'use client';
import Image from "next/image";
import SubTitle from "../common/SubTitle";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const Main = () => {
  return ( 
      <section className="sp-py">
        <div className="container">
          <div className="grid grid-cols-1 gap-10">
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
              <div className="bg-light p-4">
                <Image src="/assets/images/news/nws-4.jpg" width={1920} height={1080} alt="" className="w-full h-full max-h-[60dvh] object-cover" />
              </div>
            </motion.div>
            <div>
              <div>
                <SubTitle title="News Title" mClass="mb-4 xl:mb-6" />
                <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">[UNEC] have become an approved IOSH training provider authorized to deliver IOSH working safely and IOSH managing safely training courses to satisfy the most stringent health and safety standards and to reinforce the knowledge and experience of our employees in a variety of health and safety-related aspects.</motion.p>
              </div>
            </div>

          </div>
        </div>
      </section>
   );
}
 
export default Main;