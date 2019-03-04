import React, { Component } from "react";
import Searchbar from "../Component/Search-bar";
import VideoList from "./VideoList";
import axios from "axios";
import VideoDetail from "../Component/Video-detail";
import Video from "../Component/Video";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=aa8f33b1fde34e9fa0e5d2b976d95f20";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: {}, currentMovie: {} };
  }

  componentWillMount() {
    this.initMovies();
  }
  initMovies() {
    axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(response => {
        this.setState(
          {
            moviesList: response.data.results.slice(1, 6),
            currentMovie: response.data.results[0]
          },
          () => {
            this.applyVideoToCurrentMovie();
          }
        );
      });
  }
  applyVideoToCurrentMovie = () => {
    axios
      .get(
        `${API_END_POINT}movie/${
          this.state.currentMovie.id
        }?${API_KEY}&append_to_response=videos&include_adult=false`
      )

      .then(response => {
        console.log("", response);
        const youtubeKey = response.data.videos.results[0].key;
        let newCurrentMovieState = this.state.currentMovie;
        newCurrentMovieState.videoId = youtubeKey;
        this.setState({ currentMovie: newCurrentMovieState });
        console.log("", newCurrentMovieState);
      });
  };
  render() {
    const renderVideoList = () => {
      if (this.state.moviesList.length >= 5) {
        return <VideoList moviesList={this.state.moviesList} />;
      }
    };
    return (
      <div>
      <div className="searchbar"><Searchbar  /></div>
        
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>

          <div className="col-md-4">{renderVideoList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
