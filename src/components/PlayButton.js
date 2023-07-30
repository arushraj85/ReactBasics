import { useContext,memo } from "react";
import "./PlayButton.css";
import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const PlayButton= memo(function PlayButton({ children, onPlay,onPause }) {
  console.log('render playbutton')
 const theme = useContext(ThemeContext)

  const  [playing,setPlaying] =useState(false);
  function handleClick(e) {
     e.stopPropagation();
    playing? onPause() :onPlay();
    setPlaying(!playing);
  }
  return <button className={theme} onClick={handleClick}>{children} {playing ?'⏸️' :'🤾‍♀️'}</button>;
})
export default PlayButton;
