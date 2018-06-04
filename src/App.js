import React, { Component } from "react";
import Search from "./searchbar";
import Videolist from "./video_list";
import "./App.css";
import YTSearch from "youtube-api-search";
import Videodetail from "./video_detail";
const API_KEY = "AIzaSyAp8NSnHbrlyxJEbumQm6bsChw2Bvpfsm8";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedvideo: null
    };
    this.videosearch("serach");
  }
  videosearch(search) {
    YTSearch({ key: API_KEY, term: search }, data => {
      this.setState({
        videos: data,
        selectedvideo: data[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Search onsearchtermchange={term => this.videosearch(term)} />
        <Videodetail video={this.state.selectedvideo} />
        <Videolist
          onvideoselect={selectedvideo =>
            this.setState({
              selectedvideo
            })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
