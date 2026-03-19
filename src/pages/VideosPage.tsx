import { motion } from 'framer-motion'
import { VideosSection } from '../components/VideosSection'

export function VideosPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VideosSection />
    </motion.div>
  )
}
