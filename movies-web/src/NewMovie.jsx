import React, { useState, useEffect } from "react";
import { addMovie } from "./fetch";

export function NewMovie({ onUpdateMovies }) {
  const [formData, setFormData] = useState({
    Title: "",
    Director: "",
    Year: "",
    Rating: "",
    ImgURL: "",
  });
  console.log(formData);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await addMovie(formData);
      onUpdateMovies();
      setFormData({
        Title: "",
        Director: "",
        Year: "",
        Rating: "",
        ImgURL: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };
  return (
    <div className="popup-inner">
      <button
        className="drop-btn"
        onClick={() => setShowForm((prevState) => !prevState)}
      >
        {showForm ? "Close" : "New Movie?"}
      </button>
      {showForm && (
        <div className="popup p-3">
          <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input
              type="text"
              name="Title"
              placeholder="Titulo"
              value={formData.Title}
              onChange={handleChange}
            />
            <br />
            <p>Director</p>
            <input
              type="text"
              name="Director"
              placeholder="Director"
              value={formData.Director}
              onChange={handleChange}
            />
            <br />
            <p>Year</p>
            <input
              type="text"
              name="Year"
              placeholder="Year"
              value={formData.Year}
              onChange={handleChange}
            />
            <br />
            <p>Rating</p>
            <input
              type="text"
              name="Rating"
              placeholder="Rating"
              value={formData.Rating}
              onChange={handleChange}
            />
            <br />
            <p className="p-0">Image URL</p>
            <input
              type="text"
              name="ImgURL"
              placeholder="Image URL"
              value={formData.ImgURL}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default NewMovie;