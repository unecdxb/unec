'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';
import Image from 'next/image';
import ProjectInfo from './ProjectInfo';
// Constants
const AUTO_PLAY_INTERVAL = 6500;
const THUMBNAILS_PER_VIEW = 6;
const TRANSITION_DURATION = 0.5;
const THUMBNAIL_TRANSITION_DURATION = 0.3;

// Mock ProjectInfo component


const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const images = useMemo(() => [
    "/assets/images/projects/big/prj-1.jpg",
    "/assets/images/projects/big/prj-2.jpg",
    "/assets/images/projects/big/prj-3.jpg",
    "/assets/images/projects/big/prj-4.png",
    "/assets/images/projects/big/prj-2.jpg",
    "/assets/images/projects/big/prj-3.jpg",
  ], []);

  const maxThumbnailIndex = useMemo(() =>
    Math.max(0, images.length - THUMBNAILS_PER_VIEW),
    [images.length]
  );

  const visibleThumbnails = useMemo(() =>
    images.slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW),
    [images, thumbnailStartIndex]
  );

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const nextThumbnails = useCallback(() => {
    setThumbnailStartIndex((prev) => Math.min(prev + 1, maxThumbnailIndex));
  }, [maxThumbnailIndex]);

  const prevThumbnails = useCallback(() => {
    setThumbnailStartIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageError = useCallback((index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (isLightboxOpen) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [images.length, isLightboxOpen]);

  // Body scroll lock effect
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
    } else if (currentSlide >= thumbnailStartIndex + THUMBNAILS_PER_VIEW) {
      setThumbnailStartIndex(Math.min(currentSlide - THUMBNAILS_PER_VIEW + 1, maxThumbnailIndex));
    }
  }, [currentSlide, thumbnailStartIndex, maxThumbnailIndex]);

  // Keyboard navigation effect
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  // Preload adjacent images
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % images.length;
    const prevIndex = (currentSlide - 1 + images.length) % images.length;

    [nextIndex, prevIndex].forEach(index => {
      const img = new window.Image();
      img.src = images[index];
    });
  }, [currentSlide, images]);

  if (images.length === 0) {
    return (
      <section className="relative sp-py">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">No images available</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative sp-py">
      <div className="container mx-auto px-4">
        <ProjectInfo />
        <div className="xl:gap-20 items-center">
          {/* Gallery Slider */}
          <div className="relative group">
            <div className="relative h-[250px] xs:h-[300px] xl:h-[450px] 2xl:h-[650px] bg-black overflow-hidden  shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: TRANSITION_DURATION }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full cursor-pointer" onClick={() => openLightbox(currentSlide)}>
                    {!imageErrors.has(currentSlide) ? (
                      <Image
                        src={images[currentSlide]}
                        alt={`Project ${currentSlide + 1}`}
                        fill
                        className="object-contain"
                        priority={currentSlide === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        onError={() => handleImageError(currentSlide)}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-white">
                        Image failed to load
                      </div>
                    )}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <FiZoomIn className="text-white text-5xl" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <FiChevronLeft className="text-2xl text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <FiChevronRight className="text-2xl text-gray-800" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Slider */}
            <div className="relative mt-4 xl:mt-8 group/thumbnails">
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 xl:gap-8">
                  <AnimatePresence mode="popLayout">
                    {visibleThumbnails.map((img, idx) => {
                      const actualIndex = thumbnailStartIndex + idx;
                      return (
                        <motion.div
                          key={actualIndex}
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1 }}
                          transition={{ duration: THUMBNAIL_TRANSITION_DURATION }}
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 1 }}
                          onClick={() => setCurrentSlide(actualIndex)}
                          className={`relative h-[200px] xl:h-[250px] 2xl:h-[300px]  overflow-hidden cursor-pointer hover:opacity-100  ${actualIndex === currentSlide ? '' : ''
                            }`} 
                        >
                          {!imageErrors.has(actualIndex) ? (
                            <>
                              {actualIndex !== currentSlide && (
                                <div className="absolute inset-0  z-10  bg-opacity-30 hover:bg-opacity-0 transition-all duration-300" onClick={() => openLightbox(actualIndex)} />
                              )}
                              <Image
                                src={img}
                                alt={`Thumbnail ${actualIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                                onError={() => handleImageError(actualIndex)}
                              />
                            </>
                          ) : (
                            <div className="flex items-center justify-center h-full text-white text-xs bg-gray-800">
                              Error
                            </div>
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
                  aria-label="Previous thumbnails"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full  opacity-0 group-hover/thumbnails:opacity-100 transition-all duration-300 z-10"
                >
                  <FiChevronLeft className="text-xl text-gray-800" />
                </button>
              )}
              {thumbnailStartIndex < maxThumbnailIndex && (
                <button
                  onClick={nextThumbnails}
                  aria-label="Next thumbnails"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full  opacity-0 group-hover/thumbnails:opacity-100 transition-all duration-300 z-10"
                >
                  <FiChevronRight className="text-xl text-gray-800" />
                </button>
              )}
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
              aria-label="Close lightbox"
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiX className="text-4xl" />
            </button>

            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiChevronLeft className="text-5xl" />
            </button>

            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FiChevronRight className="text-5xl" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-7xl max-h-[90vh] w-full px-16"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: THUMBNAIL_TRANSITION_DURATION }}
                  className="relative w-full h-[70vh]"
                >
                  {!imageErrors.has(lightboxIndex) ? (
                    <Image
                      src={images[lightboxIndex]}
                      alt={`Project ${lightboxIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      priority
                      onError={() => handleImageError(lightboxIndex)}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white">
                      Image failed to load
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg">
              {lightboxIndex + 1} / {images.length}
            </div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    setLightboxIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
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