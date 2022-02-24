import React from "react";

function Video(props) {
  return (
    <div>
      <li>{props.videoItem.snippet.channelTitle}</li>
    </div>
  );
}

export default Video;
