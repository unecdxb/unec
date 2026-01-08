import SubTitle from "../common/SubTitle";
import { aboutUsData } from "./data";
import Image from "next/image";
const AwardsRecognitions = () => {
  return ( 
    <section className="sp-py relative" id="awards-recognition">
      <Image src="/assets/images/about-us/awards_bg.png" alt="Awards" width={1920} height={1080} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      <div className="container relative z-10 text-white">
        <SubTitle title="Awards & Recognitions" mClass="mb-4 xl:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {
            aboutUsData.awardsData.items.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 border border-white/30 p-4 md:p-6 xl:p-8 rounded-lg shadow-lg hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-normal !font-suisse-intl mb-2 xl:mb-4">{item.title}</h3>
                <p className="text-19">{item.subTitle}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
   );
}
 
export default AwardsRecognitions;