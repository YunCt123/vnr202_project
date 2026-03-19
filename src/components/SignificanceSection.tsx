import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export function SignificanceSection() {
  const items = [
    {
      icon: '⭐',
      iconClass: 'icon-red',
      title: 'Độc lập dân tộc',
      description: 'Lãnh đạo Cách mạng Tháng Tám 1945 thành công, khai sinh nước Việt Nam Dân chủ Cộng hòa'
    },
    {
      icon: '✊',
      iconClass: 'icon-gold',
      title: 'Thống nhất đất nước',
      description: 'Chiến thắng 30/4/1975, non sông thu về một mối sau 21 năm chia cắt'
    },
    {
      icon: '📚',
      iconClass: 'icon-bronze',
      title: 'Đổi mới phát triển',
      description: 'Công cuộc Đổi mới từ 1986 đưa Việt Nam từ nghèo đói đến phát triển bền vững'
    }
  ]

  return (
    <section className="section section-white">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tầm vóc lịch sử
        </motion.h2>
        <motion.div
          className="significance-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="significance-item"
              variants={itemVariants}
            >
              <motion.div
                className={`significance-icon ${item.iconClass}`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <span>{item.icon}</span>
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
