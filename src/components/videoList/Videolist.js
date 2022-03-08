import React from "react";
import Video from "../video/Video";
import "./videoList.css";

function VideoList({ videoItems, onVideoClick, display, search }) {
  return (
    <div>
      <ul className="videoList">
        {videoItems.map((videoItem) => (
          <Video
            videoItem={videoItem}
            key={videoItem.etag}
            onVideoClick={onVideoClick}
            display={display}
            search={search}
          />
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
