'use client';
import SubTitle from "../common/SubTitle";
import Image from "next/image";
const Main = () => {
  return ( 
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src="/assets/images/careers/careers-main.jpg" width={1920} height={1080} alt="" className="w-full max-h-[60dvh] object-cover" />
          </div>
          <div>
            <SubTitle title="BUILD A PROMISING CAREER THAT LASTS Become an integral part of [UNEC] now!" />
            <p>Here at [UNEC], we want to make a difference in shaping tomorrow’s legacy. Hence, we provide an environment for our employees where they can explore their talents and growth opportunities. We are focused on the continuous development of our team members’ career paths by enhancing and sharpening their competencies & capabilities.</p>
          </div>
        </div>
      </div>
    </section> 
   );
}
 
export default Main;