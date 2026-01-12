'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';
import Image from 'next/image';
import SubTitle from "../common/SubTitle";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const images = [
    "/assets/images/projects/big/prj-1.jpg",
    "/assets/images/projects/big/prj-2.jpg",
    "/assets/images/projects/big/prj-3.jpg",
    "/assets/images/projects/big/prj-4.png",
    "/assets/images/projects/big/prj-2.jpg",
    "/assets/images/projects/big/prj-3.jpg",
  ];

  const thumbnailsPerView = 4;
  const maxThumbnailIndex = Math.max(0, images.length - thumbnailsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isLightboxOpen) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isLightboxOpen]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  // Auto-scroll thumbnails to keep current slide visible
  useEffect(() => {
    if (currentSlide < thumbnailStartIndex) {
      setThumbnailStartIndex(currentSlide);
    } else if (currentSlide >= thumbnailStartIndex + thumbnailsPerView) {
      setThumbnailStartIndex(currentSlide - thumbnailsPerView + 1);
    }
  }, [currentSlide, thumbnailStartIndex]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextThumbnails = () => {
    setThumbnailStartIndex((prev) => Math.min(prev + 1, maxThumbnailIndex));
  };

  const prevThumbnails = () => {
    setThumbnailStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const visibleThumbnails = images.slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerView);

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 items-center">
          {/* Gallery Slider */}
          <div className="relative group">
            <div className="relative h-[400px] md:h-[500px] bg-black overflow-hidden rounded-lg shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="absolute inset-0" >
                  <div className="relative w-full h-full cursor-pointer" onClick={() => openLightbox(currentSlide)}>
                    <Image src={images[currentSlide]} alt={`Project ${currentSlide + 1}`} fill className="object-cover" priority />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center z-10">
                      <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                        <FiZoomIn className="text-white text-5xl" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <FiChevronLeft className="text-2xl text-gray-800" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <FiChevronRight className="text-2xl text-gray-800" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Slider */}
            <div className="relative mt-4 group/thumbnails">
              <div className="overflow-hidden">
                <div className="grid grid-cols-4 gap-3">
                  <AnimatePresence mode="popLayout">
                    {visibleThumbnails.map((img, idx) => {
                      const actualIndex = thumbnailStartIndex + idx;
                      return (
                        <motion.div
                          key={actualIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentSlide(actualIndex)}
                          className={`relative h-20 rounded-lg overflow-hidden cursor-pointer shadow-md ${actualIndex === currentSlide ? 'ring-4 ring-blue-500' : ''
                            }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${actualIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                          {actualIndex !== currentSlide && (
                            <div className="absolute inset-0  bg-opacity-30 hover:bg-opacity-0 transition-all duration-300" />
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Thumbnail Navigation Arrows */}
              {thumbnailStartIndex > 0 && (
                <button
                  onClick={prevThumbnails}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover/thumbnails:opacity-100 transition-all duration-300 z-10"
                >
                  <FiChevronLeft className="text-xl text-gray-800" />
                </button>
              )}
              {thumbnailStartIndex < maxThumbnailIndex && (
                <button
                  onClick={nextThumbnails}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover/thumbnails:opacity-100 transition-all duration-300 z-10"
                >
                  <FiChevronRight className="text-xl text-gray-800" />
                </button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <SubTitle title="Project Details" />
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 xl:p-10 rounded-lg shadow-lg">
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Client', value: 'Dubai Electricity & Water Authority (DEWA)' },
                  { label: 'Consultant', value: 'Atkins' },
                  { label: 'BUA', value: '2,054,147 SQ.FT' },
                  { label: 'Location', value: 'UAE' },
                  { label: 'Status', value: 'On-going' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-5 pb-3 border-b border-gray-300 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-700">{item.label}</span>
                    <span className="hidden md:block text-gray-500">:</span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiX className="text-4xl" />
            </button>

            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiChevronLeft className="text-5xl" />
            </button>

            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiChevronRight className="text-5xl" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-7xl max-h-[90vh] w-full px-16"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={images[lightboxIndex]}
                  alt={`Project ${lightboxIndex + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg">
              {lightboxIndex + 1} / {images.length}
            </div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setLightboxIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === lightboxIndex
                    ? 'bg-white w-10'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Main;