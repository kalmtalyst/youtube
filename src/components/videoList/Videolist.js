import React from "react";
import Video from "../video/Video";
import "./videoList.css";

function VideoList(props) {
  return (
    <div>
      <ul className="videoList">
        {props.videoItems.map((videoItem) => {
          return <Video videoItem={videoItem} key={videoItem.etag} />;
        })}
      </ul>
    </div>
  );
}

export default VideoList;
