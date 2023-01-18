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
          .filter((e) => e.type === "twopart")
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
          .filter((e) => e.type === "single")
          .forEach((e) => {
            DOMSelectors.welcome.insertAdjacentHTML(
              "beforeend",
              `<p class="text">${e.joke}</p>`
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

async function getIds(URL2) {
  try {
    const response = await fetch(URL2);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      const idArray = [];
      idArray.push(data.jokes);
      console.log(idArray);
      const results = idArray.forEach((e) => e.map((a) => a.id));
      console.log(results);
    }
  } catch (error) {
    console.log(error);
    console.log("uh oh");
  }
}

getIds(URL2);

function flipCard() {
  DOMSelectors.cardFront.addEventListener("click", function () {
    DOMSelectors.card.classList.toggle("flip");
  });
}

flipCard();

/* DOMSelectors.searchBar.addEventListener("submit", function (event) {
  console.log("hey");
  event.preventDefault();
}); */
