import { TimelineNode } from './TimelineNode'

type TimelineLineProps = {
  labels: string[]
  progress: number
  activeIndex: number
}

export const TimelineLine = ({ labels, progress, activeIndex }: TimelineLineProps) => {
  return (
    <div className="timeline">
      <div className="timeline-bar">
        <span className="timeline-bar__base" />
        <span
          className="timeline-bar__fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <div className="timeline-nodes">
        {labels.map((label, index) => (
          <TimelineNode
            key={label}
            label={label}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  )
}
