import React from "react";
import "./menuBar.css";

function MenuBar(params) {
  return (
    <div className="menuberArea">
      <button className="menuBtn">
        <i class="fa fas fa-home">홈</i>
      </button>
      <button className="menuBtn">
        <i class="fa fas fa-fire">인기</i>
      </button>
      <button className="menuBtn">
        <i class="fa fa-solid fa-globe">탐색</i>
      </button>
      <button className="menuBtn">
        <i class="fa fas fa-youtube">구독</i>
      </button>
      <button className="menuBtn">
        <i class="fas fa-box">보관함</i>
      </button>
    </div>
  );
}

export default MenuBar;
