import React, { Component } from "react";
import PropTypes from "prop-types";

const Videolistitem = ({ video, onvideoselect }) => {
  const ImgUrl = video.snippet.thumbnails.default.url;

  return (
    <div>
      <ul onClick={() => onvideoselect(video)}>
        <img src={ImgUrl} />
        <div>{video.snippet.title}</div>
      </ul>
    </div>
  );
};

export default Videolistitem;
