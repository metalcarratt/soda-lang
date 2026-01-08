import { useEffect, useState } from "react";
import { useVideoControls } from "./video-control";
import { VideoPanel } from "./video-panel";
import { useDataContext } from "../data/use-data-context";
import './video.scss';
import { SpeedControl } from "./speed-control";
import { SubsControl } from "./subs-control";

export const VideoPage = () => {
  const { video } = useDataContext();
  const { PlayButton, PauseButton, StopButton } = useVideoControls(video);
    
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
        { video.showSub && video.subtitle && <p className="subs">{video.subtitle}</p>}
        <div className="actions">
          { !video.isPlaying
            ? <PlayButton />
            : <>
                <PauseButton />
                <StopButton />
              </>
          }
          <SpeedControl />
          <SubsControl />
        </div>
      </div>
    </>
  )
}