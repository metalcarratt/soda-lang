import type { UseVideoType } from "./use-video";

export const VideoPanel = ({video}: {video: UseVideoType}) => {
  const videoSrc = `${import.meta.env.BASE_URL}${video.path}`;

  return (
    <video className="videoElem" width="640" height="360" ref={video.videoRef} onEnded={video.videoEnded}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}