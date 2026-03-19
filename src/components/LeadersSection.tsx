import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import tranPhuImage from '../assets/tran_phu.jpg'
import leHongPhongImage from '../assets/Le_Hong_Phong.gif'
import truongChinhImage from '../assets/truong_chinh.jpg'
import leDuanImage from '../assets/Le_duan.png'
import nguyenVanLinhImage from '../assets/nguyen-van-linh.jpg'
import nguyenPhuTrongImage from '../assets/nguyen_phu_trong.webp'
import toLamImage from '../assets/to_lam.jpg'
import { modalVariants, overlayVariants } from '../animations/variants'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
      staggerChildren: 0.1
    }
  }
}

export function LeadersSection() {
  const [selectedLeader, setSelectedLeader] = useState<null | {
    name: string
    term: string
    role: string
    bio: string
    impact: string
    story: string
    image: string
    preview: string
  }>(null)

  const leaders = [
    {
      name: 'Trần Phú',
      term: '1930 - 1931',
      role: 'Tổng Bí thư đầu tiên',
      image: tranPhuImage,
      preview: 'Đặt nền móng lý luận chính trị và tinh thần kiên trung trong giai đoạn đầu của Đảng.',
      bio: 'Sinh năm 1904 tại Hà Tĩnh, ông là nhà cách mạng tiêu biểu của thế hệ đầu tiên và là tác giả Luận cương chính trị tháng 10-1930.',
      impact: 'Đặt nền móng lý luận cho Đảng trong thời kỳ đầu, góp phần định hình đường lối cách mạng Việt Nam.',
      story: 'Bị địch bắt và tra tấn khốc liệt nhưng vẫn giữ khí tiết của người cộng sản, để lại câu nói nổi tiếng về niềm tin vào cách mạng.'
    },
    {
      name: 'Lê Hồng Phong',
      term: '1935 - 1936',
      role: 'Khôi phục hệ thống tổ chức',
      image: leHongPhongImage,
      preview: 'Đưa tổ chức Đảng vượt qua giai đoạn khó khăn và tái lập vai trò lãnh đạo tập trung.',
      bio: 'Sinh năm 1902 tại Nghệ An, ông hoạt động cách mạng quốc tế sớm và giữ vai trò quan trọng trong việc củng cố tổ chức Đảng.',
      impact: 'Chủ trì công tác phục hồi phong trào cách mạng, đưa hoạt động của Đảng vượt qua giai đoạn bị khủng bố nặng nề.',
      story: 'Tại Đại hội I ở Ma Cao năm 1935, ông được bầu làm Tổng Bí thư, đánh dấu bước tái lập lãnh đạo tập trung của Đảng.'
    },
    {
      name: 'Trường Chinh',
      term: '1941 - 1956',
      role: 'Lãnh đạo kháng chiến chống Pháp',
      image: truongChinhImage,
      preview: 'Là nhà lý luận lớn, góp phần định hướng đường lối trong tiền khởi nghĩa và kháng chiến.',
      bio: 'Sinh năm 1907 tại Nam Định, ông là nhà lý luận lớn, nhiều năm đảm nhiệm vai trò hoạch định chiến lược trong thời kỳ tiền khởi nghĩa và kháng chiến.',
      impact: 'Góp phần chỉ đạo Cách mạng Tháng Tám, xây dựng chính quyền mới và định hình nhiều chủ trương lớn của cách mạng Việt Nam.',
      story: 'Tác phẩm "Kháng chiến nhất định thắng lợi" là một dấu mốc lý luận có giá trị trong giai đoạn kháng chiến chống thực dân Pháp.'
    },
    {
      name: 'Lê Duẩn',
      term: '1960 - 1986',
      role: 'Lãnh đạo thống nhất đất nước',
      image: leDuanImage,
      preview: 'Giữ vai trò chỉ đạo chiến lược trong giai đoạn quyết định của cuộc kháng chiến chống Mỹ.',
      bio: 'Sinh năm 1907 tại Quảng Trị, ông có nhiều năm hoạt động ở cả hai miền và là một trong những nhà lãnh đạo chủ chốt thời kỳ chiến tranh.',
      impact: 'Chỉ đạo chiến lược cách mạng trong giai đoạn chống Mỹ, góp phần vào thắng lợi năm 1975 và công cuộc thống nhất đất nước.',
      story: 'Nghị quyết và các quyết sách chiến lược dưới thời ông đã định hình thế chủ động của cách mạng Việt Nam trong giai đoạn quyết định.'
    },
    {
      name: 'Nguyễn Văn Linh',
      term: '1986 - 1991',
      role: 'Khởi xướng công cuộc Đổi mới',
      image: nguyenVanLinhImage,
      preview: 'Mở đường cho đổi mới tư duy phát triển kinh tế và cải tiến quản trị xã hội.',
      bio: 'Sinh năm 1915 tại Hưng Yên, ông là nhà lãnh đạo có tư duy đổi mới mạnh mẽ trong bối cảnh kinh tế - xã hội nhiều khó khăn.',
      impact: 'Cùng tập thể lãnh đạo thúc đẩy đường lối Đổi mới từ Đại hội VI, mở ra giai đoạn phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.',
      story: 'Loạt bài "Những việc cần làm ngay" thể hiện tinh thần chống tiêu cực, cải tiến quản lý và lắng nghe thực tiễn cuộc sống.'
    },
    {
      name: 'Nguyễn Phú Trọng',
      term: '2011 - 2024',
      role: 'Đẩy mạnh xây dựng, chỉnh đốn Đảng',
      image: nguyenPhuTrongImage,
      preview: 'Tạo dấu ấn rõ nét trong công tác xây dựng Đảng và phòng, chống tham nhũng.',
      bio: 'Sinh năm 1944 tại Hà Nội, ông có nền tảng nghiên cứu lý luận sâu và kinh nghiệm nhiều cương vị lãnh đạo trước khi giữ chức Tổng Bí thư.',
      impact: 'Thúc đẩy mạnh mẽ công tác xây dựng, chỉnh đốn Đảng và phòng, chống tham nhũng, củng cố kỷ luật, kỷ cương trong hệ thống chính trị.',
      story: 'Các chỉ đạo quyết liệt về phòng, chống tham nhũng tạo chuyển biến rõ nét, được xã hội quan tâm và đồng tình rộng rãi.'
    },
    {
      name: 'Tô Lâm',
      term: '2024 - nay',
      role: 'Tổng Bí thư đương nhiệm',
      image: toLamImage,
      preview: 'Nhấn mạnh tinh gọn bộ máy, nâng cao hiệu lực quản trị và tổ chức thực thi.',
      bio: 'Sinh năm 1957 tại Hưng Yên, ông có quá trình công tác lâu dài trong lực lượng công an và giữ nhiều vị trí lãnh đạo quan trọng của Đảng, Nhà nước.',
      impact: 'Tiếp nối định hướng xây dựng Đảng, tinh gọn bộ máy, nâng cao hiệu lực quản trị và thúc đẩy các mục tiêu phát triển trong giai đoạn mới.',
      story: 'Trong thời gian đầu nhiệm kỳ, nhiều thông điệp nhấn mạnh yêu cầu đổi mới tổ chức thực thi và kỷ luật hành chính đã được đặt ra.'
    }
  ]

  useEffect(() => {
    if (!selectedLeader) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedLeader(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedLeader])

  return (
    <section className="section section-white" id="leaders">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Các Tổng Bí thư qua các thời kỳ
        </motion.h2>
        <motion.div
          className="leaders-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              className="leader-flip-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="leader-flip-inner">
                <article className="leader-card leader-card-front">
                  <div className="leader-avatar-wrap">
                    <img src={leader.image} alt={leader.name} className="leader-avatar" loading="lazy" />
                  </div>
                  <h4>{leader.name}</h4>
                  <span className="leader-role">{leader.role}</span>
                  <span className="leader-term">{leader.term}</span>
                  <button type="button" className="leader-detail-btn" onClick={() => setSelectedLeader(leader)}>
                    Xem chi tiết
                  </button>
                  <p className="leader-hover-hint">Hover để xem tóm tắt</p>
                </article>

                <article className="leader-card leader-card-back">
                  <h4>{leader.name}</h4>
                  <span className="leader-role">{leader.role}</span>
                  <span className="leader-term">{leader.term}</span>

                  <div className="leader-detail-block">
                    <h5>Tóm tắt</h5>
                    <p>{leader.preview}</p>
                  </div>

                  <button type="button" className="leader-detail-btn leader-detail-btn--light" onClick={() => setSelectedLeader(leader)}>
                    Mở popup chi tiết
                  </button>
                </article>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            className="leader-modal"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.article
              className="leader-modal-card"
              variants={modalVariants}
              role="dialog"
              aria-modal="true"
              aria-label={`Chi tiết ${selectedLeader.name}`}
              onClick={(event: MouseEvent<HTMLElement>) => event.stopPropagation()}
            >
              <button
                type="button"
                className="leader-modal-close"
                onClick={() => setSelectedLeader(null)}
                aria-label="Đóng chi tiết"
              >
                ×
              </button>

              <div className="leader-modal-header">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="leader-modal-avatar" />
                <div>
                  <h3>{selectedLeader.name}</h3>
                  <p>{selectedLeader.role}</p>
                  <span>{selectedLeader.term}</span>
                </div>
              </div>

              <div className="leader-modal-body">
                <section>
                  <h4>Tiểu sử</h4>
                  <p>{selectedLeader.bio}</p>
                </section>
                <section>
                  <h4>Ảnh hưởng</h4>
                  <p>{selectedLeader.impact}</p>
                </section>
                <section>
                  <h4>Câu chuyện tiêu biểu</h4>
                  <p>{selectedLeader.story}</p>
                </section>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
