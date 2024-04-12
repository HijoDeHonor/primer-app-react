import { deleteMovie } from "../../../services/fetch";
import Button from "react-bootstrap/Button";

export function DeleteMovieBtn({ Id, onUpdateMovies }) {
  const handleDelete = async () => {
    try {
      await deleteMovie(Id);
      onUpdateMovies();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  return (
    <Button onClick={handleDelete} variant="secondary">
      Delete Movie
    </Button>
  );
}

export default DeleteMovieBtn;
