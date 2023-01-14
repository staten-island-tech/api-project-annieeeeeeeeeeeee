import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL2 =
  "https://raw.githubusercontent.com/Sv443/JokeAPI/master/data/jokes/regular/jokes-en.json";

//const refresh = "https://v2.jokeapi.dev/joke/Any?safe-mode";
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
              "beforeend",
              `<p class="text">${e.setup}<button class="button" id="deliver">Show</button></p>
          
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

/* async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      console.log(response);
      const data = await response.json();
      console.log(data);
      document.getElementById("app").textContent = data.setup;
    }
  } catch (error) {
    console.log(error);
  }
} */
//getData(URL);

async function dataSafe1(URL2) {
  try {
    const response = await fetch(URL2);
    if (response.status < 200 || response.status > 299) {
      throw new Error(); //if error
    } else {
      const data = await response.json();
      const result = data.jokes.filter((e) => e.safe === true);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}
dataSafe1(URL2);
