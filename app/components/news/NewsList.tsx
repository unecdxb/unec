"use client";
import { useState, useRef, useEffect } from "react";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { NewsData } from "./data";
import { BsCalendar3, BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import Link from "next/link";

const NewsList = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const newsGridRef = useRef<HTMLDivElement>(null);

  // Extract unique years from news data and sort in descending order
  const years = ["all", ...Array.from(new Set(
    NewsData.news.map(news => new Date(news.date).getFullYear().toString())
  )).sort((a, b) => Number(b) - Number(a))];

  // Filter news based on selected year
  const filteredNews = selectedYear === "all"
    ? NewsData.news
    : NewsData.news.filter(news =>
      new Date(news.date).getFullYear().toString() === selectedYear
    );

  // Sort filtered news by date (newest first)
  const sortedNews = [...filteredNews].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Animate news cards when filter changes
  useEffect(() => {
    if (newsGridRef.current) {
      const cards = newsGridRef.current.querySelectorAll(".news-card");

      // Kill any existing animations first
      gsap.killTweensOf(cards);

      // Fade out old cards first (if any exist)
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            stagger: 0.03,
            ease: "power1.out"
          }
        );
      }
    }
  }, [selectedYear, sortedNews.length]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="sp-py bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <SubTitle title="LATEST NEWS" mClass="mb-6 xl:mb-10" />

        {/* Year Filter Buttons */}
        <div className="bg-black/10 rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <button key={year} onClick={() => setSelectedYear(year)} className={`
                  px-6 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${selectedYear === year
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }
                `}
              >
                {year === "all" ? "All News" : year}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div ref={newsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
          {sortedNews.map((news, index) => (
            <div key={index} className="news-card group  overflow-hidden shadow-sm  hover:shadow-md transition-all duration-500 cursor-pointer relative" >
              <Link href={`/news/${news.title}`} className="absolute inset-0 w-full h-full z-10" />
              {/* Image Container */}
              <div className="relative h-[220px] xl:h-[260px] overflow-hidden">
                <Image src={news.image} alt={news.title} width={1200} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">
                    {new Date(news.date).getFullYear()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 h-fit flex flex-col justify-between">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <BsCalendar3 className="w-4 h-4" />
                  <span>{formatDate(news.date)}</span>
                </div>

                {/* Title */}
                <h3 className="text-17 font-normal !font-suisse-intl text-gray-900 mb-3 line-clamp-3 group-hover:text-black transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-secondary font-light group-hover:gap-3 transition-all duration-300 mt-auto">
                  <span>Read More</span>
                  <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

            </div>
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
    </section>
  );
};

export default NewsList;