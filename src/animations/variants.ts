import type { Variants } from 'framer-motion'

const easeCurve: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: easeCurve } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export const modalVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeCurve },
  },
  exit: { opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.3 } },
}
