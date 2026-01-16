
"use client";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "../motionVarients";
interface dataProps{
  data:{
    title:string,
    items:{
      image:string | StaticImageData,
      alt:string
    }[]
  }
}

const ClientsList = ({data}: dataProps) => {
  return ( 
    <section className="sp-py ">
      <div className="container">
        <SubTitle title="Clients" titleColor="text-black" mClass="mb-6 xl:mb-12" delay={0.4} />
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-l border-t border-black/10 xs:px-0">
          {
            data.items.map((client,index)=>(
              <div key={index} className="w-full border-r border-b border-black/10 flex items-center justify-center overflow-hidden group">
                <motion.div variants={zoomIn(index * 0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}}>
                  <Image src={client.image} alt={client.alt} width={350} height={218} className="w-[250px] h-[120px] xl:w-[280px] xl:h-[200px] object-contain group-hover:scale-110 transition-all duration-300" />
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