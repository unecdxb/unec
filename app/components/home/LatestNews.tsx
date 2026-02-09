
"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import SubTitle from "../common/SubTitle";
import { BsCalendar3 } from "react-icons/bs";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { NewsData } from "../news/type";


const LatestNews = ({ data, title }: { data: NewsData['news'], title: string }) => {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Sort by date (newest first) and take only the first 3
  const latestThreeNews = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return (
    <section className="sp-pt">
      <div className="container">
        <SubTitle title={title} mClass="mb-6 xl:mb-12" titleColor="text-black " />
        <div className="nws-block ">
          {latestThreeNews.map((news, index) => (
            <motion.div variants={moveUp(2 + index * 0.1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}
             className="nws-card group border-2 border-secondary" key={index}>
               <Link href={`/news/${news.slug}`}><div className="img-box group">
                <Image src={news.banner} alt={news.bannerAlt} width={1200} height={600} className="w-full object-cover" />
                <div className="overlay"></div>
              </div></Link>
         
              <div className="nws-content">
             
                <h3 className="font-bold">{news.title}</h3>
                <div className="news-date">
                  {/* <BsCalendar3 className="w-4 h-4" /> */}
                  <span>{formatDate(news.date)}</span>
                </div>
                <Link href={`/news/${news.slug}`}>Read More</Link>
              </div>
            </motion.div>
          ))}
          <motion.div variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="nws-btn">
            <Link href="news" className="relative overflow-hidden bg-black text-white w-full py-3 text-center font-medium transition-all duration-300 group text-14 tracking-wider" >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 uppercase">View All News</span>
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>

          </motion.div>
        </div>
        <hr className="border-2 border-t border-gray-300 my-6 xl:my-12 2xl:my-20" />
      </div>
    </section>
  );
}

export default LatestNews;