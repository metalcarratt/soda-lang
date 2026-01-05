import type { UseVideoType } from "./use-video";

export const VideoPanel = ({video}: {video: UseVideoType}) => {
  return (
    <video className="videoElem" width="640" height="360" src={video.path} ref={video.videoRef} onEnded={video.videoEnded} >
      Your browser does not support the video tag.
    </video>
  );
}