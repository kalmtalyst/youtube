import React from "react";
import "../App.css";
import MenuBar from "../components/menuBar/MenuBar";
import VideoList from "../components/videoList/Videolist";
import VideoView from "../components/videoview/VideoView";

const Watch = ({ onVideoClick, selectView, videoItems }) => {
  return (
    <div className="contents">
      <div className="sideBar">
        <MenuBar />
      </div>
      {selectView && (
        <div className="view">
          <VideoView video={selectView} />
        </div>
      )}
      <div className="list">
        <VideoList
          videoItems={videoItems}
          onVideoClick={onVideoClick}
          display={selectView ? "rowlist" : "columlist"}
        />
      </div>
    </div>
  );
};

export default Watch;
