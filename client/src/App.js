import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route path = '/'> <MovieList />  </Route>
      <Route path = '/movies/:id'> <Movie />  </Route>
      
    </div>
    </div>
  );
};

export default App;
