import SubTitle from "../common/SubTitle";
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";
const AssociatedBusiness = () => {
  return (
    <section className="sp-py" id="associated-business">
      <div className="container">
        <SubTitle title="Associated Business" mClass="mb-4 xl:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 items-stretch bg-light px-6 py-8 xl:px-12 xl:py-15">
          <div className="xl:order-2">
            <div className="w-full h-full">
              <Image src="/assets/images/about-us/as-b1.png" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-between xl:order-1">
            <div>
              <h3 className="text-32 font-light  mb-2 xl:mb-4 text-secondary">SAFEMIX READY CONCRETE AND BLOCK FACTORY</h3>
              <p className="text-secondary/80 mb-2 md:mb-4">SAFE MIX Ready Concrete and Block Factory is a multi-award winning company, established in 1998 by [UNEC] Chairman Eng. Abdulhalim Muwahid to provide excellence in ready mix concrete solutions to the UAE Market. With over 20 years of experience, knowledge and dedication to the industry, SAFE MIX currently operates 7 branches across the UAE with 13 fully automated batching plants capable of sustainably producing an annual quantity of 2 million cubic meters per year. To complement our production capacity, SAFE MIX currently operates an impressive fleet of more than 40 mobile pumps, 158 transit mixers and 42 placing booms, in addition to a state-of-the-art block factory with a production of over 1 million blocks per month</p>
            </div>
            {/* <div className="w-fit mt-16 text-center">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-black to-black  font-semibold 
              text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                <span className="relative z-10">Visit Website</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

            </div> */}
            <PrimaryBtn href="" text="Visit Website" />
          </div>

        </div>
        <hr className="h-[1px] border-gray-200 m-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20  items-stretch bg-light px-6 py-8 xl:px-12 xl:py-15">
          <div className="h-full">
            <div className="w-full h-full">
              <Image src="/assets/images/about-us/as-b2.png" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-32 font-light  mb-2 xl:mb-4 text-secondary">[ UNEC ] JOINERY & INTERIOR DECOR</h3>
              <p className="text-secondary/80 mb-2 md:mb-4">[ UNEC ] JOINERY & INTERIOR DECOR was established in 1992 to cope with the growing demand on [ UNEC ] to provide quality Joinery Products. For 27 years, [ UNEC ] JOINERY & INTERIOR DECOR has provided over 90% of the companies Internal joinery requirements and has grown to now provide a substantial percentage of its overall turnover to an outside market.</p>
            </div>
            {/* <div className="w-fit mt-16 text-center">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-black to-black  font-semibold 
              text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                <span className="relative z-10">Visit Website</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div> */}
            <PrimaryBtn href="/about-us" text="Visit Website" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AssociatedBusiness;