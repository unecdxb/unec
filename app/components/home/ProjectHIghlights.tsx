import Image from "next/image";
import { StaticImageData } from "next/image";
import SubTitle from "../common/SubTitle";
import Link from "next/link"; 
import PrimaryBtn from "../common/PrimaryBtn";
import ProjectCard from "../common/ProjectCard";
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
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-3 xl:gap-6">
          {
            data.items.map((item, index) => (
              <Link href={`/projects/${item.title}`} key={index}>
                <ProjectCard image={item.image} title={item.title} location={item.location} />
              </Link>

            ))
          }
        </div>
        <div className="mt-8 xl:mt-16 w-fit mx-auto">
          <PrimaryBtn href="/projects" text="View All Projects" />
        </div>
      </div>
    </section>
  );
}

export default ProjectHIghlights;