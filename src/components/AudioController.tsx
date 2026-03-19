import { useAudio } from '../systems/audio/AudioProvider'
import { useCursor } from '../systems/cursor/CursorProvider'

export const AudioController = () => {
  const { isMuted, toggleMute } = useAudio()
  const { setMode } = useCursor()

  return (
    <button
      className="audio-toggle"
      type="button"
      onClick={toggleMute}
      onMouseEnter={() => setMode('interactive')}
      onMouseLeave={() => setMode('default')}
      onFocus={() => setMode('interactive')}
      onBlur={() => setMode('default')}
    >
      <span className="audio-toggle__icon">{isMuted ? '🔇' : '🔊'}</span>
      <span className="audio-toggle__label">{isMuted ? 'Enable sound' : 'Mute sound'}</span>
    </button>
  )
}
