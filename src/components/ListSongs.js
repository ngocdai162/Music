import React, { useContext, useState, useEffect } from "react";
import {Songs} from "../Context";

export default function ListSongs () {
    const {dataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(1);
    const handlePlay = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong)
    }

    useEffect(() => {
      setIdSong(song.id)
    }, [song])
    return (
         <div className = "listSongs">
             <h2>Danh sách bài hát </h2>
             <ul>
                 {
                   dataSongs.map(
                         Song =>
                        <li key = {Song.id}
                            onClick = {() => {
                              handlePlay(Song.id)
                            }}
                        >
                            <p> {Song.name}</p>
                        </li>
                   )
                 }
                 
             </ul>
         </div>
    )
}
