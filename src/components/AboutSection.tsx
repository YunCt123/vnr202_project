import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function AboutSection() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Đảng Cộng Sản Việt Nam là gì?
        </motion.h2>
        <motion.div
          className="section-content prose"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp}>
            Đảng Cộng sản Việt Nam là đảng cầm quyền tại Việt Nam theo Hiến pháp, đại diện cho
            giai cấp công nhân, nhân dân lao động và toàn dân tộc Việt Nam. Đảng được thành lập
            vào ngày <strong>3 tháng 2 năm 1930</strong> bởi lãnh tụ Nguyễn Ái Quốc (Hồ Chí Minh).
          </motion.p>
          <motion.p variants={fadeInUp}>
            Trải qua gần một thế kỷ, Đảng đã lãnh đạo nhân dân Việt Nam giành độc lập dân tộc,
            thống nhất đất nước và đang tiếp tục công cuộc đổi mới, xây dựng chủ nghĩa xã hội.
          </motion.p>
        </motion.div>
        <motion.div
          className="section-divider"
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </div>
    </section>
  )
}
