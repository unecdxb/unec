
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

            {data.message && <div className="flex flex-col gap-2  mb-5">
              <p className={`text-18 text-black  xl:leading-8
                  transition-all duration-1000 ease-out opacity-100 translate-y-0`}  >
                {data.message}
              </p>

              <span className="font-700 text-black">{data.name}</span>

              <p className="inline-block text-primary font-[700]"><span className="text-secondary transition-all duration-300">[</span>{data.designation}<span className="text-secondary transition-all duration-300">]</span></p>

            </div>}

            <Link
              href="/news"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 uppercase tracking-widest text-sm group"
            >
              <BsArrowLeft className="text-red-500  text-sm group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-mono">Back to News</span>
            </Link>

          </div>
          <div className="col-span-2">
            <div
              className="news-content"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />

          </div>


        </div>
      </div>
    </section>
  );
}

export default Main;