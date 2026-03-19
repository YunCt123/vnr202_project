type StorySectionProps = {
  id: string
  title: string
  subtitle: string
  year: string
  description: string
  theme: string
  videoUrl?: string
  progress: number
  sectionIndex: number
  totalSections: number
  children?: React.ReactNode
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export const StorySection = ({
  id,
  title,
  subtitle,
  year,
  description,
  theme,
  videoUrl,
  progress,
  sectionIndex,
  totalSections,
  children,
}: StorySectionProps) => {
  const totalSteps = Math.max(1, totalSections - 1)
  const sectionProgress = clamp(
    (progress - sectionIndex / totalSteps) * totalSteps,
    0,
    1,
  )

  return (
    <article
      id={id}
      className="story-section"
      data-theme={theme}
      style={{
        ['--section-progress' as string]: sectionProgress,
      }}
    >
      <div className="story-section__inner">
        <div className="story-section__content">
          <span className="story-section__year">{year}</span>
          <h2 className="story-section__title">{title}</h2>
          <p className="story-section__subtitle">{subtitle}</p>
          <p className="story-section__description">{description}</p>
        </div>
        <div className="story-section__visual">
          <div className="parallax parallax--one" />
          <div className="parallax parallax--two" />
          <div className="parallax parallax--three" />
        </div>
      </div>
      {videoUrl ? (
        <div className="story-section__media">
          <iframe
            src={videoUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
      {children}
    </article>
  )
}
