"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BsCalendar3, BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import Link from "next/link";
import { moveUp, moveUp2 } from "../motionVarients";
import { motion } from "framer-motion";
import { NewsData } from "./type";

const NewsList = ({ data }: { data: NewsData }) => {
    const [selectedYear, setSelectedYear] = useState<string>("all");
    const newsGridRef = useRef<HTMLDivElement>(null);
    const ITEMS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedYear]);

    // Extract unique years from news data and sort in descending order
    const years = [
        "all",
        ...Array.from(new Set(data.news.map((news) => new Date(news.date).getFullYear().toString()))).sort(
            (a, b) => Number(b) - Number(a),
        ),
    ];

    // Filter news based on selected year
    const filteredNews =
        selectedYear === "all"
            ? data.news
            : data.news.filter((news) => new Date(news.date).getFullYear().toString() === selectedYear);

    // Sort filtered news by date (newest first)
    const sortedNews = [...filteredNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);

    const paginatedNews = sortedNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    // Animate news cards when filter changes


    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section className="sp-py bg-gradient-to-b from-white to-gray-50">
            <div className="container">
                {/* Year Filter Buttons */}
                <div className="bg-black/10  shadow-sm border border-gray-100 p-2 xl:p-4 mb-8 xl:mb-10 2xl:mb-14 relative ">
                    <div className="flex flex-wrap gap-2 xl:gap-3">
                        {years.map((year, index) => (
                            <div key={index} className="overflow-hidden">
                                <motion.div
                                    variants={moveUp2(0.4 + 0.2 * index)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ amount: 0.1, once: true }}
                                >
                                    <button
                                        onClick={() => setSelectedYear(year)}
                                        className={`
            px-3 py-1 xl:px-6 xl:py-2.5 font-medium transition-colors duration-300 cursor-pointer
            ${
                selectedYear === year
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
            }
          `}
                                    >
                                        {year === "all" ? "All News" : year}
                                    </button>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <div ref={newsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
                    {paginatedNews.map((news, index) => (
                        <motion.div
                            key={index}
                            variants={moveUp(index * 0.05)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ amount: 0, once: true }}
                            className="h-full"
                        >
                            <div className="news-card flex flex-col group  overflow-hidden border border-gray-100 bg-white transition-all duration-500 cursor-pointer relative h-full">
                                <Link href={`/news/${news.slug}`} className="absolute inset-0 w-full h-full z-10" />
                                {/* Image Container */}
                                <div className="relative h-[220px] xl:h-[260px] 2xl:h-[350px] overflow-hidden">
                                    <Image
                                        src={news.thumbnail}
                                        alt={news.thumbnailAlt}
                                        width={1200}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-2 ">
                                        <div className="flex items-center gap-2 text-white text-xs xl:text-sm">
                                            <BsCalendar3 className="w-4 h-4" />
                                            <span>{formatDate(news.date)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}

                                {/* Date */}

                                {/* Title */}
                                <div className="px-4 xl:px-6 pt-4 ">
                                    <h3 className="text-19 font-normal uppercase text-gray-900  line-clamp-2 group-hover:text-black transition-colors duration-300">
                                        {news.title}
                                    </h3>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/news/${news.slug}`}
                                    className="flex items-center gap-2 font-light group-hover:gap-3 transition-all duration-300 mt-auto px-4 xl:px-6 py-2 xl:py-4"
                                >
                                    <span className="text-primary group-hover:text-black transition-colors duration-300">
                                        Read More
                                    </span>
                                    <BsArrowRight className="w-5 h-5 text-secondary font-bold group-hover:translate-x-[1px] group-hover:text-primary transition-transform duration-300" />
                                </Link>
                                {/* <PrimaryBtn text="Read More" href={`/news/${news.title}`} /> */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {sortedNews.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
                            <BsCalendar3 className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No News Found</h3>
                        <p className="text-gray-500">There are no news articles for {selectedYear}</p>
                    </div>
                )}
            </div>

            <div className="container">
                {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-14 flex-wrap">
                        {/* Page numbers */}
                        <div className="flex items-center gap-4 flex-wrap">
                            {currentPage > 1 && (
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => {setCurrentPage((prev) => Math.max(prev - 1, 1)); window.scrollTo({top:0})}}
                                        className="flex items-center gap-3 text-sm tracking-widest text-red-500 hover:gap-4 transition-all disabled:opacity-40 cursor-pointer"
                                    >
                                        PREVIOUS
                                    </button>
                                    <span className="w-10 h-[2px] bg-black inline-block" />
                                </div>
                            )}

                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                const isLast = page === totalPages;

                                return (
                                    <>
                                        <div key={page} className="flex items-center gap-4">
                                            <button
                                                onClick={() => {setCurrentPage(page);window.scrollTo({top:0})}}
                                                className={`text-sm tracking-widest transition-colors  cursor-pointer ${
                                                    currentPage === page
                                                        ? "text-red-500 font-semibold"
                                                        : "text-black hover:text-red-500"
                                                }`}
                                            >
                                                {String(page).padStart(2, "0")}
                                            </button>

                                            {isLast && <span className="w-10 h-[2px] bg-black inline-block" />}
                                        </div>
                                    </>
                                );
                            })}
                            <span
                                className="text-sm tracking-widest text-black cursor-pointer transition-colors hover:text-red-500"
                                onClick={() => {setCurrentPage(totalPages);window.scrollTo({top:0})}}
                            >
                                {"0" + totalPages}
                            </span>
                        </div>

                        {/* Next button */}
                        {currentPage < totalPages && (
                            <button
                                onClick={() => {setCurrentPage((prev) => Math.min(prev + 1, totalPages));window.scrollTo({top:0})}}
                                className="flex items-center cursor-pointer gap-3 text-sm tracking-widest text-red-500 hover:gap-4 transition-all disabled:opacity-40"
                            >
                                NEXT
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsList;
