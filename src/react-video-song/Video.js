import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = function () {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      playing={false}
      volume={0.5}
    />
  );
};

export default Video;
