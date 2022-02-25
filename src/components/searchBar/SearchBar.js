import React from "react";
import "./searchBar.css";
import { useRef } from "react";

function SearchBar(props) {
  const searchRef = useRef();

  // 공통 함수
  const searchFnc = () => {
    console.log("entered");
    const value = searchRef.current.value;
    props.searchResult(value);
  };

  const searchClick = () => {
    console.log("cliked");
    searchFnc();
  };

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
        <h1>
          <img src="/imgs/logo.png" alt="youtube" className="logoImg" />
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
      </div>
      <div className="topMenuArea">
        <button className="gridMenuBtn">
          <img src="/imgs/gridmenuicon.png" alt="top menu" />
        </button>
      </div>
      {/* right-side */}
    </div>
  );
}

export default SearchBar;
