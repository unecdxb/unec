import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
interface Props {
    data:{
        title:string,
        description:string,
        image:string | StaticImageData,
        date:string
    }[]
}

const LatestNews = ({data}: Props) => {
  return ( 
    <section>
      <div className="container">
        <div className="nws-block">
          {data.map(news=>(
            <div className="nws-card">
              <div className="img-box">
                <Image src={news.image} alt="" width={500} height={500} />
              </div>
              <div className="nws-content p-3 ">
                <h3 className="text-20 font-bold">{news.title}</h3>
                <p className="text-16">{news.date}</p>
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