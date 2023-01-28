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

              `<div><p class="text" id="setup">${e.setup}</p></div>
              <div id="deliver-container"><button class="show" id="deliver">Show</button></div>
              
          
          <div class="text" id="delivery"></div>`
            );
            document
              .getElementById("deliver")
              .addEventListener("click", function () {
                document.getElementById("delivery").textContent = e.delivery;
                document.getElementById("deliver-container").innerHTML = "";
              });
          });
      }

      jotdTwopart();

      function jotdSingle() {
        dataArray
          .filter((e) => e.type === "single" && e.safe === true)
          .forEach((e) => {
            DOMSelectors.card.insertAdjacentHTML(
              "beforeend",
              `<p class="text" id="joke">${e.joke}</p>`
            );
          });
      }

      jotdSingle();

      DOMSelectors.next.addEventListener("click", function () {
        location.reload();
      });
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<p class="text" id="erro">Oops an error has occurred. Try refreshing the page.</p>`
    );
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

      function insertHTML(jokes) {
        DOMSelectors.listJokes.insertAdjacentHTML(
          "afterbegin",
          `<div class="cards">
          <p class="display-text" id="id">id: ${jokes.id}</p>
          <p class="display-text">${jokes.joke || jokes.setup}</p>
          <p class= "display-text">${jokes.delivery || ""}</p>
          </div>
    `
        );
      }
      function printJokesAll() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true)
          .forEach((e) => {
            insertHTML(e);
          });
      }

      printJokesAll();

      DOMSelectors.all.addEventListener("click", function () {
        printJokesAll();
      });

      function printMisc() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true && e.category === "Misc")
          .forEach((e) => {
            insertHTML(e);
          });
      }

      DOMSelectors.misc.addEventListener("click", function () {
        printMisc();
      });

      function printProgramming() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true && e.category === "Programming")
          .forEach((e) => {
            insertHTML(e);
          });
      }

      DOMSelectors.prog.addEventListener("click", function () {
        printProgramming();
      });

      function printPuns() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true && e.category === "Pun")
          .forEach((e) => {
            insertHTML(e);
          });
      }

      DOMSelectors.puns.addEventListener("click", function () {
        printPuns();
      });

      function printHallow() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true && e.category === "Spooky")
          .forEach((e) => {
            insertHTML(e);
          });
      }

      DOMSelectors.hallow.addEventListener("click", function () {
        printHallow();
      });

      function printChristmas() {
        DOMSelectors.listJokes.innerHTML = " ";
        jokes
          .filter((e) => e.safe === true && e.category === "Christmas")
          .forEach((e) => {
            insertHTML(e);
          });
      }

      DOMSelectors.christmas.addEventListener("click", function () {
        printChristmas();
      });
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<p class="text" id="erro">Oops an error has occurred. Try refreshing the page.</p>`
    );
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
          .filter((e) => e.id === +userInput && e.safe === true)
          .forEach((e) => {
            DOMSelectors.searchDisplay.insertAdjacentHTML(
              "afterbegin",
              `<div class="search-results">
              <p class="search-result">${e.joke || e.setup}</p>
              <p  class="search-result" id="search-result-delivery">${
                e.delivery || ""
              }</p>
              </div>
              `
            );
          });
      }

      DOMSelectors.searchBar.addEventListener("submit", function (e) {
        DOMSelectors.searchDisplay.textContent = "";
        search();
        e.preventDefault();
        DOMSelectors.userInput.value = "";
      });
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<p class="text" id="erro">Oops an error has occurred. Try refreshing the page.</p>`
    );
  }
}

search(allURL);
