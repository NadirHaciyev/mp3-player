import secondsToTime from "../utils";
import CustomRange from "./CustomRange";
import { Icon } from "../Icons";

function FullScreen({ list, setList, mp3List, controls, state, toggle }) {
  return (
    <div className="Fullscreen">
      <div className="Audio-player__left">
        <img src={list.img} />
        <div>
          <h6>{list.name}</h6>
          <span>{list.singer}</span>
        </div>
      </div>
      <div className="Audio-player__center">
        <div className="bottom">
          <span className="currentTime">{secondsToTime(state?.time)}</span>
          <div className="range">
            {/* {audio} */}
            <CustomRange
              controls={controls}
              step={0.1}
              min={0}
              max={state?.duration || 1}
              value={state?.time}
              onChange={(value) => controls.seek(value)}
            />
          </div>
          <span className="remaningTime">{secondsToTime(state?.duration)}</span>
        </div>
        <div className="top">
          <ul>
            <li>
              <Icon name="shuffle" />
            </li>
            <li
              onClick={() =>
                setList(mp3List[list.id === 0 ? list.id : list.id - 1])
              }
            >
              <Icon name="previous" />
            </li>
            <li onClick={controls[state?.playing ? "pause" : "play"]}>
              {!state?.playing ? <Icon name="play" /> : <Icon name="pause" />}
            </li>
            <li
              onClick={() =>
                setList(mp3List[list.id === 2 ? list.id : list.id + 1])
              }
            >
              <Icon name="next" />
            </li>
            <li>
              <Icon name="repeat" />
            </li>
          </ul>
          <ul>
            <li>
              <Icon name="volume" />
            </li>
            <li className="range" style={{ width: 93 }}>
              <CustomRange
                step={0.01}
                min={0}
                max={1}
                value={state?.volume}
                onChange={(value) => controls.volume(value)}
              />
            </li>
            <li
              onClick={() => toggle()}
              style={{ background: "black", color: "#b3b3b3" }}
            >
              <Icon name="fullScreen" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FullScreen;
