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
        ⅔
      </span>
      
      <span 
        className={`bottomLeft ${video.speed === 1.5 ? 'selected' : ''}`}
        onClick={() => video.setSpeed(1.5)}
      >
        1½
      </span>
      
      <span
        className={`bottomRight ${video.speed === 0.5 ? 'selected' : ''}`}
        onClick={() => video.setSpeed(0.5)}
      >
        ½
      </span>
    </div>
    </div>
  );
}