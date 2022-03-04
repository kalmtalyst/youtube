import React from "react";
import "./menuBar.css";
import { Link } from "react-router-dom";

function MenuBar(params) {
  return (
    <div className="menuBarArea">
      <Link to="">
        <button className="menuBtn">
          <i class="fa fas fa-home"></i>홈
        </button>
      </Link>
      <button className="menuBtn">
        <i class="fa fas fa-fire"></i>
        인기
      </button>
      <button className="menuBtn">
        <i class="fa fa-solid fa-globe"></i>
        탐색
      </button>
      <button className="menuBtn">
        <i class="fa fas fa-youtube"></i>
        구독
      </button>
      <button className="menuBtn">
        <i class="fas fa-box"></i>
        보관함
      </button>
    </div>
  );
}

export default MenuBar;
