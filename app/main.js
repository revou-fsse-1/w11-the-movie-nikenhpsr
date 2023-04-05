// PREVIOUSLY WATCHED MOVIES
const url = "http://localhost:3000/isPrevious";

const previouslyWatched = document.getElementById("previously-watched");
const currentWatch = document.getElementById("current-watch");
const suggestedToWatch = document.getElementById("suggested");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      previouslyWatched.innerHTML += `
        <a
          class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
          >
          <img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${movie.image}"
          alt="${movie.title}"
          onclick="goToMovieDetail(${movie.id})"
          />
          <p
            id="${movie.id}"
          >
          ⭐ ${movie.imdb_rating}
          </p>
        </a>`;
    });
  })
  .catch((error) => console.log(error));

// make GET request to get movies with currentWatch value set to true
fetch("http://localhost:3000/currentWatch")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      currentWatch.innerHTML += `
      <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
      >
        <img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${movie.image}"
          alt="${movie.title}"
          onclick="goToMovieDetail(${movie.id})"
        />
        <p
          id="${movie.id}"
        >
        ⭐${movie.rating}
        </p>
      </a>`;
    });
  })
  .catch((error) => console.log(error));

// Get the container element where the suggested movies will be displayed
const suggestedContainer = document.getElementById("suggestedToWatch");

// Send a GET request to the API endpoint
fetch("http://localhost:3000/isSuggested")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      suggestedToWatch.innerHTML += `
        <a
          class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
          href="../src/description.html"
        >
          <img
            class="w-[100%] object-cover h-[235px] rounded-[20px]"
            src="${movie.image}"
            alt="${movie.title}"
            onclick="goToMovieDetail(${movie.id})"
          />
          <p
            id="${movie.id}"
          >
          ⭐${movie.rating}
          </p>
        </a>`;
    });
  })
  .catch((error) => console.log(error));

function goToMovieDetail(id) {
  // Send a GET request to the API endpoint to get the details of the selected movie
  fetch(`http://localhost:3000/movies/${id}`)
    .then((response) => response.json())
    .then(() => {
      window.location.href = "../src/description.html";
    })
    .catch((error) => console.log(error));
}
