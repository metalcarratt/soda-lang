import { Transcript } from "../transcript/transcript";
import { VideoPage } from "../video/video-page";
import { VocabPage } from "../vocab/vocab-page";
import { useDataContext } from "../data/use-data-context";
import { LessonMenu } from "../menu/lesson-menu";

export const Panel = () => {
  const {panel, lesson, vocab} = useDataContext();
  console.log('load panel');

  if (panel.panel === 'video') {
    return <VideoPage />
  }
  if (panel.panel === 'video-subs') {
    return <VideoPage showSubs={true} />
  }
  if (panel.panel === 'transcript' && lesson) {
    return <Transcript />
  }
  if (panel.panel === 'vocab' && vocab) {
    return <VocabPage />
  }
  return (<LessonMenu />);
}