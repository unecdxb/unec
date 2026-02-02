"use client";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import { gsap } from "gsap";
import { projectsData } from "./data";
import Link from "next/link";
import ProjectCard from "../common/ProjectCard";
import { statusData } from "../AdminProject/statusData";
type Option = {
  value: string | number;
  label: string;
};

const ProjectList = ({ data, regionData, categoryData }: { data: any, regionData: { name: string }[], categoryData: { name: string }[] }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  /* ----------------------------------------
     OPTIONS (auto-generated from data)
  ---------------------------------------- */
  const regions = useMemo(
    () => [
      { value: "ALL", label: "All" },
      ...Array.from(new Set(regionData.map((i: { name: string }) => i.name))).map(r => ({
        value: r,
        label: r
      }))
    ],
    []
  );

  const categories = useMemo(
    () => [
      { value: "ALL", label: "All" },
      ...Array.from(new Set(categoryData.map((i: { name: string }) => i.name))).map(c => ({
        value: c,
        label: c
      }))
    ],
    []
  );

  const statuses = useMemo(
    () => [
      { value: "ALL", label: "All" },
      ...Array.from(new Set(statusData.map((i: { name: string, value: number }) => i))).map(s => ({
        value: s.value,
        label: s.name
      }))
    ],
    []
  );

  // Initialize state with default "ALL" values
  const [region, setRegion] = useState<Option | null>(regions[0]);
  const [category, setCategory] = useState<Option | null>(categories[0]);
  const [status, setStatus] = useState<Option | null>(statuses[0]);
  const [keyword, setKeyword] = useState("");

  // Temporary filter states (only applied when search is clicked)
  const [appliedRegion, setAppliedRegion] = useState<Option | null>(regions[0]);
  const [appliedCategory, setAppliedCategory] = useState<Option | null>(categories[0]);
  const [appliedStatus, setAppliedStatus] = useState<Option | null>(statuses[0]);
  const [appliedKeyword, setAppliedKeyword] = useState("");

  /* ----------------------------------------
     FILTER LOGIC (uses applied states)
  ---------------------------------------- */
  const filteredItems = useMemo(() => {
    // Handle empty or undefined data
    if (!data?.projects || data.projects.length === 0) {
      return [];
    }


    return data.projects.filter((item: any) => {
      const regionMatch =
        !appliedRegion || appliedRegion.value === "ALL" || item.firstSection.location.name === appliedRegion.value;

      const categoryMatch =
        !appliedCategory || appliedCategory.value === "ALL" || item.firstSection.category.name === appliedCategory.value;

      const statusMatch =
        !appliedStatus || appliedStatus.value === "ALL" || item.firstSection.status === appliedStatus.value.toString();

      const keywordMatch =
        appliedKeyword.trim() === "" ||
        [
          item.title,
          item.firstSection.category?.name,
          item.firstSection.location?.name,
        ]
          .filter(Boolean) // remove undefined/null values
          .some((field: string) =>
            field.toLowerCase().includes(appliedKeyword.toLowerCase())
          );


      return regionMatch && categoryMatch && statusMatch && keywordMatch;
    });


  }, [appliedRegion, appliedCategory, appliedStatus, appliedKeyword]);

  /* ----------------------------------------
     SMOOTH TRANSITION (GSAP)
  ---------------------------------------- */
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gsap.utils.toArray(gridRef.current.children);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }, gridRef);

    return () => ctx.revert(); // Cleanup on unmount or when filteredItems change
  }, [filteredItems]);

  /* ----------------------------------------
     SELECT STYLES (MODERN / OFFICIAL)
  ---------------------------------------- */
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: "48px",
      borderRadius: "0.375rem",
      borderColor: "#e5e7eb",
      boxShadow: "none",
      ":hover": { borderColor: "#000" }
    })
  };

  // Handle search button click - apply filters
  const handleSearch = () => {
    setAppliedRegion(region);
    setAppliedCategory(category);
    setAppliedStatus(status);
    setAppliedKeyword(keyword);
  };

  return (
    <section className="sp-pb">
      <div className="container">
        {/* <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-light p-4 xl:p-8 my-8 xl:my-12">
          <h3 className="text-19 font-normal text-center">{data.pageDescription}</h3>
        </motion.div> */}
        {/* FILTER BAR */}
        <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="mt-8  mb-8 xl:mb-12">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-10 items-end">
            <div>
              <label htmlFor="region-select" className="text-sm font-medium mb-3 block text-secondary uppercase">Region</label>
              <Select inputId="region-select" options={regions} styles={selectStyles} value={region} defaultValue={regions[0]} onChange={setRegion} aria-label="Filter by region" classNamePrefix="cmn-select-old" className="cmn-select-old" instanceId="region-select" />
            </div>

            <div>
              <label htmlFor="category-select" className="text-sm font-medium mb-3 block text-secondary uppercase">Category</label>
              <Select inputId="category-select" options={categories} styles={selectStyles} value={category} defaultValue={categories[0]} onChange={setCategory} aria-label="Filter by category"
                classNamePrefix="cmn-select-old" className="cmn-select-old" instanceId="category-select" />
            </div>

            <div>
              <label htmlFor="status-select" className="text-sm font-medium mb-3 block text-secondary uppercase">Status</label>
              <Select inputId="status-select" options={statuses} styles={selectStyles} value={status} defaultValue={statuses[0]} onChange={setStatus} aria-label="Filter by status"
                classNamePrefix="cmn-select-old" className="cmn-select-old" instanceId="status-select" />
            </div>

            <div>
              <label htmlFor="keyword-input" className="text-sm font-medium mb-3 block text-secondary uppercase">Keywords</label>
              <input id="keyword-input" type="text" placeholder=""
                className="w-full h-[48px] p-3 border-2 border-black  focus:outline-none focus:border-black placeholder:text-black"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                aria-label="Search by keyword"
              />
            </div>

            <div className="md:col-span-4 flex justify-center">
              <button
                className="h-12  w-[30%] px-8 cursor-pointer bg-black text-white flex items-center justify-center gap-2.5 font-semibold text-sm tracking-[0.15em] uppercase relative overflow-hidden group border-2 border-white"
                onClick={handleSearch}
                aria-label="Apply search filters"
              >
                <span className="absolute inset-0 bg-white transform translate-y-full  transition-transform duration-500 ease-out"></span>
                <FiSearch className="w-4 h-4 stroke-[2.5] relative  group-hover:scale-110 transition-all duration-500 " />
                <span className="relative transition-all duration-500">Search</span>
              </button>

            </div>

          </div>
        </motion.div>

        {/* GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No projects found matching your filters.
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item: any, index: number) => (
              <Link href={`/projects/${item.slug}`} key={index}>
                <motion.div variants={moveUp(0.4 + 0.1 * index)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
                  <ProjectCard image={item.thumbnail} title={item.title} location={item.firstSection.location.name} height="h-[250px] xl:h-[350px]" />
                </motion.div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectList;