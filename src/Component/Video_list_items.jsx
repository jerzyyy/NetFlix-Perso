import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const VideoListItem = ({ movies }) => {
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left ">
          <img
            className="media-object img-rounded"
            alt="image_movie"
            height="100px"
            width="100px"
            src={`${IMAGE_BASE_URL}${movies.poster_path}`}
          />
        </div>
        <div classname="media-body">
          <h5 className="Title">{movies.title}</h5> <p> rating : {movies.vote_average}</p>{" "}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
