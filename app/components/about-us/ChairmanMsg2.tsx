"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import SubTitle from '../common/SubTitle';
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import { AboutData } from './type';

const ChairmanMsg2 = ({ data }: { data: AboutData["thirdSection"] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paginationLeft, setPaginationLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftOffset, setLeftOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateOffset = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                console.log(containerRef.current.getBoundingClientRect());
                setLeftOffset(rect.left + 15);
            }
            setIsMobile(window.innerWidth < 768);
        };
        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);


    return (
        <section id={data.id}>
            <div
                className=""
            >
                <div>
                    <div className="relative w-full pt-1" style={{ backgroundImage: isMobile ? "" : `url(${data.image})`, backgroundSize: "cover", backgroundPosition: "top" }}>

                        {/* <Image src="/assets/images/about-us/abt-main.jpg" alt="Chairman" fill className="object-cover" /> */}
                        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div> */}
                        <div
                            ref={containerRef}
                            className="container invisible pointer-events-none"
                        />
                        <div className="w-full lg:hidden">
                            {isMobile && <Image src={data.image} alt="Chairman" width={100} height={100} className="w-full h-full object-cover" />}
                        </div>
                        <div className="lg:py-25 py-10 relative md:bg-black/60 bg-black lg:w-[50%] flex justify-center items-center text-white max-lg:flex-col">

                            <div className="pr-16" style={{ paddingLeft: `${leftOffset}px` }}>
                                {/* <SubTitle title="TOGETHER, WE BUILD [ LEGACY ]" titleColor='white' className='text-28' /> */}
                                <h2 className="text-28 xs:text-28 xl:text-28  uppercase font-bold leading-[1.2] mb-2 xl:mb-6 text-white font-[700]">
                                    {/* TOGETHER,
                                    <br /> WE BUILD [ LEGACY ] */}
                                    {data.title.split("\n").map((item, index) => (
                                        <div key={index}>
                                            <span>{item}</span><br />
                                        </div>
                                    ))}
                                </h2>
                                <div className="text-15 leading-[26px]">
                                    {data.description.split("\n").map((item, index) => (
                                        <motion.div key={index}>
                                            <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" mb-4 font-[400]">{item}</motion.p>
                                        </motion.div>
                                    ))}
                                    {/* <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" mb-4 font-light">Great things in life are rarely accomplished alone. It takes teamwork to build something beautiful, strong and enduring. [ UNEC ] has been a trusted, hard-working partner at the side of real estate developers in the region for over 40 years, collaborating on iconic, world-class projects across the UAE and gulf region.</motion.p>
                                    <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" mb-4 font-light">Our role is to successfully deliver the client’s vision into reality using our history of experience, vast resources and dedicated team members. We attribute our accomplishments to decades of commitment to our clients, and a deep understanding of their interests and goals; providing real value in building tomorrows skylines, today.</motion.p>
                                    <motion.p variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="font-light">This is our passion and the foundation of a hard-earned reputation. It is and will remain at the heart of who we are as a company, as we continue to evolve with new strategies and technical mastery, maintaining our position at the forefront of our industry. Together, we’re building a legacy of excellence for years to come.</motion.p> */}
                                </div>
                                <div className="mt-6">
                                    <motion.h3 variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="text-14 font-bold">{data.name}</motion.h3>
                                    <motion.p variants={moveUp(1.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" font-suisse-intl text-14"><span className="font-semibold text-14 ">[ </span><span className=" font-bold  text-primary">{data.designation}</span><span className="font-semibold  uppercase text-14 "> ]</span></motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMsg2;