
"use client";
import SubTitle from "../common/SubTitle";
import { aboutUsData } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../motionVarients";
const AwardsRecognitions = () => {
  return (
    <section className="sp-py relative" id="awards-recognition">
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10  "></div>
      <Image src="/assets/images/about-us/awards_bg.png" alt="Awards" width={1920} height={1080} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      <div className="container relative z-10 text-white">
        <SubTitle title="Awards & Recognitions" mClass="mb-6 md:mb-10 xl:mb-15 2xl:mb-20" titleColor="text-white" />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {
            aboutUsData.awardsData.items.map((item, index) => {
              const totalItems = aboutUsData.awardsData.items.length;
              const isLastInRow = {
                tablet: (index + 1) % 2 === 0 || index === totalItems - 1,
                desktop: (index + 1) % 3 === 0 || index === totalItems - 1
              };
              const isLastRow = {
                mobile: index === totalItems - 1,
                tablet: index >= totalItems - 2,
                desktop: index >= totalItems - 3
              };

              return (
                <div key={index} className="relative flex flex-col pb-4 xl:pb-10 transition-all duration-300 group ">
                  {/* Right border - only show on md and lg, hide on last items in row */}
                  <div className={`absolute top-0 right-0 w-[1px] h-[80%] bg-white/70 z-10 hidden
                    ${isLastInRow.tablet ? 'xs:hidden' : 'xs:block'} 
                    ${isLastInRow.desktop ? 'lg:hidden' : 'lg:block'}`}>
                  </div>

                  {/* Bottom border - full width on mobile, 90% on md+, hide on last row */}
                  <div className={`absolute bottom-0 left-0 bg-white/70 z-10 
                    ${isLastRow.mobile ? 'hidden' : 'w-full'} 
                    ${isLastRow.tablet ? 'md:hidden' : 'md:block xs:w-[90%]'} 
                    ${isLastRow.desktop ? 'lg:hidden' : 'lg:block lg:w-[90%]'} h-[1px]`}>
                  </div>

                  <motion.h3 variants={fadeIn(index * 0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-20 xl:text-25 font-normal leading-[1.2] mb-2 xl:mb-4 uppercase md:max-w-[98%] xl:max-w-[80%] group-hover:text-primary transition-all duration-300">{item.title}</motion.h3>
                  <motion.p variants={fadeIn(index * 0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-16 xl:text-18 text-white/90">{item.subTitle}</motion.p>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default AwardsRecognitions;