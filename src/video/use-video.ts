import { useRef, useState } from 'react';
import type { LessonType } from '../lesson/lessons';

export const useVideo = (lesson?: LessonType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const [subtitle, setSubtitle] = useState<string | undefined>();
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

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime;

    // Find the subtitle with the greatest timing <= currentTime
    const active = lesson?.transcript
      ?.filter((s) => s.timing !== undefined && s.timing <= currentTime)
      .sort((a, b) => b.timing! - a.timing!)[0];

    setSubtitle(active ? active.lines : '');
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
    handleTimeUpdate,
    subtitle,
  };
};

export type UseVideoType = ReturnType<typeof useVideo>;
