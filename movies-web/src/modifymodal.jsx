import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../src/index.css"; // Importar el archivo CSS de estilos
import { modifyMovie } from "./fetch";


function EditMovie({ item, onUpdateMovies }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Id = item.Id;
  const [title, setTitle] = useState(item.Title || "");
  const [director, setDirector] = useState(item.Director || "");
  const [year, setYear] = useState(item.Year || "");
  const [rating, setRating] = useState(item.Rating || "");
  const [imgurl, setImgurl] = useState(item.ImgURL || "");


  const handleModalButtonClick = async () => {
    const updateMovie = {
      Id: Id,
      Title: title,
      Director: director,
      Year: year,
      Rating: rating,
      ImgURL: imgurl,
    };
    console.log(updateMovie);
    try{
      await modifyMovie(updateMovie);
      onUpdateMovies();
      handleClose();
    } catch (error){
      console.error('Error to modify movie:', error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modify Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modify Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="edit-form">
            <label id="Title" htmlFor="Title">Title</label>
            <input
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label id="Director" htmlFor="Director">Director</label>
            <input
              type="text"
              placeholder=""
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />

            <label id="Year" htmlFor="Year">Year</label>
            <input
              type="number"
              placeholder=""
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <label id="Rating" htmlFor="Rating">Rating</label>
            <input
              type="number"
              placeholder=""
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <label id="Imgurl" htmlFor="Imgurl">Image URL</label>
            <input
              type="text"
              placeholder=""
              value={imgurl}
              onChange={(e) => setImgurl(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleModalButtonClick}>Modify!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMovie;
