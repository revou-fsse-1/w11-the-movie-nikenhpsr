const watchlistUrl = "http://localhost:3000/watchlist";
const watchlist = document.getElementById('watchlist-container')


// CREATE
const createMovie = async (movie) => {
  try {
    const response = await fetch(watchlistUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      throw new Error("Failed to create movie");
    }

    const createdMovie = await response.json();
    console.log("Created movie:", createdMovie);
    return createdMovie;
  } catch (error) {
    console.error("Error creating movie:", error);
  }
};

// READ
const getMovies = async () => {
  try {
    const response = await fetch(watchlistUrl);

    if (!response.ok) {
      throw new Error("Failed to get movies");
    }

    const movies = await response.json();
    console.log("Movies:", movies);
    return movies;
  } catch (error) {
    console.error("Error getting movies:", error);
  }
};

const getMovieById = async (id) => {
  try {
    const response = await fetch(`${watchlistUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to get movie with id ${id}`);
    }

    const movie = await response.json();
    console.log(`Movie with id ${id}:`, movie);
    return movie;
  } catch (error) {
    console.error(`Error getting movie with id ${id}:`, error);
  }
};

// UPDATE
const updateMovie = async (id, updates) => {
  try {
    const response = await fetch(`${watchlistUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update movie with id ${id}`);
    }

    const updatedMovie = await response.json();
    console.log(`Updated movie with id ${id}:`, updatedMovie);
    return updatedMovie;
  } catch (error) {
    console.error(`Error updating movie with id ${id}:`, error);
  }
};

// DELETE
const deleteMovie = async (id) => {
  try {
    const response = await fetch(`${watchlistUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete movie with id ${id}`);
    }

    console.log(`Deleted movie with id ${id}`);
  } catch (error) {
    console.error(`Error deleting movie with id ${id}:`, error);
  }
};
