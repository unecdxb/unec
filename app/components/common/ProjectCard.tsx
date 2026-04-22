import { StaticImageData } from "next/image";
import Image from "next/image";
interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  location: string;
  height?: string;
}


const ProjectCard = ({image,title,location,height}:ProjectCardProps) => {
  return (
    <div className={`group relative flex flex-col justify-end overflow-hidden  ${height ? height :"h-[250px] xl:h-[300px]"}`}>
      {/* <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-black to-transparent z-10"></div> */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="" width={1200} height={1200} className="w-full h-full object-cover group-hover:scale-120 transition-all transition-linear duration-400" />
      </div>
      <div className="max-xl:absolute max-xl:opacity-100 max-xl:inset-0 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:bg-black/40 relative p-4 xl:p-5 opacity-0 group-hover:opacity-100 bg-black/70  transition-all duration-500 z-10">
        <h3 className="text-white text-20 font-bold">{title}</h3>
        <p className="text-white text-16 tracking-wider">{location}</p>
      </div>
    </div>
  );
}

export default ProjectCard;