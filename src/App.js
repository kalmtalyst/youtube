import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "./components/videoList/Videolist";
import SearchBar from "./components/searchBar/SearchBar";
import VideoView from "./components/videoview/VideoView";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video);
    // 비디오가 받아지면 setSelectView 함수로 state 값 업데이트
  };
  const search = (searchValueTxt) => {
    setSelectView(null);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideoItems(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=kr&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar searchResult={search} />
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
            element={<Search />}
            videoItems={videoItems}
            selectView={selectView}
            onVideoClick={selectVideo}
          />
          <Route
            path="/watch"
            element={<Watch />}
            videoItems={videoItems}
            selectView={selectView}
            onVideoClick={selectVideo}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
