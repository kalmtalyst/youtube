import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videoList/Videolist";

function App() {
  const [videoItems, setVideoItems] = useState([]);

  // const videos = () => {
  //   setVideoItems(videoItems);
  // };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyAhRfKGwRdp6KYcyURVSQT4iHzpFDrfEn4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
