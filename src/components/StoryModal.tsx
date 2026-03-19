import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { MouseEvent } from 'react'
import { overlayVariants, modalVariants } from '../animations/variants'
import { useCursor } from '../systems/cursor/CursorProvider'

type StoryModalProps = {
  isOpen: boolean
  title: string
  body: string
  onClose: () => void
}

export const StoryModal = ({ isOpen, title, body, onClose }: StoryModalProps) => {
  const { setMode } = useCursor()

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="story-modal"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="story-modal__card"
            variants={modalVariants}
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="story-modal__header">
              <h3>{title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close story details"
                onMouseEnter={() => setMode('interactive')}
                onMouseLeave={() => setMode('default')}
                onFocus={() => setMode('interactive')}
                onBlur={() => setMode('default')}
              >
                Close
              </button>
            </div>
            <p>{body}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
