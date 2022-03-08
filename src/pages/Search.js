import React from "react";
import "../App.css";
import MenuBar from "../components/menuBar/MenuBar";
import VideoList from "../components/videoList/Videolist";
import VideoView from "../components/videoview/VideoView";

const Search = ({ onVideoClick, selectView, videoItems }) => {
  return (
    <div className="contents-wrap">
      <div className="sideBar">
        <MenuBar />
      </div>
      <div className="contents">
        {selectView && (
          <div className="view">
            <VideoView video={selectView} />
          </div>
        )}
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={onVideoClick}
            display="rowlist"
            search={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
