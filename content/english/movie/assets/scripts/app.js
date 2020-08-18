const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelMovieAdd = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelMovieAdd.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function toggleMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
}

function clearMoviesInputs() {
  Array.from(userInputs).map((inp) => (inp.value = ""));
}

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function addMovieHandler() {
  const [titleValue, imageValue, ratingValue] = Array.from(
    userInputs
  ).map((p) => p.value.trim());

  if (titleValue === "" || imageValue === "" || ratingValue === "") {
    alert("Please fill in the form.");
    return;
  } else {
    if (parseInt(ratingValue) < 0) alert("Rating should be between 0 and 5");
  }

  const newMovie = {
    titleValue,
    imageValue,
    ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  clearMoviesInputs();
  toggleMovieModal();
  renderNewMovieElement(
    newMovie.titleValue,
    newMovie.imageValue,
    newMovie.ratingValue
  );
  updateUI();
}

function renderNewMovieElement(title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class= "movie-element__image">
  <img src = ${imageUrl} alt=${title}>
   </div>
   <div class = "movie-element__info">
   <h2>${title}</h2>
   <p> ${rating}/5 stars </p>
   </div>
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
}

startAddMovieButton.addEventListener("click", toggleMovieModal);

backdrop.addEventListener("click", toggleMovieModal);

cancelMovieAdd.addEventListener("click", () => {
  toggleMovieModal();
  clearMoviesInputs();
});

confirmAddMovieButton.addEventListener("click", addMovieHandler);
