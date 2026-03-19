import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { timelinePeriods } from '../data/timelineData'

export function TimelineSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredPeriods = filter === 'all'
    ? timelinePeriods
    : timelinePeriods.filter(p => p.id === filter)

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id)
  }

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

        <motion.p
          className="timeline-page-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Hành trình hơn 90 năm của Đảng Cộng sản Việt Nam qua các giai đoạn lịch sử
        </motion.p>

        {/* Filter Buttons */}
        <div className="timeline-filters">
          <button
            className={`timeline-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tất cả
          </button>
          {timelinePeriods.map(p => (
            <button
              key={p.id}
              className={`timeline-filter-btn ${filter === p.id ? 'active' : ''}`}
              onClick={() => setFilter(p.id)}
            >
              {p.yearRange}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline-v2">
          <div className="timeline-v2-line" />
          {filteredPeriods.map((period, idx) => (
            <motion.div
              key={period.id}
              className={`timeline-v2-period ${expandedId === period.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <motion.div
                className="timeline-v2-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.4 }}
              />

              <motion.div
                className="timeline-v2-card"
                onClick={() => toggleExpand(period.id)}
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
              >
                <div className="timeline-v2-card-header">
                  <span className="timeline-v2-badge">{period.yearRange}</span>
                  <h3>{period.title}</h3>
                  <p>{period.summary}</p>
                  <span className="timeline-v2-toggle">
                    {expandedId === period.id ? '▲ Thu gọn' : `▼ Xem ${period.events.length} sự kiện`}
                  </span>
                </div>

                <AnimatePresence>
                  {expandedId === period.id && (
                    <motion.div
                      className="timeline-v2-events"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {period.events.map((event, eIdx) => (
                        <motion.div
                          key={eIdx}
                          className="timeline-v2-event"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: eIdx * 0.04 }}
                        >
                          <div className="timeline-v2-event-dot" />
                          <div className="timeline-v2-event-content">
                            <span className="timeline-v2-event-year">
                              {event.date || event.year}
                            </span>
                            <strong>{event.title}</strong>
                            <p>{event.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
