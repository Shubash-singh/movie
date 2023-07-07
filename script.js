const title = "Avatar";
const apikey = "b4cdfba7";
const url = `https://www.omdbapi.com/?t=${title}&apikey=b4cdfba7`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    movieTitle.innerHTML = `Title: <b>${title}</b>`;
    rating.innerHTML = `IMDB Rating:<b> ${data.imdbRating}</b><br> Release Year: <b>${data.Year}</b><br>Director Name: <b>${data.Director}</b><br><br><img src="${data.Poster}" style="max-width:160px">`;
  });
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const movieTitle = document.getElementById("movieTitle");
const rating = document.getElementById("rating");
const Actors = document.getElementById("Actors");
const Plot = document.getElementById("Plot");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const title = searchInput.value;
  const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movieTitle.innerHTML = `Title: <b>${title}</b>`;
      rating.innerHTML = `IMDB Rating:<b> ${data.imdbRating}</b><br> Release Year: <b>${data.Year}</b><br>Director Name: <b>${data.Director}</b><br><br><img src="${data.Poster}" style="max-width:160px">`;
    })
    .catch((error) => {
      console.error("Error:", error);
      movieTitle.innerHTML = "";
      rating.innerHTML = "Movie not found.";
    });
});