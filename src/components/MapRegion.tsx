import { useCursor } from '../systems/cursor/CursorProvider'

type MapRegionProps = {
  label: string
  description: string
  onSelect: () => void
  shapeClass: string
}

export const MapRegion = ({ label, description, onSelect, shapeClass }: MapRegionProps) => {
  const { setMode } = useCursor()

  return (
    <button
      className={`map-region ${shapeClass}`}
      onClick={onSelect}
      onMouseEnter={() => setMode('map')}
      onMouseLeave={() => setMode('default')}
      onFocus={() => setMode('map')}
      onBlur={() => setMode('default')}
      type="button"
      aria-label={`${label}: ${description}`}
    >
      <span className="map-region__label">{label}</span>
    </button>
  )
}
