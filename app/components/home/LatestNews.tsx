import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import SubTitle from "../common/SubTitle";
interface Props {
    data:{
        title:string,
        image:string | StaticImageData,
        date:string
    }[]
}

const LatestNews = ({data}: Props) => {
  // Sort by date (newest first) and take only the first 3
  const latestThreeNews = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return ( 
    <section className="sp-py border boder-b border-gray-100">
      <div className="container">
     
        <SubTitle title="Latest on [UNEC]" mClass="mb-6 xl:mb-12" titleColor="text-black " />
        <div className="nws-block">
          {latestThreeNews.map((news,index)=>(
            <div className="nws-card" key={index}>
              <div className="img-box">
                <Image src={news.image} alt="" width={1200} height={600} className="w-full object-cover" />
                <div className="overlay"></div>
              </div>
              <div className="nws-content">
                <h3 className="font-light">{news.title}</h3>
                <p className="">{news.date}</p>
                <Link href="#">Read More</Link>
              </div>
            </div>
          ))}
          <div className="nws-btn">
            <Link
              href="news"
              className="relative overflow-hidden bg-black text-white w-full py-3 text-center font-medium
             transition-all duration-300 group"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                View All News
              </span>

              {/* Hover overlay */}
              <span
                className="absolute inset-0 bg-primary translate-y-full
               transition-transform duration-300 group-hover:translate-y-0"
              ></span>
            </Link>

          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LatestNews;