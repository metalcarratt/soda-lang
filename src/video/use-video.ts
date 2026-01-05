import { useRef, useState } from 'react';
import type { LessonType } from '../lesson/lessons';

const videoBase = `${import.meta.env.BASE_URL}videos`;

export const useVideo = (lesson?: LessonType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const [subtitle, setSubtitle] = useState<string | undefined>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSub, setShowSub] = useState(false);

  const changeVideo = (newVideo: string) => {
    const videoSrc = `${videoBase}/${newVideo}`;
    console.log('change video to ', videoSrc);
    setPath(videoSrc);
    const video = videoRef.current;
    if (video) {
      console.log('change src');
      video.src = videoSrc;
      console.log('load');
      video.load();
      video.pause();
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

    setSubtitle(
      active ? active.lines.replace(/(?<=\p{L})[.:](?=\p{L})/gu, '') : ''
    );
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

  const startShowSub = () => setShowSub(true);
  const stopShowSub = () => setShowSub(false);

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
    showSub,
    startShowSub,
    stopShowSub,
  };
};

export type UseVideoType = ReturnType<typeof useVideo>;
