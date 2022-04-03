import { useEffect, useState, useRef } from "react";
import { Icon } from "../Icons";
import { useAudio, useFullscreen, useToggle } from "react-use";
import secondsToTime from "../utils";
import CustomRange from "./CustomRange";
import FullScreen from "./Fullsreen";
function AudioPlayer({ setList, list, mp3List }) {
  const [audio, state, controls, ref] = useAudio({
    src: `${list.source}`,
    autoPlay: true
  });

  const fsRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false)
  });


  
  return (
    <div className="Audio-player">
      <div className="Audio-player__left">
        <img src={list.img} />
        <div>
          <h6>{list.name}</h6>
          <span>{list.singer}</span>
        </div>
        <li>
          <Icon name="hearth" />
        </li>
        <li>
          <Icon name="pictureInPicture" />
        </li>
      </div>
      <div className="Audio-player__center">
        <div className="top">
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
        </div>
        <div className="bottom">
          <span className="currentTime">{secondsToTime(state?.time)}</span>
          <div className="range">
            {audio}
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
      </div>
      <div className="Audio-player__right">
        <li>
          <Icon name="lyrics" />
        </li>
        <li>
          <Icon name="queue" />
        </li>
        <li>
          <Icon name="connectDevice" />
        </li>
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
        <li onClick={() => toggle()}>
          <Icon name="fullScreen" />
        </li>
      </div>
      <div ref={fsRef}>
        {isFullscreen && (
          <FullScreen
            list={list}
            setList={setList}
            mp3List={mp3List}
            state={state}
            controls={controls}
            toggle={toggle}
          />
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
