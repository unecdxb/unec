"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { HomeData } from './data';
import Image from 'next/image';
import "./hero.css";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paginationLeft, setPaginationLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePaginationPosition = () => {
      if (containerRef.current) {
        const containerStyles = window.getComputedStyle(containerRef.current);
        const paddingLeft = parseFloat(containerStyles.paddingLeft);
        const rect = containerRef.current.getBoundingClientRect();
        setPaginationLeft(rect.left + paddingLeft);
      }
    };

    updatePaginationPosition();
    window.addEventListener('resize', updatePaginationPosition);

    return () => {
      window.removeEventListener('resize', updatePaginationPosition);
    };
  }, []);

  useEffect(() => {
    const updatePaginationPosition = () => {
      if (containerRef.current) {
        const containerStyles = window.getComputedStyle(containerRef.current);
        const paddingLeft = parseFloat(containerStyles.paddingLeft);
        const rect = containerRef.current.getBoundingClientRect();

        const pagination = document.querySelector('.swiper-pagination');
        if (pagination) {
          (pagination as HTMLElement).style.left = `${rect.left + paddingLeft}px`;
        }
      }
    };

    updatePaginationPosition();
    window.addEventListener('resize', updatePaginationPosition);

    return () => {
      window.removeEventListener('resize', updatePaginationPosition);
    };
  }, []);

  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChangeTransitionStart={() => setActiveIndex(-1)}
        onSlideChangeTransitionEnd={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-screen"
      >
        {HomeData.HeroData.items.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === 0} />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 via-black/50 to-transparent z-10"></div>
              <div ref={containerRef} className="container h-screen mx-auto px-4">
                <div className="relative z-20 h-full flex flex-col justify-end xl:gap-5 pb-[35%] xl:pb-[10%] ">
                  <h2 className={`text-white text-3xl xs:text-5xl  xl:text-6xl 2xl:text-7xl xs:max-w-[70vw] xl:max-w-3xl 
                  font-normal transition-all duration-1000 ease-out font-suisse-intl mb-4 xs:mb-5 xl:mb-5 ${activeIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                      }`}
                    style={{ transitionDelay: activeIndex === index ? '300ms' : '0ms' }}
                  >
                    {slide.title}
                  </h2>
                  <p className={`text-white text-sm xl:text-lg xs:max-w-[70vw] xl:max-w-2xl transition-all duration-1000 ease-out mb-3 xs:mb-5 xl:mb-2  ${activeIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                      }`}
                    style={{ transitionDelay: activeIndex === index ? '500ms' : '0ms' }}
                  >
                    {slide.description}
                  </p>
                  <Link href="#" className={`relative bg-transparent text-white px-4 py-2 xl:px-8 xl:py-3 font-light  w-fit overflow-hidden border-2 border-white text-sm uppercase transition-all duration-700 ease-out group ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: activeIndex === index ? '700ms' : '0ms' }}>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                      {slide.button}
                    </span>

                    {/* Sliding background */}
                    <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;