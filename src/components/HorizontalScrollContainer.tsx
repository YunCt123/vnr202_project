import { useRef } from 'react'
import { useHorizontalScroll } from '../systems/scroll/useHorizontalScroll'

type HorizontalScrollContainerProps = {
  sections: number
  onProgress: (progress: number) => void
  onActiveIndex: (index: number) => void
  children: React.ReactNode
}

export const HorizontalScrollContainer = ({
  sections,
  onProgress,
  onActiveIndex,
  children,
}: HorizontalScrollContainerProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useHorizontalScroll({
    wrapperRef,
    trackRef,
    sections,
    onProgress,
    onActiveIndex,
  })

  return (
    <section
      className="horizontal-wrapper"
      ref={wrapperRef}
      style={{ height: `calc(${sections} * 100vh)` }}
    >
      <div className="horizontal-sticky">
        <div
          className="horizontal-track"
          ref={trackRef}
          style={{ width: `calc(${sections} * 100vw)` }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
