import { useEffect, useState } from "react";
import { useVideoControls } from "./video-control";
import { VideoPanel } from "./video-panel";
import { useDataContext } from "../data/use-data-context";
import './video.scss';

export const VideoPage = () => {
  const { video } = useDataContext();
  const { PlayButton, PauseButton, X15SlowerButton, X20SlowerButton, XNormalSpeedButton, SkipButton } = useVideoControls(video);
    
    const [overlayWidth, setOverlayWidth] = useState('100%');
  
    useEffect(() => {
      if (video.videoRef.current !== null) {
        setOverlayWidth(`${video.videoRef.current.offsetWidth}px`);
      } else {
        setOverlayWidth('100%');
      }
    }, [video.path])
  
    return (
      <>
        <VideoPanel video={video} />
        <div className="overlay" style={{width: overlayWidth}}>
            {
              !video.isPlaying && <div className="actions">
                <PlayButton />
                <XNormalSpeedButton/>
                <X15SlowerButton />
                <X20SlowerButton />
              </div>
            }
            {video.isPlaying && <div className="actions">
              <PauseButton />
              <XNormalSpeedButton/>
              <X15SlowerButton />
              <X20SlowerButton />
              <SkipButton />
            </div>}
          </div>
      </>
    )
}