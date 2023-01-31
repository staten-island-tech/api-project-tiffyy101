import '/styles/style.css'

const DOMSelectors = {
  btnTheme: document.getElementById("btnTheme"),
  btns: document.getElementById("btns"),
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  display: document.getElementById("display"),
  allCharacters: document.getElementById("allCharacters"),
  chaoticEvil: document.getElementById("chaoticEvil"),
  neutral: document.getElementById("neutral"),
  lawfulGood: document.getElementById("lawfulGood"),
  mainDiv: document.getElementById("main")
};

const URL = "https://api.open5e.com/monsters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
    const data = await response.json();

    function allCharacters(results) {
      results.data
      .forEach((character) => {
        DOMSelectors.display.innerHTML = " ";
        DOMSelectors.mainDiv.insertAdjacentHTML
        ("beforeend",
                `
              <h2>${character.results.name}</h2>
              <h3>${character.results.alignment}`)
    });
  }
    
/*   const chaoticEvil = document.getElementById("chaoticEvil");
  chaoticEvil.addEventListener("click", function () {
      DOMSelectors.display.innerHTML = " ";
      menu.filter((chaoticEvil) => chaoticEvil.results.alignment === "yes")
      .forEach(bestSeller => {
          DOMSelectors.mainDiv.insertAdjacentHTML */

    function chaoticEvil(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "chaotic evil")
      .forEach((character) => {
        DOMSelectors.mainDiv.insertAdjacentHTML
        ("beforeend",
                `
              <h2>${character.results.name}</h2>
              <h3>${character.results.alignment}`)
      });
    }  
    
    function neutral(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "neutral")
      .forEach((character) => {
        DOMSelectors.mainDiv.insertAdjacentHTML
        ("beforeend",
                `
              <h2>${character.results.name}</h2>
              <h3>${character.results.alignment}`)
      });
    }

    function lawfulGood(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "lawful good")
      .forEach((character) => {
        DOMSelectors.mainDiv.insertAdjacentHTML
        ("beforeend",
                `
              <h2>${character.results.name}</h2>
              <h3>${character.results.alignment}`)
      });
    }

    DOMSelectors.allCharacters.addEventListener("click", function () {
      allCharacters(data);
    });

    DOMSelectors.chaoticEvil.addEventListener("click", function () {
      chaoticEvil(data);
    });

    DOMSelectors.neutral.addEventListener("click", function () {
      neutral(data);
    });

    DOMSelectors.lawfulGood.addEventListener("click", function () {
      lawfulGood(data);
    });

    console.log(data);
  }
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(URL);

document.querySelector(".btnTheme").addEventListener("click", function () {
  if(document.body.classList.contains("warm")) {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
  } else {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
  }
});