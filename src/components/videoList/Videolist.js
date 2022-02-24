import React from "react";
import Video from "../video/Video";

function VideoList(props) {
  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {props.videoItems.map((videoItem) => {
          return <Video videoItem={videoItem} key={videoItem.id} />;
        })}
      </ul>
    </div>
  );
}

export default VideoList;
