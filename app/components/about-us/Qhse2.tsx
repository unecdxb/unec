"use client";
import SubTitle from "../common/SubTitle";
import { motion, AnimatePresence } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { AboutData } from "./type";
import AnchorSection from "../common/AnchorSection";
import { useState } from "react";

const QHSE2 = ({ data }: { data: AboutData["eighthSection"] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <AnchorSection id={data.id}>
            <section className="sp-py bg-[#ebebeb]">
                <div className="container">
                    <SubTitle title="QHSE" mClass="mb-4 xl:mb-12 text-black" />

                    {/* ── MOBILE: Accordion ── */}
                    <div className="lg:hidden border-2 border-black divide-y-2 divide-black">
                        {data.items.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="bg-white">
                                    {/* Header / toggle button */}
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between px-4 py-4 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                            />
                                            <span className="text-sm font-bold text-black uppercase tracking-wide">
                                                {item.title}
                                            </span>
                                        </div>
                                        {/* Chevron */}
                                        {/* <span
                                            className={`text-red-600 text-lg leading-none transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        >
                                            &#8964;
                                        </span> */}
                                        <Image src={'/assets/images/about-us/icons/arrow_down.svg'} width={14} height={14} alt="arrow_down" className={`${isOpen ? "rotate-180" : "rotate-0" }`}/>
                                    </button>

                                    {/* Collapsible body */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-5">
                                                    <div className="w-8 h-0.5 bg-secondary mb-3" />
                                                    {item.description &&
                                                        item.description
                                                            .trim()
                                                            .split(/\n\s*\n/)
                                                            .map((para, pIndex) => (
                                                                <p
                                                                    key={pIndex}
                                                                    className="font-semibold text-secondary text-sm"
                                                                >
                                                                    {para.split("\n").map((line, lIndex, arr) => (
                                                                        <span key={lIndex}>
                                                                            {line}
                                                                            {lIndex < arr.length - 1 && <br />}
                                                                        </span>
                                                                    ))}
                                                                </p>
                                                            ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── DESKTOP: Original grid ── */}
                    <div className="hidden lg:grid grid-cols-3 divide-y-2 divide-black border-2 border-black">
                        {data.items.map((item, index) => (
                            <motion.div
                                variants={moveUp(index * 0.2 + 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ amount: 0.1, once: true }}
                                key={index}
                                className={`last:border-r-0 bg-white ${
                                    index !== 0 && index % 3 === 0 ? "col-span-3" : "col-span-1"
                                } p-8 ${(index + 1) % 3 !== 0 ? "border-r-2 border-black" : ""}`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={30}
                                            height={30}
                                            className="text-50 text-secondary"
                                        />
                                    </div>
                                    <div className="w-10 h-1 bg-secondary mb-7 opacity-100 translate-y-0" />
                                    <div className="flex justify-between gap-4">
                                        {item.description &&
                                            item.description
                                                .trim()
                                                .split(/\n\s*\n/)
                                                .map((para, pIndex) => (
                                                    <p
                                                        key={pIndex}
                                                        className="font-semibold text-secondary text-sm"
                                                    >
                                                        {para.split("\n").map((line, lIndex, arr) => (
                                                            <span key={lIndex}>
                                                                {line}
                                                                {lIndex < arr.length - 1 && <br />}
                                                            </span>
                                                        ))}
                                                    </p>
                                                ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </AnchorSection>
    );
};

export default QHSE2;