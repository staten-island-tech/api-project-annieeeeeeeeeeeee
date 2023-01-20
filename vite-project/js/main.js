import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL2 =
  "https://raw.githubusercontent.com/Sv443/JokeAPI/master/data/jokes/regular/jokes-en.json";

const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getData(URL) {
  try {
    const response = await fetch(URL);
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
            DOMSelectors.cardBack.insertAdjacentHTML(
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
getData(URL);

/* async function getIds(URL2) {
  try {
    const response = await fetch(URL2);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      const jokes = data.jokes;
      //console.log(jokes.joke); //keeps printing undefined

      const userInput = DOMSelectors.userInput.value;
      DOMSelectors.searchBar.addEventListener("click", function (e) {
        const hey =
          jokes.joke.filter((e) => e.includes(userInput)) ||
          jokes.setup.filter((e) => e.includes(userInput));
        console.log(hey);
      });
    }
  } catch (error) {
    DOMSelectors.searchBar.addEventListener("submit", function (event) {
      console.log("hey");
      event.preventDefault();
      search();
    });
    console.log(error);
    console.log("uh oh");
  }
}

getIds(URL2); */

async function displayJokes(URL2) {
  try {
    const response = await fetch(URL2);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      const jokes = data.jokes;
      //console.log(jokes.joke); //keeps printing undefined
      function printJokesSingle() {
        jokes
          .filter((e) => e.type === "single" && e.safe === true)
          .forEach((e) => {
            console.log(e);
            DOMSelectors.listJokes1.insertAdjacentHTML(
              "afterbegin",
              `
               <li class="joke-display">${e.joke}</li>
        `
            );
          });
      }

      printJokesSingle();

      function printSetup() {
        jokes
          .filter((e) => e.type === "twopart")
          .forEach((e) => {
            DOMSelectors.listJokes2.insertAdjacentHTML(
              "beforeend",
              `
              <li class="joke-display">${e.setup + " " + e.delivery}</li>
              `
            );
          });
      }

      printSetup();
    }
  } catch (error) {
    /*   DOMSelectors.searchBar.addEventListener("submit", function (event) {
        console.log("hey");
        event.preventDefault();
        search();
      }); */
    console.log(error);
    console.log("uh oh");
  }
}

displayJokes(URL2);

function flipCard() {
  DOMSelectors.cardFront.addEventListener("click", function () {
    DOMSelectors.card.classList.toggle("flip");
  });
}

flipCard();
