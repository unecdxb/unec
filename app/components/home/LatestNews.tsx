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
          {latestThreeNews.map(news=>(
            <div className="nws-card">
              <div className="img-box">
                <Image src={news.image} alt="" width={1200} height={600} className="w-full object-cover" />
                <div className="overlay"></div>
              </div>
              <div className="nws-content">
                <h3 className="font-bold">{news.title}</h3>
                <p className="">{news.date}</p>
                <Link href="#">Read More</Link>
              </div>
            </div>
          ))}
          <div className="nws-btn">
            <button className="bg-black text-white w-full py-3">View All News</button>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LatestNews;