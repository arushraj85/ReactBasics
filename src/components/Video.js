import { useContext, useEffect } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useDispatch from "../hook/VideoDispatchHook";

function Video({
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  id,
  children,
  onEditVideo
}) {

  const dispatch = useDispatch();

  // 
  const theme=useContext(ThemeContext);

  function deleteVideoHandler(){
    dispatch({ type: "DELETE", payload: id });
    // console.log(id) 
  }

  function editVideoHandler(){
    onEditVideo(id);
  }
  console.log("video render");
  return (
    <>
      <div className={`container ${theme}`}>
        <button className="close" onClick={deleteVideoHandler}>
          Delete
        </button>
        <button className="edit" onClick={editVideoHandler}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title} </div>
        <div className="channel">
          {channel} {verified ? "✅" : null}
        </div>
        <div className="views">
          {views} views <span></span> {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;
