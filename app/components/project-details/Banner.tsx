"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const Banner = ({ title, image, imageAlt }: { title: string, image: string, imageAlt: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paginationLeft, setPaginationLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftOffset, setLeftOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const updateOffset = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setLeftOffset(rect.left - 15);
            }

            setIsMobile(window.innerWidth < 768);
        };

        updateOffset();
        window.addEventListener("resize", updateOffset);

        return () => window.removeEventListener("resize", updateOffset);
    }, []);


    return (
        <section>
            <div
                className="h-[85dvh] xl:h-screen"
            >
                <div>
                    <div className="relative w-full h-[85dvh] xl:h-screen">
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div> */}
                        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 via-black/50 to-transparent z-10"></div>
                        <div
                            ref={containerRef}
                            className="container invisible pointer-events-none"
                        />
                        <div className='w-full h-[100px] bg-black/50 z-50 absolute bottom-0 left-0'></div>
                        <div className="h-[85dvh] xl:h-screen w-full flex justify-center items-end container">

                            <div className='w-full h-[100px] flex justify-between items-center z-100'>
                                <div className='flex items-center gap-2 group cursor-pointer'  onClick={() => router.back()}>
                                    <Image src="/assets/images/projects/chevicon-left.svg" alt="chevicon-left" width={10} height={10} className='z-50 rotate-180 group-hover:translate-x-[-5px] transition-all duration-1000 ease-out' />
                                    <span className='text-white text-16 font-bold leading-[1.2] 
                  transition-all duration-1000 ease-out font-suisse-intl opacity-100 translate-y-0 group-hover:translate-x-[-5px]'>{isMobile ? `${title}` : "Previous"}</span>
                                </div>
                                <h2 className={`text-white text-25 font-bold leading-[1.2] 
                  transition-all duration-1000 ease-out font-suisse-intl opacity-100 translate-y-0 md:block hidden`}>
                                    {title}
                                </h2>
                                <Image src="/assets/images/projects/chevicon-right.svg" alt="chevicon-right" width={10} height={10} className='z-50 invisible' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;