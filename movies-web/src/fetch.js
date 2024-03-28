const URL = "http://localhost:3000/api/movies";

// Función para adquirir la lista de películas
export async function getMovies() {
  try {
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Función para agregar una película
export async function addMovie(newMovie) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });
    if (!response.ok) {
      throw new Error("Error al crear nueva película.");
    }
    getMovies();
  } catch (error) {
    console.error("Error al crear la película:", error);
  }
}

// Función para borrar una película
export async function deleteMovie(movieId) {
  try {
    const response = await fetch(`${URL}/${movieId}`, {
      method: "DELETE",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la película");
    }

    getMovies();
  } catch (error) {
    console.error("Error al eliminar la película:", error);
  }
}

// Función para modificar una película
export async function modifyMovie(updateMovie) {
  try {
    const response = await fetch(`${URL}/${updateMovie.Id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateMovie),
    });
    if (!response.ok) {
      throw new Error("Error al Modificar película.");
    }
    getMovies();
  } catch (error) {
    console.error("Error al modificar la película:", error);
  }
}

//exporta las funciones para usarlas en cualquier parte usando

