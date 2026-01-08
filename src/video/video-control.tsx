import type { UseVideoType } from "./use-video";

export const useVideoControls = (video: UseVideoType) => {
  const PlayButton = () => {
    return <button onClick={() => video.play()}>▶</button>
  }

  const PauseButton = () => {
    return <button onClick={() => video.pause()}>⏸︎</button>
  }

  const StopButton = () => {
    return <button onClick={() => video.stop()}>⏹</button>
  }

  return {
    PlayButton,
    PauseButton,
    StopButton
  }
}