import React from "react";
import "./videoview.css";

function VideoView({ video }) {
  return (
    <div className="viewBox">
      <div className="playVideoBox">
        <iframe
          id="player"
          type="text/html"
          className="videoFrame"
          title="비디오플레이어"
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
      </div>
      <div className="txtContainer">
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoView;
