import { motion } from 'framer-motion'
import { AboutSection } from '../components/AboutSection'
import { ExploreSection } from '../components/ExploreSection'
import { SignificanceSection } from '../components/SignificanceSection'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function AboutPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AboutSection />
      <ExploreSection />
      <SignificanceSection />
    </motion.div>
  )
}
