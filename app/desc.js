const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

const movieTitle = document.getElementById("movie-title");
const movieImage = document.getElementById("movieImage");
const movieGenre = document.getElementById("movieGenres");
const movieSynopsis = document.getElementById("movieSynopsis");
const movieTrailer = document.getElementById("movieTrailer");
const movieRating = document.getElementById("imdbRating");
const watchlistButton = document.getElementById("add-watchlist");

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
    movieRating.innerText = `IMDB Rating:
    ⭐ ${movie.rating} / 10`;
  })
  .catch((error) => {
    console.error(error);
    movieTitle.textContent = "Error fetching movie details";
  });


// add to watchlist
  watchlistButton.addEventListener("click", function() {
    const movieId = ""; // Replace with the ID of the movie you want to add to the watchlist
    const watchlistUrl = "http://localhost:3000/watchlist"; // Replace with the URL of the watchlist API
    const movieUrl = `http://localhost:3000/movies/${movieId}`; // Replace with the URL of the movie API

    fetch(movieUrl)
      .then(response => response.json())
      .then(movieData => {
        const updatedMovieData = { ...movieData, onWatchlist: true };
        return fetch(watchlistUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMovieData)
        });
      })
      .then(response => {
        if (response.ok) {
          window.location.href = "watchlist.html";
        } else {
          console.error("Failed to add movie to watchlist");
        }
      })
      .catch(error => {
        console.error("Error adding movie to watchlist", error);
      });
  });

/*// Make a request to get movie genres from the API
fetch(`http://localhost:3000/movies/${movieId}`)
  .then((response) => response.json())
  .then((movie) => {
    // Update the movie title in the page with the fetched data
    movie.forEach((movie) => {
      const movieGenre = movie.genre;
      movieGenre.forEach((movieGenre) => {
        movieGenres.innerHTML += `
        <div class="flex justify-evenly rounded-full  bg-slate-200 px-10 py-2 text-black">${movie.genre}</div>`;
      });
    });
  })
  .catch((error) => {
    console.error(error);
    movieTitle.textContent = "Error fetching movie details";
  });*/
