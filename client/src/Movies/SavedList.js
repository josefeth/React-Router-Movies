// import React from 'react';
// import { Link, BrowserRouter as Route, Router } from 'react-router-dom';
// import MovieList from './MovieList';

// const SavedList = props => (
//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
//     {props.list.map(movie => (
//       <span className="saved-movie">{movie.title}</span>
//     ))}
//     {/* <div className="home-button">Home</div> */}
//     <Link to={`/movies/${MovieList}`}>
//     <span className="saved-movie">{MovieList.title}</span>
//       </Link>
//       <div className = "home-button">
//     <Link to = '/' className="home-button">Home</Link>
//     </div>
    
//   </div>
// );
// export default SavedList;

import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      const id = movie.id;
      return (
        <Link to={`/movies/${id}`}>
          <span className="saved-movie">{movie.title}</span>
        </Link>
      );
    })}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;