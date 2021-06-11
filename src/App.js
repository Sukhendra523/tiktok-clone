import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // document.body.requestFullscreen();
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={description}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
