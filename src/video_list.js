import React, { Component } from "react";
import PropTypes from "prop-types";
import Videolistitem from "./video_list_item";

const Videolist = props => {
  const videoItems = props.videos.map(video => {
    return (
      <Videolistitem
        onvideoselect={props.onvideoselect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div>
      <ul className="col-md-4 list-group">{videoItems}</ul>
    </div>
  );
};

export default Videolist;
