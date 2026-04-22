"use client";
import { motion, useInView } from "framer-motion";
import { moveUp } from "../motionVarients";
import { useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import { gsap } from "gsap";
import Link from "next/link";
import ProjectCard from "../common/ProjectCard";
import { statusData } from "../AdminProject/statusData";
import { IoIosCloseCircle } from "react-icons/io";

type Option = {
  value: string | number;
  label: string;
};

/* ---------------- ANIMATED CARD ---------------- */
function AnimatedCard({ item, colIndex }: { item: any; colIndex: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <motion.div
      ref={ref}
      variants={moveUp(0.05 * colIndex)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <ProjectCard
        image={item.thumbnail}
        title={item.title}
        location={item.firstSection.location.name}
        height="h-[250px] xl:h-[350px]"
      />
    </motion.div>
  );
}

/* ---------------- DESKTOP DETECTION ---------------- */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
};

const ProjectList = ({
  data,
  regionData,
  categoryData,
}: {
  data: any;
  regionData: { name: string }[];
  categoryData: { name: string }[];
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const regions = useMemo(
    () => [
      { value: "Region", label: "Region" },
      ...Array.from(new Set(regionData.map((i) => i.name))).map((r) => ({
        value: r,
        label: r,
      })),
    ],
    []
  );

  const categories = useMemo(
    () => [
      { value: "Category", label: "Category" },
      ...Array.from(new Set(categoryData.map((i) => i.name))).map((c) => ({
        value: c,
        label: c,
      })),
    ],
    []
  );

  const statuses = useMemo(
    () => [
      { value: "Status", label: "Status" },
      ...Array.from(new Set(statusData.map((i) => i))).map((s) => ({
        value: s.value,
        label: s.name,
      })),
    ],
    []
  );

  const [region, setRegion] = useState<Option | null>(regions[0]);
  const [category, setCategory] = useState<Option | null>(categories[0]);
  const [status, setStatus] = useState<Option | null>(statuses[0]);
  const [keyword, setKeyword] = useState("");

  const [appliedRegion, setAppliedRegion] = useState<Option | null>(regions[0]);
  const [appliedCategory, setAppliedCategory] = useState<Option | null>(categories[0]);
  const [appliedStatus, setAppliedStatus] = useState<Option | null>(statuses[0]);
  const [appliedKeyword, setAppliedKeyword] = useState("");
  const [openFilters, setOpenFilters] = useState(false);

  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isDesktop) setOpenFilters(true);
  }, [isDesktop]);

  const filteredItems = useMemo(() => {
    if (!data?.projects || data.projects.length === 0) return [];

    return data.projects.filter((item: any) => {
      const regionMatch =
        !appliedRegion ||
        appliedRegion.value === "Region" ||
        item.firstSection.location.name === appliedRegion.value;

      const categoryMatch =
        !appliedCategory ||
        appliedCategory.value === "Category" ||
        item.firstSection.category.name === appliedCategory.value;

      const statusMatch =
        !appliedStatus ||
        appliedStatus.value === "Status" ||
        item.firstSection.status === appliedStatus.value.toString();

      const keywordMatch =
        appliedKeyword.trim() === "" ||
        [
          item.title,
          item.firstSection.category?.name,
          item.firstSection.location?.name,
        ]
          .filter(Boolean)
          .some((field: string) =>
            field.toLowerCase().includes(appliedKeyword.toLowerCase())
          );

      return regionMatch && categoryMatch && statusMatch && keywordMatch;
    });
  }, [appliedRegion, appliedCategory, appliedStatus, appliedKeyword]);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gsap.utils.toArray(gridRef.current.children);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredItems]);

  const selectStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: "48px",
      borderRadius: "0.375rem",
      borderColor: "#e5e7eb",
      boxShadow: "none",
      ":hover": { borderColor: "#000" },
    }),
  };

  const selectPortalStyles = {
    ...selectStyles,
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
    menu: (base: any) => ({ ...base, zIndex: 9999 }),
    menuList: (base: any) => ({
      ...base,
      maxHeight: "180px",
      overflowY: "auto",
    }),
  };

  const handleSearch = () => {
    setAppliedRegion(region);
    setAppliedCategory(category);
    setAppliedStatus(status);
    setAppliedKeyword(keyword);
  };

  return (
    <section className="sp-py">
      <div className="container">

        {/* Toggle Button (mobile only) */}
        {!isDesktop && (
          <motion.div
            variants={moveUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1, once: true }}
            className="mb-6 xl:mb-12"
          >
            <button
              onClick={() => setOpenFilters((prev) => !prev)}
              className="w-full h-14 px-6 border border-black flex items-center justify-between uppercase tracking-[0.15em] text-sm font-semibold group transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <span>Filter</span>
              <motion.span
                animate={{ rotate: openFilters ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl text-black leading-none"
              >
                {openFilters ? "–" : "+"}
              </motion.span>
            </button>
          </motion.div>
        )}

        {/* FILTER BAR */}
        <motion.div
          initial={false}
          animate={isDesktop || openFilters ? "open" : "collapsed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="bg-light p-4 xl:p-8 mb-8 xl:mb-12">
            <motion.div
              initial="hidden"
              animate={isDesktop || openFilters ? "show" : "hidden"}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 xl:gap-10 items-end"
            >
              <motion.div className="flex gap-3 items-center"
                variants={{ hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <Select
                  inputId="region-select"
                  options={regions}
                  styles={selectPortalStyles}
                  menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                  menuPosition="fixed"
                  value={region}
                  defaultValue={regions[0]}
                  onChange={setRegion}
                  classNamePrefix="cmn-select"
                  className="cmn-select w-full"
                  instanceId="region-select"
                />
                {region?.value !== regions[0].value && <IoIosCloseCircle className="w-fit text-2xl" onClick={() => {
                  setRegion(regions[0]);
                  setAppliedRegion(regions[0]);
                }} />}
              </motion.div>

              <motion.div className="flex gap-3 items-center"
                variants={{ hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <Select
                  inputId="category-select"
                  options={categories}
                  styles={selectPortalStyles}
                  menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                  menuPosition="fixed"
                  value={category}
                  defaultValue={categories[0]}
                  onChange={setCategory}
                  classNamePrefix="cmn-select"
                  className="cmn-select w-full"
                  instanceId="category-select"
                />
                {/* <IoIosCloseCircle className="absolute top-[14px] -right-6 text-xl"/> */}
                {category?.value !== categories[0].value && <IoIosCloseCircle className="w-fit text-2xl" onClick={() => {
                  setCategory(categories[0]);
                  setAppliedCategory(categories[0]);
                }}/>}
              </motion.div>

              <motion.div className="flex gap-3 items-center"
                variants={{ hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <Select
                  inputId="status-select"
                  options={statuses}
                  styles={selectPortalStyles}
                  menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                  menuPosition="fixed"
                  value={status}
                  defaultValue={statuses[0]}
                  onChange={setStatus}
                  classNamePrefix="cmn-select"
                  className="cmn-select w-full"
                  instanceId="status-select"
                />
                {status?.value !== statuses[0].value && <IoIosCloseCircle className="w-fit text-2xl" onClick={() => {
                  setStatus(statuses[0]);
                  setAppliedStatus(statuses[0]);
                }}/>}
              </motion.div>

              <motion.div className="flex gap-3 items-center"
                variants={{ hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <input
                  id="keyword-input"
                  type="text"
                  placeholder="Type keyword…"
                  className="w-full h-[48px] pr-4 border-b border-black/20 focus:outline-none focus:border-black placeholder:text-black"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                {keyword.length > 0 && <IoIosCloseCircle className="w-fit text-2xl" onClick={()=>setKeyword("")}/>}
              </motion.div>

              <motion.button
                variants={{ hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                className="h-12 px-8 cursor-pointer bg-black text-white flex items-center justify-center gap-2.5 font-semibold text-sm tracking-[0.15em] uppercase relative overflow-hidden group border-2 border-white"
                onClick={handleSearch}
              >
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <FiSearch className="w-4 h-4 stroke-[2.5] relative z-10 group-hover:scale-110 transition-all duration-500 group-hover:text-black" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Search
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No projects found matching your filters.
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item: any, index: number) => (
              <Link href={`/projects/${item.slug}`} key={index}>
                <AnimatedCard item={item} colIndex={index % 4} />
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectList;