
import { SiProgress } from "react-icons/si";
import { LiaTripadvisor } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import Image from "next/image";
const MVV = () => {
  return ( 
    <section className="">
      <div className="container border-t border-gray-300 sp-py">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-20">
          <div>
            <div className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/mission.svg" alt="Mission" width={100} height={100} className="w-full h-10 xl:h-15 object-contain " />
            </div>
            <h3 className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Mission</h3>
            <p className="">To serve the region with reliable, high-quality construction through Innovative Machinery, Professional Manpower and the Accomplished mastery that comes with experience.</p>
          </div>
          <div>
            <div className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/vision.svg" alt="Vision" width={100} height={100} className="w-full h-10 xl:h-13 object-contain " />
            </div>
            <h3 className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Vision</h3>
            <p className="">A Strong and Trusted Partner – building a lasting legacy for our employees, our clients and our nation.</p>
          </div>
          <div>
            <div className="bg-primary mb-5 rounded-full p-4 w-15 h-15 xl:w-25 xl:h-25 flex items-center justify-center">
              <Image src="/assets/images/about-us/icons/promise.svg" alt="Promise" width={100} height={100} className="w-full h-10 xl:h-15 object-contain invert-100 brightness-0" />    
            </div>
            <h3 className="text-32 xl:text-40 text-secondary font-light mb-2 xl:mb-4 uppercase">Promise</h3>
            <p className="">Bringing Tomorrow’s Advantage, Today</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MVV;