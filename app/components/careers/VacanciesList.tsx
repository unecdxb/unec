"use client";
import { motion } from "framer-motion";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { vacanciesList } from "./data";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Select, { SingleValue } from "react-select";
import { useState } from "react";
import { moveUp } from "../motionVarients";
import { useJobSelectContext } from "@/contexts/jobSelectContext";
import { CareerData } from "./type";

type SelectOption = {
    value: string;
    label: string;
};

const VacanciesList = ({ data }: { data: CareerData["secondSection"] }) => {
    const [selectedType, setSelectedType] = useState<SelectOption | null>(null);

    const { setJobSelect } = useJobSelectContext();

    return (
        <section className="sp-pb">
            <div className="container px-12">
                <SubTitle title={data.title} />

                {/* React Select */}
                {/* <div className="max-w-sm mb-8">
          <Select<SelectOption, false>
            instanceId="vacancy-type-filter"
            options={typeOptions}
            placeholder="Filter by Job Type"
            value={selectedType}
            onChange={(option: SingleValue<SelectOption>) =>
              setSelectedType(option)
            }
            className="custom-select"
            classNamePrefix="custom-select"
          />
        </div> */}

                {data.items.length > 0 && <div className="flex flex-col gap-6 xl:gap-4 mt-12">
                    {data.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.2 }}
                            className="md:flex justify-between group items-center border-b border-[#1E1E1E66] border-dashed mb-7 pb-7 md:mb-[30px] md:pb-[30px]"
                        >
                            <div className="w-full md:w-2/5 mb-4 md:mb-0">
                                <p className="text-20 text-secondary font-normal leading-[1.4] group-hover:text-[#E11F27] transition-all duration-300">
                                    {item.title}
                                </p>
                            </div>
                            <div className="w-full md:w-3/5 flex flex-wrap lg:flex-row justify-between lg:items-center group">
                                <div className="lg:w-5/9">
                                    <p className="uppercase text-secondary/50 text-16 font-semibold">{item.mode}</p>
                                </div>
                                <div className="w-1/2 lg:w-3/9 text-18 hidden md:block">
                                    <p className="px-[16px] py-[4px] bg-secondary/5 text-secondary/60 rounded-2xl font-normal w-fit leading-[1.4]">
                                        {item.jobType}
                                    </p>
                                </div>
                                <div className="lg:w-1/9 flex flex-col items-center gap-2 justify-end cursor-pointer font-normal">
                                    <p className="md:hidden px-[16px] py-[4px] bg-secondary/5 text-secondary/60 rounded-2xl font-normal w-fit leading-[1.4]">
                                        {item.jobType}
                                    </p>
                                    <div className="flex gap-2 items-center">
                                        <div
                                            onClick={() => {
                                                setTimeout(() => {
                                                    const target = document.getElementById("wantToJoin");
                                                    if (!target) return;

                                                    const headerOffset = parseInt(
                                                        getComputedStyle(document.documentElement).getPropertyValue(
                                                            "--header-offset",
                                                        ) || "0",
                                                    );

                                                    const elementPosition =
                                                        target.getBoundingClientRect().top + window.scrollY;
                                                    const offsetPosition = elementPosition - headerOffset;

                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth",
                                                    });
                                                }, 100);

                                                setJobSelect(item.title);
                                            }}
                                        >
                                            <button className="uppercase font-[700] text-[14px] text-primary min-w-max cursor-pointer">
                                                Apply now
                                            </button>
                                        </div>
                                        <Image
                                            src="/assets/images/chevicon-left.svg"
                                            alt=""
                                            width={8}
                                            height={8}
                                            className="text-xl text-primary group-hover:translate-x-1 transition-all duration-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>}

                {data.items.length == 0 && <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }} variants={moveUp(0.2)} >At present, there are no open vacancies. We encourage you to revisit this page for future opportunities.</motion.p>}
            </div>
        </section>
    );
};

export default VacanciesList;
