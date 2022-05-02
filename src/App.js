import { useState } from 'react';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import ListSongs from './components/ListSongs';
import dataSongs from "./data/song.json";
import {Songs} from "./Context";
import './App.css';
import "./responsive.css";
function App() {
  const [song, setSong] = useState(dataSongs[0])
  const handleSetSong = (idSong) => {
    const song = dataSongs.find(song => song.id === idSong)
    if(!song) {
      setSong(dataSongs[0])
    }
    else
           setSong(song)
  }
 
  return (
    <div className="App">
      <Songs.Provider value ={{dataSongs, song, handleSetSong}}>
         <Navbar/>
         <div className = "container">
             <Detail/>
             <ListSongs/>
         </div>
      </Songs.Provider>
      
    </div>
  );
}

export default App;
