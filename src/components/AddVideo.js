// import VideoDispatchContext from "../context/VideoDispatchContext";
import useDispatch from "../hook/VideoDispatchHook";
import "./AddVideo.css";
import {  forwardRef, useEffect, useState ,useRef, useImperativeHandle} from "react";

let initialState= {
    time: "1 year ago",
    channel: "Coder Dost",
    verified: true,
    title: '',
    views: ''
  }
const AddVideo = forwardRef(function AddVideo({editableVideo },ref) {
  
  const [video, setVideo] = useState(initialState);

  const dispatch= useDispatch()
  const iRef = useRef(null);

  useImperativeHandle(ref,()=>{
    return{
      jumpTo(){
        iRef.current.focus()
      }
    }

  },[])


  

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({ type: "UPDATE", payload: video });
    }
    else{
      dispatch({ type: "ADD", payload: video });
      
    }
    
    setVideo(initialState);
  }

  function changeHandler(e) {
    // console.log(e.target.name, e.target.value);
    setVideo( {...video, [e.target.name]:e.target.value} );
    // console.log(video);
  }

  useEffect(()=>{
    editableVideo && setVideo(editableVideo)
  },[editableVideo])



  return (
    <form>
      <input
      ref={iRef}
         type="text"
        name="title"
        onChange={changeHandler}
        placeholder="title"
        value= {video.title}
      />
      <input
        type="text"
        name="views"
        onChange={changeHandler}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>{editableVideo?"Update":"Add"}</button>
    </form>
  );
})

export default AddVideo;
