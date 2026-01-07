
import { SiProgress } from "react-icons/si";
import { LiaTripadvisor } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
const MVV = () => {
  return ( 
    <section className="">
      <div className="container border-t border-gray-300 sp-py">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-20">
          <div>
            <div className="bg-light mb-5 rounded-full p-4 w-fit">
              <SiProgress className="text-48" />    
            </div>
            <h3 className="text-3xl font-normal font-suisse-intl mb-2 xl:mb-4">Our Mission</h3>
            <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4" />
            <p className="text-19">To serve the region with reliable, high-quality construction through Innovative Machinery, Professional Manpower and the Accomplished mastery that comes with experience.</p>
          </div>
          <div>
            <div className="bg-light mb-5 rounded-full p-4 w-fit">
              <LiaTripadvisor className="text-48" />
            </div>
            <h3 className="text-3xl font-normal font-suisse-intl mb-2 xl:mb-4">Our Vision</h3>
            <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4" />
            <p className="text-19">A Strong and Trusted Partner – building a lasting legacy for our employees, our clients and our nation.</p>
          </div>
          <div>
            <div className="bg-light mb-5 rounded-full p-4 w-fit">
              <GiReceiveMoney className="text-48" />    
            </div>
            <h3 className="text-3xl font-normal font-suisse-intl mb-2 xl:mb-4">Our Values</h3>
            <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4" />
            <p className="text-19">Bringing Tomorrow’s Advantage, Today</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MVV;