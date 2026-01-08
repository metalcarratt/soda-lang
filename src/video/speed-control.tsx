import { useDataContext } from "../data/use-data-context";
import './speed-control.scss';

export const SpeedControl = () => {
  const { video } = useDataContext();

  return (
    <div className="speedControl">
      <label>Playback Speed</label>
    <div className="dial">
      <span
        className={`topLeft ${video.speed === 1 ? 'selected' : ''}`}
        onClick={() => video.setSpeed(1)}
      >
        ×1
      </span>
      
      <span 
        className={`topRight ${video.speed === 0.666 ? 'selected' : ''}`}
        onClick={() => video.setSpeed(0.666)}
      >
        ×¾
      </span>
      
      <span 
        className={`bottomLeft ${video.speed === 0.5 ? 'selected' : ''}`}
        onClick={() => video.setSpeed(0.5)}
      >
        ×½
      </span>
      
      <span className="bottomRight void"></span>
    </div>
    </div>
  );
}