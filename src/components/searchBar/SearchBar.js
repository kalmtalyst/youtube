import React from "react";
import "./searchBar.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchBar({ searchResult, clickLogo }) {
  const searchRef = useRef();
  let navigate = useNavigate();

  // 공통 함수
  const searchFnc = () => {
    console.log("entered");
    const value = searchRef.current.value;
    searchResult(value);
    navigate(`/search?search_query=${value}`);
  };

  const searchClick = () => {
    console.log("cliked");
    searchFnc();
  };

  // 서치박스(인풋)에 enter 시 호출될 함수
  const searchEnter = (e) => {
    if (e.key === "Enter") {
      searchFnc();
    } else {
      console.log("the key is not an enter");
    }
  };
  return (
    <div className="searchArea">
      <div className="logoArea">
        <button className="leftMenuBtn">
          <i class="fa fa-solid fa-bars"></i>
        </button>
        <h1>
          <Link to="/">
            <img
              src="/imgs/logo.png"
              alt="youtube"
              className="logoImg"
              onClick={clickLogo}
            />
          </Link>
        </h1>
      </div>
      {/* left-side */}
      <div className="searchInputArea">
        <input
          type="search"
          placeholder="검색"
          className="searchInput"
          onKeyPress={searchEnter}
          ref={searchRef}
        />
        <button className="searchBtn" onClick={searchClick}>
          <img src="/imgs/searchicon.png" alt="search" />
        </button>
        <button className="micBtn">
          <i className="fa fa-solid fa-microphone"></i>
        </button>
      </div>
      {/* middle */}
      <div className="topMenuArea">
        <button className="rightMenuBtn">
          <i className="fa fa-solid fa-grip-vertical"></i>
        </button>
        <button className="rightMenuBtn">
          <i className="fa-solid fa-circle-ellipsis-vertical"></i>
        </button>
        <button className="rightMenuBtn">
          <i className="fa fa-solid fa-user"></i>
        </button>
      </div>
      {/* right-side */}
    </div>
  );
}

export default SearchBar;
