import React from "react";

function Body({ setList, mp3List }) {
  return (
    <div className="Body">
      <div className="card">
        <img
          onClick={(e) => setList(mp3List[0])}
          src={mp3List[0].img}
        />
        <h6>{mp3List[0].name}</h6>
        <span>{mp3List[0].singer}</span>
      </div>
      <div className="card">
        <img
          onClick={(e) => setList(mp3List[1])}
          src={mp3List[1].img}
        />
        <h6>{mp3List[1].name}</h6>
        <span>{mp3List[1].singer}</span>
      </div>
      <div className="card">
        <img
          onClick={(e) => setList(mp3List[2])}
          src={mp3List[2].img}
        />
        <h6>{mp3List[2].name}</h6>
        <span>{mp3List[2].singer}</span>
      </div>
    </div>
  );
}

export default Body;
