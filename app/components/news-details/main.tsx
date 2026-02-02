
'use client';
import Image from "next/image";
import SubTitle from "../common/SubTitle";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { NewsData } from "../news/type";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Main = ({ data }: { data: NewsData['news'][number] }) => {

  return (
    <section className="sp-py">
      <div className="container">
        <div className="lg:grid grid-cols-3 gap-10 flex flex-col">
          {/* <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
            <div className="bg-light p-4">
              <Image src={data.banner} width={1920} height={1080} alt="" className="w-full h-full max-h-[60dvh] object-cover" />
            </div>
          </motion.div> */}
          <div className="col-span-1">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 uppercase tracking-widest text-sm group"
            >
              <BsArrowLeft className="text-red-500  text-sm group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm">Back to News</span>
            </Link>

          </div>
          <div className="col-span-2">
            {/* <SubTitle title={data.title} mClass="mb-4 xl:mb-6" /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: data.content }}>

              </div> */}
            <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="">[UNEC] have become an approved IOSH training provider authorized to deliver IOSH working safely and IOSH managing safely training courses to satisfy the most stringent health and safety standards and to reinforce the knowledge and experience of our employees in a variety of health and safety-related aspects.</motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Main;