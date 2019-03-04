import React from "react";
import VideoListItem from "../Component/Video_list_items";

const VideoList = ({moviesList}) => {
    console.log(moviesList)
    
  return (
    <div>
      <ul>
        {
            moviesList.map(movies => {
                return <VideoListItem key={movies.id} movies= {movies}/>
            })
        }
      </ul>
    </div>
  );
};
export default VideoList;