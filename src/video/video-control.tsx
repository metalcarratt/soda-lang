import type { UseVideoType } from "./use-video";

type VideoControlType = {
  title: string,
  action: () => void
}

export const VideoControl = ({title, action}: VideoControlType) => {
  return (
    <button onClick={action}>{title}</button>
  );
}

export const useVideoControls = (video: UseVideoType) => {
  const PlayButton = () => {
    return <VideoControl title="▶" action={() => video.play()}/>
  }

  const PauseButton = () => {
    return <VideoControl title="⏸︎" action={() => video.pause()}/>
  }

  const XNormalSpeedButton = () => {
    return <VideoControl title="x1.0" action={() => video.setSpeed(1)}/>
  }

  const X15SlowerButton = () => {
    return <VideoControl title="x1.5" action={() => video.setSpeed(0.666)}/>
  }

  const X20SlowerButton = () => {
    return <VideoControl title="x2.0" action={() => video.setSpeed(0.5)}/>
  }

  const SkipButton = () => {
    return <VideoControl title="Skip" action={() => video.skipToEnd()}/>
  }

  return {
    PlayButton,
    PauseButton,
    XNormalSpeedButton,
    X15SlowerButton,
    X20SlowerButton,
    SkipButton
  }
}