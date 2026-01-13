import Image from "next/image";
import SubTitle from "../common/SubTitle";
const Main = () => {
  return ( 
      <section className="sp-py">
        <div className="container">
          <div className="grid grid-cols-1 gap-10">
            <div>
              <div className="bg-light p-4">
                <Image src="/assets/images/news/news-1.jpg" width={1920} height={1080} alt="" className="w-full max-h-[60dvh] object-cover" />
              </div>
            </div>
            <div>
              <div>
                <SubTitle title="News Title" mClass="mb-4 xl:mb-6" />
                <p className="text-18">[UNEC] have become an approved IOSH training provider authorized to deliver IOSH working safely and IOSH managing safely training courses to satisfy the most stringent health and safety standards and to reinforce the knowledge and experience of our employees in a variety of health and safety-related aspects.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
   );
}
 
export default Main;