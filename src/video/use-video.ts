import { useRef, useState } from 'react';
import type { LessonType } from '../lesson/lessons';

const videoBase = `${import.meta.env.BASE_URL}videos`;

export const useVideo = (lesson?: LessonType) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const [subtitle, setSubtitle] = useState<string | undefined>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSub, setShowSub] = useState(() => {
    const stored = localStorage.getItem('showSub');
    return stored !== null ? Boolean(JSON.parse(stored)) : false;
  });
  const [speed, updateSpeed] = useState(() => {
    const stored = localStorage.getItem('videoSpeed');
    return stored !== null ? Number(JSON.parse(stored)) : 1;
  });

  const changeVideo = (newVideo: string) => {
    const videoSrc = `${videoBase}/${newVideo}`;
    setPath(videoSrc);
    const video = videoRef.current;
    if (video) {
      video.src = videoSrc;
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
    updateSpeed(speed);
    localStorage.setItem('videoSpeed', JSON.stringify(speed));
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

  const stop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const play = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const startShowSub = () => {
    localStorage.setItem('showSub', JSON.stringify(true));
    setShowSub(true);
  };
  const stopShowSub = () => {
    localStorage.setItem('showSub', JSON.stringify(false));
    setShowSub(false);
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
    speed,
    pause,
    play,
    stop,
    handleTimeUpdate,
    subtitle,
    showSub,
    startShowSub,
    stopShowSub,
  };
};

export type UseVideoType = ReturnType<typeof useVideo>;
