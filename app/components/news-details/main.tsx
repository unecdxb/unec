
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
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: data.content }}
            />

          </div>


        </div>
      </div>
    </section>
  );
}

export default Main;