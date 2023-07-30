import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hook/VideosHook";
import { useCallback } from "react";
import moreVideos from '../data/moredata';

function VideosList({onEditVideo }) {
  const videos = useVideos();


 const play= useCallback(() => console.log("Playing..."),[])
 const pause= useCallback(() => console.log("Paused..."),[])
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          // dispatch={dispatch}
          onEditVideo={onEditVideo}
        >
          <PlayButton
            onPlay={play}
            onPause={pause}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideosList;
