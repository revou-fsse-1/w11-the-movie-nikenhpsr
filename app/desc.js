const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

const movieTitle = document.getElementById("movie-title");
const movieImage = document.getElementById('movieImage');
const movieGenre = document.getElementById('movieGenres');
const movieSynopsis = document.getElementById('movieSynopsis');
const movieTrailer = document.getElementById('movieTrailer');

// Make a request to get movie details from the API
fetch(`http://localhost:3000/movies/${movieId}`)
  .then((response) => response.json())
  .then((movie) => {
    // Update the movie title in the page with the fetched data
    movieTitle.textContent = movie.title;
    movieImage.src = movie.image;
    movieGenre.innerText = movie.genre;
    movieSynopsis.innerText = movie.synopsis;
    movieTrailer.src = movie.trailer;
  })
  .catch((error) => {
    console.error(error);
    movieTitle.textContent = "Error fetching movie details";
  });
