"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import { gsap } from "gsap";
import Image from "next/image";
import { projectsData } from "./data";
import Link from "next/link";
type Option = {
  value: string;
  label: string;
};

const ProjectList = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  /* ----------------------------------------
     OPTIONS (auto-generated from data)
  ---------------------------------------- */
  const regions = useMemo(
    () => [
      { value: "ALL", label: "All Regions" },
      ...Array.from(new Set(projectsData.items.map(i => i.region))).map(r => ({
        value: r,
        label: r
      }))
    ],
    []
  );

  const categories = useMemo(
    () => [
      { value: "ALL", label: "All Categories" },
      ...Array.from(new Set(projectsData.items.map(i => i.category))).map(c => ({
        value: c,
        label: c
      }))
    ],
    []
  );

  const statuses = useMemo(
    () => [
      { value: "ALL", label: "All Status" },
      ...Array.from(new Set(projectsData.items.map(i => i.status))).map(s => ({
        value: s,
        label: s
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
    if (!projectsData?.items || projectsData.items.length === 0) {
      return [];
    }

    return projectsData.items.filter(item => {
      const regionMatch =
        !appliedRegion || appliedRegion.value === "ALL" || item.region === appliedRegion.value;

      const categoryMatch =
        !appliedCategory || appliedCategory.value === "ALL" || item.category === appliedCategory.value;

      const statusMatch =
        !appliedStatus || appliedStatus.value === "ALL" || item.status === appliedStatus.value;

      const keywordMatch =
        appliedKeyword.trim() === "" ||
        item.keywords.some(k =>
          k.toLowerCase().includes(appliedKeyword.toLowerCase())
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
        <div className="bg-light p-4 xl:p-8 sp-my">
          <h3 className="text-19 font-normal text-center">[UNEC]'s contribution to the region can be seen everywhere - in the many public buildings we use by day to the private dwellings we return to at night. The skilled work of our team surrounds us in thousands of expertly-crafted structures that remind us of everything we've achieved and all that's yet to come.</h3>
        </div>
        {/* FILTER BAR */}
        <div className="bg-light p-4 rounded-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-end">

            <div>
              <label htmlFor="region-select" className="text-sm font-medium mb-1 block">Region</label>
              <Select
                inputId="region-select"
                options={regions}
                styles={selectStyles}
                value={region}
                defaultValue={regions[0]}
                onChange={setRegion}
                aria-label="Filter by region"
              />
            </div>

            <div>
              <label htmlFor="category-select" className="text-sm font-medium mb-1 block">Category</label>
              <Select
                inputId="category-select"
                options={categories}
                styles={selectStyles}
                value={category}
                defaultValue={categories[0]}
                onChange={setCategory}
                aria-label="Filter by category"
              />
            </div>

            <div>
              <label htmlFor="status-select" className="text-sm font-medium mb-1 block">Status</label>
              <Select
                inputId="status-select"
                options={statuses}
                styles={selectStyles}
                value={status}
                defaultValue={statuses[0]}
                onChange={setStatus}
                aria-label="Filter by status"
              />
            </div>

            <div>
              <label htmlFor="keyword-input" className="text-sm font-medium mb-1 block">Keywords</label>
              <input
                id="keyword-input"
                type="text"
                placeholder="Type keyword…"
                className="w-full h-[48px] px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                aria-label="Search by keyword"
              />
            </div>

            <button
              className="h-[48px] bg-black text-white flex items-center justify-center gap-2 rounded-md hover:bg-gray-900 transition"
              onClick={handleSearch}
              aria-label="Apply search filters"
            >
              <FiSearch />
              SEARCH
            </button>

          </div>
        </div>

        {/* GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No projects found matching your filters.
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div key={`${item.title}-${index}`} className="group relative overflow-hidden">
                <Link href={`/projects/${index}`} className="absolute inset-0 z-10 w-full h-full" />
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.category} project in ${item.region}`}
                  width={500}
                  height={500}
                  className="group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-[-100%] left-0 right-0 p-4 bg-gradient-to-r from-black via-red-500 to-transparent group-hover:bottom-0 transition-all duration-500">
                  <h3 className="text-white text-2xl">{item.title}</h3> <hr className="my-2 border-white/40" /> <p className="text-white text-lg">{item.region}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectList;