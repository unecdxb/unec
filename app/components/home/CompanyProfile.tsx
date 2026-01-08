
import MechanicalCounter from "../common/MechanicalCounter";
const CompanyProfile = () => {
  const stats = [
    { end: 1976, label: 'Establishment Year', suffix: '' },
    { end: 48, label: 'Years of Dedication', suffix: '' },
    { end: 11000, label: 'Workforce', suffix: '' },
    { end: 11, label: 'Billions AED Current Projects', suffix: '' },
    { end: 341, label: 'Projects Completed', suffix: '' },
    { end: 21, label: 'On-Going Projects', suffix: '' },
  ];
  return ( 
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1.2fr] gap-6 xl:gap-20">
          <div className="flex flex-col justify-between">
           <div className="space-y-4 font-medium ">
       
              <p className="text-20">[<span className="text-primary"> UNEC </span> ] is a multi-award winning general contracting company with more than 40 years of expertise in the region.</p>
              <p className="text-20">Our vast experience, forward-thinking innovations and commitment to the highest standards in professionalism, safety and efficiency have made us a trusted collaborator to the developers of some of the area's most iconic buildings and landmarks.</p>
           </div>
            {/* <button className="bg-black text-white px-4 py-2 mt-auto w-fit">Corporate Profile</button> */}
            <div className="w-fit mt-16 text-center">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-black to-black  font-semibold 
              text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
                <span className="relative z-10">Corporate Profile</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[2px]">
              {stats.map((stat, index) => (
                <MechanicalCounter
                  key={index}
                  end={stat.end}
                  label={stat.label}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
   );
}
 
export default CompanyProfile;