import React from "react";
import "./videoview.css";

function VideoView(props) {
  const clickedChannel = props.video.snippet.channelTitle;
  return (
    <div className="viewBox">
      {clickedChannel}
      <div className="playVideoBox">
        <iframe
          id="player"
          type="text/html"
          className="videoFrame"
          title="비디오플레이어"
          src={`http://www.youtube.com/embed/${props.video.id}`}
        ></iframe>
      </div>
      <div className="txtContainer">
        <h2>{props.video.snippet.title}</h2>
        <h3>{props.video.snippet.channelTitle}</h3>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoView;
