// Custom smooth easing curves
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // Smoother version of ease-in-out
const butterSmooth: [number, number, number, number] = [0.33, 1, 0.68, 1]; // Extra smooth with a gentle bounce feel
const silkyEase: [number, number, number, number] = [0.4, 0, 0.2, 1]; // Material Design standard easing

// motionVariants.ts
export const containerStagger = {
  show: {
    transition: {
      staggerChildren: 0.12, // Slightly faster for smoother flow
      delayChildren: 0.05,
    },
  },
};

export const moveUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.8, // Slightly faster
      ease: silkyEase,
    },
  },
});

export const moveDown = (delay: number = 0) => ({
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.7,
      ease: silkyEase,
    },
  },
});

export const moveLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.7,
      ease: silkyEase,
    },
  },
});

export const moveRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.7,
      ease: silkyEase,
    },
  },
});

export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: smoothEase,
    },
  },
});

export const paragraphItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: silkyEase,
      staggerChildren: 0.08,
    },
  },
};

export const opacityMove = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: butterSmooth,
    },
  },
};

export const listUpMove = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

export const letterContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035, // Tighter timing for smoother flow
      ease: silkyEase,
    },
  },
};

export const letterItem = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      ease: butterSmooth,
      duration: 0.6,
    },
  },
};

export const letterItemTop = {
  hidden: {
    y: -48,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: butterSmooth,
    },
  },
};

// Zoom In Variants
export const zoomIn = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: 0.7,
      ease: butterSmooth,
    },
  },
});

export const zoomInFast = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: 0.5,
      ease: silkyEase,
    },
  },
});

export const zoomInSlow = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: 1,
      ease: smoothEase,
    },
  },
});

export const zoomInUp = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: butterSmooth,
    },
  },
});
