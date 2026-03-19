import { motion } from 'framer-motion'
import { GroupSection } from '../components/GroupSection'

export function GroupPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GroupSection />
    </motion.div>
  )
}
