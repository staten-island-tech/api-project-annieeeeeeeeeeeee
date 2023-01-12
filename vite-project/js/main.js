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
            DOMSelectors.welcome.insertAdjacentHTML(
              "beforeend",
              `<p>${e.setup}</p>
          <button class="button" id="deliver">Show</button>
          <div id="delivery"></div>`
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
              `<p>${e.joke}</p>`
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
      const safe = data.jokes.filter((e) => e.safe === true);
      const result = safe.filter((e) => e.type === "single");
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}
dataSafe1(URL2);

/* async function welcome(refresh) {
  try {
    const response = await fetch(refresh);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      const data = await response.json();
      console.log(data);
      console.log(response);
      document.getElementById("jotdJs").textContent = data.setup;
    }
  } catch (error) {
    console.log(error);
  }
}

welcome(); */

/* let min = 0;
let max = 185; //total joke count
 */
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// getRandom(min, max);
// console.log(getRandom(min, max));

// function change() {
//   dataSafe();
// }
