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

  const ShowSubsButton = () => {
    return <VideoControl title="Subs On" action={() => video.startShowSub()}/>
  }

  const StopShowSubsButton = () => {
    return <VideoControl title="Subs Off" action={() => video.stopShowSub()}/>
  }

  return {
    PlayButton,
    PauseButton,
    ShowSubsButton,
    StopShowSubsButton
  }
}