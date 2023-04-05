const url = `http://localhost:3000/movies/${id}`;
const descriptionContainer = document.getElementById("description");

fetch(url).then((response) => response.json()),
  then((desc) => {
    descriptionContainer.innerHTML = `
            <div>
              <h1>${movie.title}</h1>
              <img src="${movie.image}" alt="${movie.title}" />
              <iframe width="560" height="315" src="${movie.trailer}" title="${movie.title}" frameborder="0" allowfullscreen></iframe>
              <p>Genre: ${movie.genre}</p>
              <p>${movie.synopsis}</p>
            </div>
          `;
  });
