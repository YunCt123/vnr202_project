import { useEffect, useRef } from 'react'

type Position = { x: number; y: number }

type MousePositionOptions = {
  onUpdate: (position: Position) => void
}

export const useMousePosition = ({ onUpdate }: MousePositionOptions) => {
  const target = useRef<Position>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener('mousemove', handleMove)

    let raf = 0
    const tick = () => {
      onUpdate(target.current)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [onUpdate])
}
