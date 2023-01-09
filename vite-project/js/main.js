//import "..styles/style.css";
//import { DOMSelectors } from "./dom";

//const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const URLmaybe =
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
async function getData(URLmaybe) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      console.log(response);
      document.getElementById("jotdJs").textContent = response.jokes[0].jokes;
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

/* async function filter(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error();
    } else {
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}
/*  
filter(URL);

const category = "https://v2.jokeapi.dev/categories"; */
/* 
async function getCategory(category){
  try {
    const reponse = await fetch (category);
    if (reponse.status <200 || reponse.status >299) {
      throw new Error();
    } else {
      const data = await reponse.json(); 

    }
  }
}; */
