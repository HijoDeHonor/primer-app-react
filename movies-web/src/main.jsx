import React from "react";
import ReactDOM from "react-dom/client";
import MovieList from "./movieList.jsx";
import NewMovie from "./newMovie.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Movie List</h1>
        <div>
          <MovieList />
          
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
