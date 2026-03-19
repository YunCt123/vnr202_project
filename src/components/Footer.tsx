import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4><span className="footer-marker">◆</span> Về website</h4>
            <p>
              Website giới thiệu về lịch sử Đảng Cộng sản Việt Nam, phục vụ mục đích học tập
              và nghiên cứu cho sinh viên, giảng viên và những người quan tâm.
            </p>
          </motion.div>
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4><span className="footer-marker">◆</span> Liên kết nhanh</h4>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link to="/">Trang chủ</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link to="/about">Giới thiệu</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link to="/timeline">Dòng thời gian</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Link to="/videos">Video tư liệu</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4><span className="footer-marker">◆</span> Thông tin</h4>
            <p>
              Đây là sản phẩm học tập thuộc môn VNR202 - Lịch sử Đảng Cộng sản Việt Nam
              tại Đại học FPT.
            </p>
            <p>
              Nội dung được tổng hợp từ các nguồn tài liệu lịch sử chính thống.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>&copy; 2026 - Dự án VNR202 | FPT University</p>
          <p className="footer-quote">"Không có gì quý hơn độc lập, tự do" - Hồ Chí Minh</p>
        </motion.div>
      </div>
    </footer>
  )
}
