import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Video {
  id: string
  title: string
}

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

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
}

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const videos: Video[] = [
    { id: 'qP-lvOyZANY', title: 'Lịch sử Đảng Việt Nam' },
    { id: '66tLc02zoNs', title: 'Những nhân vật có tầm ảnh hưởng trong cuộc đời của Bác Hồ' },
  ]

  const openModal = (videoId: string) => {
    setActiveVideo(videoId)
  }

  const closeModal = () => {
    setActiveVideo(null)
  }

  return (
    <>
      <section className="section section-red" id="videos" style={{ flex: 1, minHeight: 'calc(100vh - 70px)', paddingBottom: '80px' }}>
        <div className="container">
          <motion.h2
            className="section-title section-title-light"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Video Tư liệu
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Khám phá lịch sử qua các video tài liệu quý giá
          </motion.p>
          <motion.div
            className="videos-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="video-card"
                variants={cardVariants}
                onClick={() => openModal(video.id)}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  borderColor: '#facc15',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                    }}
                  />
                  <motion.div
                    className="play-button"
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: '#facc15',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span>▶</span>
                  </motion.div>
                </div>
                <h4>{video.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-modal active"
            onClick={closeModal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="modal-overlay"></div>
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              variants={modalContentVariants}
            >
              <motion.button
                className="modal-close"
                onClick={closeModal}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
