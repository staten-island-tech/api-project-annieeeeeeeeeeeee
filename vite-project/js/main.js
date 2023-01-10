//import "..styles/style.css";
//import { DOMSelectors } from "./dom";

const URL =
  "https://raw.githubusercontent.com/Sv443/JokeAPI/master/data/jokes/regular/jokes-en.json";

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

async function dataSafe(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(); //if error
    } else {
      const data = await response.json();
      data.jokes.filter((e) => e.safe === true).forEach((e) => console.log(e));
    }
  } catch (error) {
    console.log(error);
  }
}
dataSafe(URL);

let min = 0;
let max = 186; //total joke count

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandom(min, max);
console.log(getRandom(min, max));

function qotd{
  data.jokes
}

