import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieList from './MovieList.jsx'
import NewMovie  from './NewMovie.jsx'
import './index.css'


function App() {
  return (
    <>
      <h1>Movie List</h1>
      <NewMovie /> 
      <MovieList />           
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
