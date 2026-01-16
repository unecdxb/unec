"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import SubTitle from "../common/SubTitle";
const ChairmanMsg = () => {
    return ( 
      <section className="sp-py bg-light" id="chairman-message">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-10 2xl:gap-20 items-stretch">
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
              <div className="relative h-full w-full mx-auto overflow-hidden">
                <Image
                  src="/assets/images/about-us/abt-main.jpg"
                  alt="Chairman"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 83%, 75% 83%, 75% 100%, 61% 84%, 0 84%)",
                    WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 83%, 75% 83%, 75% 100%, 61% 84%, 0 84%)"
                  }}
                />
              </div>

            </motion.div>
            <div>
              <SubTitle title="TOGETHER, WE BUILD [ LEGACY ]"  />
              <div className=" ">
                <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" mb-4">Great things in life are rarely accomplished alone. It takes teamwork to build something beautiful, strong and enduring. [ UNEC ] has been a trusted, hard-working partner at the side of real estate developers in the region for over 40 years, collaborating on iconic, world-class projects across the UAE and gulf region.</motion.p>
                <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" mb-4">Our role is to successfully deliver the client’s vision into reality using our history of experience, vast resources and dedicated team members. We attribute our accomplishments to decades of commitment to our clients, and a deep understanding of their interests and goals; providing real value in building tomorrows skylines, today.</motion.p>
                <motion.p variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">This is our passion and the foundation of a hard-earned reputation. It is and will remain at the heart of who we are as a company, as we continue to evolve with new strategies and technical mastery, maintaining our position at the forefront of our industry. Together, we’re building a legacy of excellence for years to come.</motion.p>
              </div>
              <div className="mt-6">
                <motion.h3 variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-25 font-normal text-secondary">Eng. Abdulhalim Muwahid</motion.h3>
                <motion.p variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" font-suisse-intl"><span className="font-light text-secondary uppercase text-24 ">[</span><span className="font-light uppercase text-primary">Chairman</span><span className="font-light text-secondary uppercase text-24 ">]</span></motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default ChairmanMsg;