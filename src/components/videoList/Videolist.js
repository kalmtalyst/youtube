import React from "react";
import Video from "../video/Video";
import "./videoList.css";

function VideoList({ videoItems, onVideoClick, display }) {
  return (
    <div>
      <ul className="videoList">
        {videoItems.map((videoItem) => {
          return (
            <Video
              videoItem={videoItem}
              key={videoItem.etag}
              onVideoClick={onVideoClick}
              display={display}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default VideoList;
