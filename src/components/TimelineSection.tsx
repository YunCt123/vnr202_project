import { motion } from 'framer-motion'

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}

const timelineItemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function TimelineSection() {
  const events = [
    {
      date: '1858 - 1930',
      title: 'Bối cảnh trước khi thành lập Đảng',
      description: 'Thực dân Pháp xâm lược, các phong trào yêu nước thất bại. Nguyễn Ái Quốc ra đi tìm đường cứu nước năm 1911, tiếp thu chủ nghĩa Mác-Lênin.'
    },
    {
      date: '3/2/1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      description: 'Hội nghị hợp nhất tại Hương Cảng do Nguyễn Ái Quốc chủ trì, thống nhất 3 tổ chức cộng sản thành Đảng Cộng sản Việt Nam.'
    },
    {
      date: '1930 - 1931',
      title: 'Phong trào Xô Viết Nghệ Tĩnh',
      description: 'Cao trào cách mạng đầu tiên, nông dân lập chính quyền Xô Viết tại nhiều địa phương ở Nghệ An, Hà Tĩnh.'
    },
    {
      date: '2/9/1945',
      title: 'Khai sinh nước Việt Nam DCCH',
      description: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
    },
    {
      date: '7/5/1954',
      title: 'Chiến thắng Điện Biên Phủ',
      description: 'Chiến thắng lịch sử "lừng lẫy năm châu, chấn động địa cầu", kết thúc 9 năm kháng chiến chống thực dân Pháp.'
    },
    {
      date: '30/4/1975',
      title: 'Giải phóng miền Nam, thống nhất đất nước',
      description: 'Chiến dịch Hồ Chí Minh toàn thắng, miền Nam hoàn toàn giải phóng, kết thúc 21 năm kháng chiến chống Mỹ.'
    },
    {
      date: '12/1986',
      title: 'Đại hội VI - Đổi mới',
      description: 'Đại hội Đổi mới, chuyển sang kinh tế thị trường định hướng XHCN, mở đầu kỷ nguyên phát triển mới.'
    },
    {
      date: '2021 - Nay',
      title: 'Đại hội XIII và tầm nhìn 2045',
      description: 'Định hướng đưa Việt Nam trở thành nước phát triển, thu nhập cao vào năm 2045 - kỷ niệm 100 năm thành lập nước.'
    }
  ]

  return (
    <section className="section section-cream" id="timeline">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Dòng thời gian lịch sử
        </motion.h2>
        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={index % 2 === 0 ? timelineItemVariants : timelineItemVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="timeline-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.5, backgroundColor: '#fde047' }}
              ></motion.div>
              <motion.div
                className="timeline-content"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <span className="timeline-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
