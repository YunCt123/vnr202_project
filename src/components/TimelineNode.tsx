type TimelineNodeProps = {
  label: string
  isActive: boolean
}

export const TimelineNode = ({ label, isActive }: TimelineNodeProps) => {
  return (
    <div className={`timeline-node ${isActive ? 'is-active' : ''}`}>
      <span className="timeline-node__dot" />
      <span className="timeline-node__label">{label}</span>
    </div>
  )
}
