import React from "react";
import "./video.css";
import { Link } from "react-router-dom";

function Video({ videoItem, onVideoClick, display }) {
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass}`}>
      <Link to="/watch">
        <div
          className="video"
          onClick={() => {
            onVideoClick(videoItem);
          }}
        >
          <img
            className="thumbImg"
            src={videoItem.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <div className="titleData">
            <div className="channelImg">
              <img
                className="channelImgThumb"
                src={videoItem.snippet.thumbnails.default.url}
                alt="video thumbnail"
              />
            </div>
            <div>
              <p className="title">{videoItem.snippet.title}</p>
              <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
              <p className="channelTitle">
                조회수 {videoItem.statistics.viewCount}
              </p>
              <p className="channelTitle">
                좋아요 {videoItem.statistics.likeCount}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Video;
