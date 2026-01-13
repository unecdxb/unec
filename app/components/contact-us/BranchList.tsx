"use client";

import { useEffect, useRef } from "react";
import { contactUsData } from "./data";
import Link from "next/link";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFax } from "react-icons/fa";
import gsap from "gsap";

const BranchList = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, { y: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.05)" });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contactUsData.branchList.map((branch, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-100"
            >
              {/* Accent Bar */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500"></span>

              {/* Title */}
              <h3 className="text-20 font-light text-gray-900 mb-3">
                {branch.title}
              </h3>
              <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4" />
              {/* Info */}
              <div className="space-y-3 text-sm text-gray-600">

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <FaMapMarkerAlt className="text-black mt-1" />
                  <p>{branch.address}</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <FaPhone className="text-black mt-1" />
                  <p>{branch.phone}</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <FaFax className="text-black mt-1" />
                  <p>{branch.fax}</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <FaEnvelope className="text-black mt-1" />
                  <p>{branch.email}</p>
                </div>

              </div>


              {/* Actions */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <Link
                  href={`tel:${branch.phone}`}
                  className="flex items-center justify-center h-11 rounded-md bg-gray-100 text-gray-700 transition hover:bg-primary hover:text-white"
                >
                  <FaPhone />
                </Link>

                <Link
                  href={branch.gmap}
                  target="_blank"
                  className="flex items-center justify-center h-11 rounded-md bg-gray-100 text-gray-700 transition hover:bg-primary hover:text-white"
                >
                  <FaMapMarkerAlt />
                </Link>

                <Link
                  href={`mailto:${branch.email}`}
                  className="flex items-center justify-center h-11 rounded-md bg-gray-100 text-gray-700 transition hover:bg-primary hover:text-white"
                >
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchList;
