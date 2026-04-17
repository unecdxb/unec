"use client";
import { StaticImageData } from "next/image";
import SubTitle from "../common/SubTitle";
import Link from "next/link";
import PrimaryBtn from "../common/PrimaryBtn";
import ProjectCard from "../common/ProjectCard";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import BtnLight from "../common/BtnLight";
import { ProjectType } from "../projects/type";


const ProjectHIghlights = ({ data, title }: { data: ProjectType['projects'], title: string }) => {
  return (
    <section className="sp-py bg-secondary">
      <div className="container">
        <SubTitle title={title} mClass="mb-6 xl:mb-12" titleColor="text-white" />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {
            data.map((item, index) => (
              <Link href={`/projects/${item.slug}`} key={index}>
                <motion.div variants={moveUp((index + 4) * 0.1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                  <ProjectCard image={item.thumbnail} title={item.firstSection.title} location={item.firstSection.location.name} />
                </motion.div>
              </Link>

            ))
          }
        </div>
        <motion.div variants={moveUp((data.length + 2) * 0.05)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mt-8 xl:mt-16 w-fit mx-auto">
          {/* <PrimaryBtn href="/projects" text="View All Projects" mode="light" /> */}
          <BtnLight href="/projects" text="View All Projects" width=" xl:min-w-[376.66px] tracking-wider" />
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectHIghlights;