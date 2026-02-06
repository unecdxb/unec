"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import moment from "moment";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const PageBanner = ({ title, image, imageAlt, description, date }: { title: string, image: string, imageAlt: string, description?: string, date?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftOffset, setLeftOffset] = useState(0);
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const isNewsDetails = pathname.includes("/news/");

    useEffect(() => {
        const updateOffset = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setLeftOffset(rect.left - 15);
            }
            setIsMobile(window.innerWidth < 1024);
        };
        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    return (
        <section>
            <div
                className="h-screen"
            >
                <div>
                    <div className="relative w-full h-screen">
                        <Image src={image} alt={imageAlt} fill className="object-cover" />
                        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div> */}
                        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 via-black/50 to-transparent z-10"></div>
                        <div
                            ref={containerRef}
                            className="container invisible pointer-events-none"
                        />
                        <div className="h-screen mx-auto" style={{ paddingLeft: isMobile ? 0 : `${leftOffset}px` }}>
                            <div className="relative z-20 h-full flex flex-col justify-end">
                                <div className='xl:w-[44%] p-[28px] bg-black/50 font-[400]'>
                                    <h2 className={`text-white text-25 font-bold xs:max-w-[70vw] xl:max-w-3xl leading-[1.2] 
                  transition-all duration-1000 ease-out font-suisse-intl mb-4 xs:mb-5 xl:mb-5 opacity-100 translate-y-0 uppercase`}  >
                                        {title}
                                    </h2>
                                    <div className={`w-10 h-1 bg-primary mb-5 xl:mb-7 opacity-100 translate-y-0`} />
                                    {description && description
                                        .trim()
                                        .split(/\n\s*\n/) // paragraph split (empty line)
                                        .map((para, pIndex) => (
                                            <p
                                                key={pIndex}
                                                className="text-white text-sm xl:text-14 mb-3 xs:mb-5 xl:mb-6"
                                            >
                                                {para.split("\n").map((line, lIndex) => (
                                                    <span key={lIndex}>
                                                        {line}
                                                        {lIndex < para.split("\n").length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </p>
                                        ))}

                                    {isNewsDetails && (
                                        <div className='flex justify-between items-center'>
                                            <div className="text-white">
                                                {moment(date, "YYYY-MM-DD").format("MM.DD.YYYY")}
                                            </div>
                                            <div className='flex gap-2'>
                                                <Link href={"#"} className="w-8 h-8 bg-transparent border border-white text-white flex items-center justify-center hover:bg-white transition-colors group" >
                                                    <FaFacebookF className="text-sm group-hover:scale-110 transition-all group-hover:text-black" />
                                                </Link>
                                                <Link href={"#"} className="w-8 h-8 bg-transparent border border-white text-white flex items-center justify-center hover:bg-white transition-colors group" >
                                                    <FaTwitter className="text-sm group-hover:scale-110 transition-all group-hover:text-black" />
                                                </Link>
                                                <Link href={"#"} className="w-8 h-8 bg-transparent border border-white text-white flex items-center justify-center hover:bg-white transition-colors group" >
                                                    <FaLinkedinIn className="text-sm group-hover:scale-110 transition-all group-hover:text-black" />
                                                </Link>
                                            </div>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;