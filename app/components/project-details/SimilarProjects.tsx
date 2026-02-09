"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ProjectData } from "./type";

export default function SimilarProjects({ data }: { data: ProjectData }) {
    return (
        <div className="relative w-full container mb-10">
            <h2 className="text-2xl font-semibold tracking-wide mb-10 uppercase">
                SIMILAR PROJECTS
            </h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                loop={true}
                className="w-full"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {data.projects.map((item) => (
                    <SwiperSlide key={item._id} className="relative group cursor-pointer">
                        <Link href={`/projects/${item.slug}`}>
                        <Image
                            src={item.thumbnail}
                            alt={item.thumbnailAlt}
                            width={800}
                            height={500}
                            className="w-full h-[280px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-5 opacity-0 group-hover:opacity-100 bg-black/70  transition-all duration-500 z-10">
                            <h3 className="text-white text-20 font-bold">{item.title}</h3>
                            <p className="text-white text-16 tracking-wider">{item.firstSection.location.name}</p>
                        </div></Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-2 top-[60%] z-10 -translate-y-1/2 bg-black/80 p-3">
                <span className="text-red-500 text-2xl">‹</span>
            </button>

            <button className="swiper-button-next-custom absolute right-2 top-[60%] z-10 -translate-y-1/2 bg-black/80 p-3">
                <span className="text-red-500 text-2xl">›</span>
            </button>
        </div>
    );
}
