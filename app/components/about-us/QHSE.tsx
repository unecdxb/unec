"use client";
import SubTitle from "../common/SubTitle";
import { aboutUsData } from "./data";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
const QHSE = () => {
  return (
    <section className="border-t border-gray-300 sp-py" id="qhse">
      <div className="container">
        <SubTitle title="QHSE" mClass="mb-4 xl:mb-12" />
        <div className="qhse-grid">
          {
            aboutUsData.QHSEData.items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div variants={moveUp(index * 0.2+0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} key={index} className="qhse-item">
                  <div>
                    <div className="flex items-center justify-between mb-4 xl:mb-6">
                      <h3 className="text-25 font-light text-black ">{item.title}</h3>
                      <div className="flex items-center ">
                        <IconComponent className="text-50 text-secondary" />
                      </div>
                    </div>
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

export default QHSE;