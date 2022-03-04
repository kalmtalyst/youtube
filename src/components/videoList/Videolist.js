import React from "react";
import Video from "../video/Video";
import "./videoList.css";
import { Link } from "react-router-dom";

function VideoList({ videoItems, onVideoClick, display }) {
  return (
    <div>
      <ul className="videoList">
        {videoItems.map((videoItem) => (
          <Video
            videoItem={videoItem}
            key={videoItem.etag}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
