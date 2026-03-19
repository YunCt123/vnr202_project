import { useCallback, useEffect, useRef } from 'react'
import { useMousePosition } from './useMousePosition'
import { useCursor } from './CursorProvider'

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const { mode } = useCursor()

  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  const onUpdate = useCallback((next: { x: number; y: number }) => {
    target.current = next
  }, [])

  useMousePosition({ onUpdate })

  useEffect(() => {
    let raf = 0
    const tick = () => {
      position.current.x += (target.current.x - position.current.x) * 0.18
      position.current.y += (target.current.y - position.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.setProperty('--cursor-x', `${position.current.x}`)
        dotRef.current.style.setProperty('--cursor-y', `${position.current.y}`)
      }
      if (ringRef.current) {
        ringRef.current.style.setProperty('--cursor-x', `${position.current.x}`)
        ringRef.current.style.setProperty('--cursor-y', `${position.current.y}`)
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <div className={`cursor-dot cursor-dot--${mode}`} ref={dotRef} />
      <div className={`cursor-ring cursor-ring--${mode}`} ref={ringRef} />
    </>
  )
}
