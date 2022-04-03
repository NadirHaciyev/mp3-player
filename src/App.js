import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import { Icon } from "./Icons";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const mp3List = [
    {
      id: 0,
      singer: "Alim Qasimov",
      name: "Xatirədir",
      source: "../../assets/Alim Qasımov - Xatirədir.mp3",
      img: "https://i.scdn.co/image/ab67616d00004851fbff62dfcc8de3e4c6e21a2a"
    },
    {
      id: 1,
      singer: "Maron 5",
      name: "Memories",
      source: "../../assets/Maroon 5 - Memories.mp3",
      img: "https://i.scdn.co/image/ab67616d00001e0286a8ab515de4b7aef28cd631"
    },
    {
      id: 2,
      singer: "Jamala",
      name: "1944",
      source: "../../assets/Jamala - 1944.mp3",
      img: "https://i.scdn.co/image/ab67616d0000485189dd8f620c8d9185636329fe"
    }
  ];

  const [list, setList] = useState({
    id: 0,
    singer: "Alim Qasimov",
    name: "Xatirədir",
    source: "../../assets/Alim Qasımov - Xatirədir.mp3",
    img: "https://i.scdn.co/image/ab67616d00004851fbff62dfcc8de3e4c6e21a2a"
  });

  return (
    <div className="App">
      <Body setList={setList} mp3List={mp3List} />
      <AudioPlayer setList={setList} list={list} mp3List={mp3List} />
    </div>
  );
}

export default App;
