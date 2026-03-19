import { motion } from 'framer-motion'
import anhImage from '../assets/team_member/anh.jpg'
import maiImage from '../assets/team_member/mai.jpg'
import longImage from '../assets/team_member/long.jpg'
import trongImage from '../assets/team_member/trong.jpg'
import huyImage from '../assets/team_member/huy.jpg'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const memberVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}

export function GroupSection() {
  const members = [
    {
      name: 'Trịnh Đức Anh',
      role: 'Trưởng nhóm',
      contribution: 'Điều phối nội dung và thiết kế tổng thể',
      image: anhImage
    },
    {
      name: 'Nguyễn Thanh Mai',
      role: 'Thành viên',
      contribution: 'Nghiên cứu dữ liệu lịch sử và tổng hợp tài liệu',
      image: maiImage
    },
    {
      name: 'Hoàng Kim Long',
      role: 'Thành viên',
      contribution: 'Triển khai giao diện và hoạt ảnh',
      image: longImage
    },
    {
      name: 'Nguyễn Huỳnh Bảo Trọng',
      role: 'Thành viên',
      contribution: 'Tối ưu trải nghiệm người dùng và kiểm thử',
      image: trongImage
    },
    {
      name: 'Lê Phạm Trường Huy',
      role: 'Thành viên',
      contribution: 'Xây dựng nội dung chuyên đề',
      image: huyImage
    }
  ]

  return (
    <section className="section section-cream" id="group">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nhóm thực hiện
        </motion.h2>
        <motion.div
          className="group-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="group-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              transition: { duration: 0.3 }
            }}
          >
            <span className="group-card-badge">VNR202</span>
            <h3>Lịch sử Đảng Cộng sản Việt Nam</h3>
            <p>
              Đồ án nhóm tái hiện các dấu mốc lịch sử, lãnh đạo tiêu biểu và câu chuyện nổi bật bằng trải nghiệm
              tương tác trực quan.
            </p>
          </motion.div>
          <motion.div
            className="group-members"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              transition: { duration: 0.3 }
            }}
          >
            <h4>Thành viên nhóm</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {members.map((member) => (
                <motion.li
                  key={member.name}
                  className="member-card"
                  variants={memberVariants}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img src={member.image} alt={member.name} className="member-avatar" loading="lazy" />
                  <div className="member-meta">
                    <h5>{member.name}</h5>
                    <span>{member.role}</span>
                    <p>{member.contribution}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
