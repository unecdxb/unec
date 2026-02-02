
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "../motionVarients";
import { HomeDataType } from "../home/type";


const ClientsList = ({ data }: { data: HomeDataType['fourthSection'] }) => {
  return (
    <section className="sp-pb ">
      <div className="container">
        <SubTitle title={data.title} titleColor="text-black" mClass="mb-6 xl:mb-12" />
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-l border-t border-black/10 xs:px-0">
          {
            data.items.map((client, index) => (
              <div key={index} className="w-full border-r border-b border-black/10 flex items-center justify-center overflow-hidden group">
                <motion.div variants={zoomIn(0.3 + index * 0.1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                  <Image src={client.logo} alt={client.logoAlt} width={350} height={218} className="w-[250px] h-[120px] xl:w-[280px] xl:h-[200px] object-contain group-hover:scale-110 transition-all duration-300" />
                </motion.div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ClientsList;