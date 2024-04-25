export const slideInFromLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const slideInFromTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const slideInFromRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const watermarkSlideInFromRight = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    transition: { duration: 1 },
  },
};

export const watermarkSlideInFromLeft = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    transition: { duration: 1 },
  },
};
