import "./style.css";
import { DOMSelectors } from "./dom";

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
      document.getElementById("app").textContent = data.setup;
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
