import { motion } from 'framer-motion'
import { VideosSection } from '../components/VideosSection'

export function VideosPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)' }}
    >
      <VideosSection />
    </motion.div>
  )
}
