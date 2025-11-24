import { useRef, useState } from 'react';

export const useVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const changeVideo = (newVideo: string) => {
    console.log('change video to ', newVideo);
    setPath(newVideo);
    // setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      console.log('change src');
      video.src = newVideo;
      console.log('load');
      video.load();
      video.pause();
      // console.log('play');
      // video.play();
    }
  };

  const videoEnded = () => {
    setIsPlaying(false);
  };

  const newVideo = (videoName: string) => {
    changeVideo(videoName);
    setIsPlaying(false);
  };

  const skipToEnd = () => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  const setSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return {
    videoEnded,
    newVideo,
    skipToEnd,
    isPlaying,
    path,
    videoRef,
    setPath,
    setSpeed,
    pause,
    play,
  };
};

export type UseVideoType = ReturnType<typeof useVideo>;
