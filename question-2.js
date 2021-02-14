const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".gamesDisplayed");


async function displayGamesFromApi() {
  try {
    const response = await fetch(url);
    const resultOfArray = await response.json();
    const games = resultOfArray.results;
    console.log(resultOfArray);

    resultsContainer.innerHTML = '';

    for (let i = 0; i <= games.length; i++) {
      
        if (i === 8) {
        break;
    }

      resultsContainer.innerHTML += `<div class="result"><p>Name:</p>${games[i].name}<br></br><p>Rating:</p>${games[i].rating}<br></br><p>Tags:</p>${games[i].tags.length}</div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError();
  }
}

displayGamesFromApi();

            