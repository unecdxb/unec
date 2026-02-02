"use client";
import Image from "next/image";
import { CareerData } from "./type";
import { useEffect, useState, useRef } from "react";

const SubContents2 = ({ data }: { data: CareerData['firstSection']['items'] }) => {
    const [leftOffset, setLeftOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

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
        <section className="sp-pb" id="associated-business">
            <div className="">
                {data.map((item, index) => (
                    <div>
                        <div
                            ref={containerRef}
                            className="container invisible pointer-events-none"
                        />
                        <Image src={item.image} alt={item.imageAlt} width={1920} height={1080} className="w-full h-full object-cover lg:hidden" />
                        <div className={`lg:h-[500px] xl:h-full gap-6 xl:gap-10 flex items-end ${index % 2 == 0 ? "justify-end" : "justify-start"}`} style={{ backgroundImage: isMobile ? "none" : `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className='xl:w-[44%] p-[28px] lg:bg-black/50 bg-black flex flex-col h-fit' style={index % 2 == 0 ? { marginRight: isMobile ? 0 : `${leftOffset}px` } : { marginLeft: isMobile ? 0 : `${leftOffset}px` }}>
                                <h2 className={`text-white text-25 font-bold xs:max-w-[70vw] xl:max-w-3xl leading-[1.2] 
                                  transition-all duration-1000 ease-out font-suisse-intl mb-4 xs:mb-5 xl:mb-5 opacity-100 translate-y-0 uppercase`}  >
                                    {item.title}
                                </h2>
                                <div className={`w-10 h-1 bg-primary mb-5 xl:mb-7 opacity-100 translate-y-0`} />
                                {item.description && item.description
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SubContents2;