import { useDataContext } from "../data/use-data-context";
import './subs-control.scss';

export const SubsControl = () => {
  const { video } = useDataContext();

  const clickSlider = () => {
    if (video.showSub) {
      video.stopShowSub();
    } else {
      video.startShowSub();
    }
  }

  return (
    <div className="subsControl">
      <label>Subtitles</label>
      <span className="slider" onClick={clickSlider}>
        <span className={`on ${video.showSub ? 'selected' : ''}`}>On</span>
        <span className={`off ${!video.showSub ? 'selected' : ''}`}>Off</span>
      </span>
    </div>
  );
}