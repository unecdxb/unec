"use client";
import { motion } from "framer-motion";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { vacanciesList } from "./data";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Select, { SingleValue } from "react-select";
import { useState } from "react";
import { moveUp } from "../motionVarients";

type SelectOption = {
  value: string;
  label: string;
};

const VacanciesList = () => {

  const [selectedType, setSelectedType] =
    useState<SelectOption | null>(null);

  const typeOptions: SelectOption[] = [
    { value: "All", label: "All Jobs" },
    ...Array.from(
      new Set(vacanciesList.list.map(item => item.type))
    ).map(type => ({
      value: type,
      label: type
    }))
  ];

  const filteredList =
    selectedType && selectedType.value !== "All"
      ? vacanciesList.list.filter(
        item => item.type === selectedType.value
      )
      : vacanciesList.list;

  return (
    <section className="sp-pb">
      <div className="container">
        <SubTitle title="Vacancies Available" />

        {/* React Select */}
        <div className="max-w-sm mb-8">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4">

          {filteredList.map((item, index) => (
            <motion.div variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} key={index}>
              <div key={index} className="group flex flex-col bg-white overflow-hidden transition-all duration-500 ease-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">

                {/* Image */}
                <div className="relative overflow-hidden h-[250px] xl:h-[300px]">
                  <Image src={item.image} width={1920} height={1080} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

                  {/* Overlay (RESTORED) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 
                  flex items-end p-6 opacity-0 invisible transition-all duration-500 
                  group-hover:opacity-100 group-hover:visible"
                  >
                    <p className="text-white text-sm leading-relaxed px-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 xl:px-6 xl:py-5">
                  <h3 className="text-25 font-light mb-3 xl:mb-4 text-secondary">
                    {item.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaMapMarkerAlt className="w-4 h-4 text-black" />
                      <span className="text-sm font-medium">Location:</span>
                      <span className="text-sm text-gray-600">
                        {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <FaBriefcase className="w-4 h-4 text-black" />
                      <span className="text-sm font-medium">Type:</span>
                      <span className="text-sm text-gray-600">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Button (if needed later) */}
                  {/* 
                <Link href="#apply-for-job" className="w-full bg-gradient-to-r from-black/60 to-black/80 hover:from-black/80 hover:to-black/90 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <span>Apply Now</span>
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link> 
                */}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VacanciesList;
