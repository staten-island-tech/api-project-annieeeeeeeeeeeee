import "../styles/style.css";
import { DOMSelectors } from "./dom";

const allURL =
  "https://raw.githubusercontent.com/Sv443/JokeAPI/master/data/jokes/regular/jokes-en.json";

const randomURL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getData(randomURL) {
  try {
    const response = await fetch(randomURL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      console.log(response);
      const data = await response.json();
      console.log(data);
      const dataArray = [];
      dataArray.push(data);
      console.log(dataArray);
      function jotdTwopart() {
        dataArray
          .filter((e) => e.type === "twopart" && e.safe === true)
          .forEach((e) => {
            DOMSelectors.card.insertAdjacentHTML(
              "afterbegin",

              `<div><p class="text" id="setup">${e.setup}<button class="show" id="deliver">Show</button></p></div>
          
          <div class="text" id="delivery"></div>`
            );
            document
              .getElementById("deliver")
              .addEventListener("click", function () {
                document.getElementById("delivery").textContent = e.delivery;
                document.getElementById("deliver").textContent = "Hide";
              });
          });
      }

      jotdTwopart();

      function jotdSingle() {
        dataArray
          .filter((e) => e.type === "single" && e.safe === true)
          .forEach((e) => {
            DOMSelectors.cardBack.insertAdjacentHTML(
              "beforeend",
              `<p class="text" id="joke">${e.joke}</p>`
            );
          });
      }

      jotdSingle();
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
  }
}
getData(randomURL);

async function displayJokes(allURL) {
  try {
    const response = await fetch(allURL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      const jokes = data.jokes;
      function printJokesAll() {
        jokes
          .filter((e) => e.safe === true)
          .forEach((e) => {
            DOMSelectors.listJokes.insertAdjacentHTML(
              "afterbegin",
              `<div class="cards">
              <p class="display-text" id="id">id: ${e.id}</p>
              <p class="display-text">${e.joke || e.setup}</p>
              <p class= "display-text">${e.delivery || ""}</p>
              </div>
        `
            );
          });
      }

      printJokesAll();
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
  }
}

displayJokes(allURL);

async function search(allURL) {
  try {
    const response = await fetch(allURL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      const jokes = data.jokes;

      function search() {
        const userInput = DOMSelectors.userInput.value;
        jokes
          .filter((e) => e.id === +userInput)
          .forEach((e) => {
            DOMSelectors.searchDisplay.insertAdjacentHTML(
              "afterbegin",
              `<div class="search-results"><p class="search-result">${
                e.joke || e.setup
              }</p><p id="search-result-delivery">${e.delivery || ""}</p></div>
              `
            );
          });
      }

      DOMSelectors.searchBar.addEventListener("submit", function (e) {
        DOMSelectors.searchDisplay.textContent = "";
        search();
        e.preventDefault();
      });
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
  }
}

search(allURL);

function flipCard() {
  DOMSelectors.cardFront.addEventListener("click", function () {
    DOMSelectors.card.classList.toggle("flip");
  });
}

flipCard();
