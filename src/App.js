import "./App.css";
import {useContext, useReducer, useRef, useState } from "react";
import videosDb from "./data/data";
import AddVideo from "./components/AddVideo";
import VideosList from "./components/VideosList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import FormList from "./component2/formList";
import Counter from "./components/Counter";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");
  const InputRef =useRef(null)

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  };

  const [videos, dispatch] = useReducer(videoReducer, videosDb);

  // const themeContext = useContext(ThemeContext);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
    console.log(id, "edit");
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
         <button onClick={()=>{InputRef.current.jumpTo()}}>
          Focus</button> 
          <button
            onClick={() =>
              setMode(mode === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            {`Change mode to ${mode === "darkMode" ? "LighMode" : "DarkMode"}`}{" "}
          </button>
          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <AddVideo
              // dispatch={dispatch}
              ref={InputRef}
              editableVideo={editableVideo}
            ></AddVideo>
            <VideosList
              // dispatch={dispatch}
              onEditVideo={editVideo}
              // videos={videos}
            ></VideosList>
            <div style={{ clear: "both" }}> </div>

           {/* <Counter></Counter> */}
            {/* <FormList></FormList> */}

          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
