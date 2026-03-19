import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
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

export function ExploreSection() {
  const cards = [
    {
      icon: '📖',
      title: 'Thành lập Đảng',
      description: 'Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam năm 1930 tại Hương Cảng',
      border: 'red',
      link: '/timeline'
    },
    {
      icon: '⚔️',
      title: 'Kháng chiến',
      description: 'Hai cuộc kháng chiến vĩ đại chống thực dân Pháp và đế quốc Mỹ',
      border: 'gold',
      link: '/timeline'
    },
    {
      icon: '🌐',
      title: 'Đổi mới',
      description: 'Công cuộc đổi mới từ 1986 đưa đất nước hội nhập quốc tế',
      border: 'bronze',
      link: '/about'
    },
    {
      icon: '📅',
      title: 'Dòng thời gian',
      description: 'Các mốc lịch sử quan trọng qua từng giai đoạn',
      border: 'red-light',
      link: '/timeline'
    }
  ]

  return (
    <section className="section section-cream" id="explore">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Khám phá nội dung
        </motion.h2>
        <motion.div
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              data-border={card.border}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="card-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to={card.link} className="card-link">
                Tìm hiểu thêm →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
