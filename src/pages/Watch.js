import React from "react";
import "../App.css";
import MenuBar from "../components/menuBar/MenuBar";
import VideoList from "../components/videoList/Videolist";
import VideoView from "../components/videoview/VideoView";

const Watch = ({ onVideoClick, selectView, videoItems, selectedWatch }) => {
  return (
    <div className="contents">
      <div className="view">
        <VideoView video={selectedWatch} />
      </div>

      <div className="list">
        <VideoList
          videoItems={videoItems}
          onVideoClick={onVideoClick}
          display="rowlist"
        />
      </div>
    </div>
  );
};

export default Watch;
