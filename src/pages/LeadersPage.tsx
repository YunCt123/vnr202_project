import { motion } from 'framer-motion'
import { LeadersSection } from '../components/LeadersSection'

export function LeadersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <LeadersSection />
    </motion.div>
  )
}
