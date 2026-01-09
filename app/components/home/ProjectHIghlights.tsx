import Image from "next/image";
import { StaticImageData } from "next/image";
import SubTitle from "../common/SubTitle";
interface ProjectHIghlightsProps {
  data: {
    title: string;
    items: {
      title: string;
      location: string;
      image: string | StaticImageData;
    }[]
  }
}


const ProjectHIghlights = ({ data }: ProjectHIghlightsProps) => {
  return (
    <section className="sp-py bg-light">
      <div className="container">
       
        <SubTitle title={data.title} mClass="mb-6 xl:mb-12" titleColor="text-black" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            data.items.map((item, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="overflow-hidden">
                  <Image src={item.image} alt="" width={1200} height={1200} className="w-full h-[250px] xl:h-[350px] object-cover group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute bottom-[-100%] left-0 right-0 p-4 bg-gradient-to-r from-black via-red-500 to-transparent group-hover:bottom-0 transition-all duration-500">
                  <h3 className="text-white text-2xl">{item.title}</h3>
                  <hr className="my-2 border-white/20 " />
                  <p className="text-white text-md">{item.location}</p>
                </div>
              </div>

            ))
          }
        </div>
        <div className="max-w-7xl xl:min-w-[50%] w-full mx-auto mt-16 text-center">
          <button className="group relative px-8 py-4 bg-black  font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectHIghlights;