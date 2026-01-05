import { useEffect, useState } from "react";
import { useVideoControls } from "./video-control";
import { VideoPanel } from "./video-panel";
import { useDataContext } from "../data/use-data-context";
import './video.scss';

export const VideoPage = () => {
  const { video } = useDataContext();
  const { PlayButton, PauseButton, X15SlowerButton, X20SlowerButton, XNormalSpeedButton, ShowSubsButton, StopShowSubsButton } = useVideoControls(video);
    
  const [overlayWidth, setOverlayWidth] = useState('100%');
  
  useEffect(() => {
    if (video.videoRef.current !== null) {
      setOverlayWidth(`${video.videoRef.current.offsetWidth}px`);
      video.videoRef.current.addEventListener('timeupdate', video.handleTimeUpdate);
    } else {
      setOverlayWidth('100%');
    }
    
    return () => {
      video.videoRef.current?.removeEventListener('timeupdate', video.handleTimeUpdate);
    };

  }, [video.path]);

  return (
    <>
      <VideoPanel video={video} />
      <div className="overlay" style={{width: overlayWidth}}>
        { video.showSub && video.subtitle && <p>{video.subtitle}</p>}
        <div className="actions">
          { !video.isPlaying
            ? <PlayButton />
            : <PauseButton />
          }
          <XNormalSpeedButton/>
          <X15SlowerButton />
          <X20SlowerButton />
          { video.showSub ? <StopShowSubsButton /> : <ShowSubsButton />}
        </div>
      </div>
    </>
  )
}