import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div
          className="hero-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span>&#9733;</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lịch Sử Đảng Cộng Sản Việt Nam
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        ></motion.div>

        <motion.p
          className="hero-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          "Đảng ta là đạo đức, là văn minh"
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Từ nguồn gốc đến hiện đại — Hành trình 95 năm xây dựng và phát triển đất nước
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link to="/about" className="btn btn-primary">
            Khám phá ngay
          </Link>
          <Link to="/timeline" className="btn btn-outline">
            Xem dòng thời gian
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
