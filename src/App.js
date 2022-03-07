import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/searchBar/SearchBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

let defaultVideos = JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem("selectedWatch")) || null;

function App({ youtube }) {
  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video);
    // 비디오가 받아지면 setSelectView 함수로 state 값 업데이트
    selectedWatch = video;
    // console.log(video);
  };

  const search = (searchValueTxt) => {
    setSelectView(null); // 검색시 뷰가 아닌 목록만 반환되도록 null로 업데이트
    youtube
      .searchResult(searchValueTxt)
      .then((videos) => setVideoItems(videos));
    // youtube.mostPopular().then((videos) => setVideoItems(videos));

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   )
    //   .then((items) => setVideoItems(items))
    //   .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => {
      setVideoItems(videos);
      defaultVideos = videos;
    });

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=kr&key=${API_KEY}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideoItems(result.items))
    //   .catch((error) => console.log("error", error));
  }, []);

  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  useEffect(() => {
    sessionStorage.setItem("defaultVideos", JSON.stringify(defaultVideos));
    sessionStorage.setItem("selectedWatch", JSON.stringify(selectedWatch));
  }, [videoItems, selectView]);

  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar searchResult={search} clickLogo={clickLogo} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videoItems={videoItems}
                selectView={selectView}
                onVideoClick={selectVideo}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                videoItems={videoItems}
                selectView={selectView}
                onVideoClick={selectVideo}
              />
            }
          />
          <Route
            path="/watch"
            element={
              <Watch
                videoItems={videoItems}
                selectView={selectView}
                onVideoClick={selectVideo}
                selectedWatch={selectedWatch}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
