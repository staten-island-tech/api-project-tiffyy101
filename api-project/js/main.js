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
  lawfulGood: document.getElementById("lawfulGood")
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
      DOMSelectors.display.innerHTML = "";
      results.data
      .forEach((character) => {
        card(character);
    });
  }
    
    function chaoticEvil(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "chaotic")
      .forEach((character) => {
        card(character);
      });
    }  
    
    function neutral(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "neutral")
      .forEach((character) => {
        card(character);
      });
    }

    function lawfulGood(results) {
      DOMSelectors.display.innerHTML = "";
      results.data
      .filter((character) => character.results.alignment === "lawful good")
      .forEach((character) => {
        card(character);
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

function card(character) {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2 class="display-name"> ${character.results.name} </h2>
            <h3 class="display-alignment"> Vision: ${character.results.alignment} </h3>
            <h3 class="display-weapon"> Weapons: ${character.weapon} </h3>
        </div>
      </div>
    </div>`
  );
} 

document.querySelector(".btnTheme").addEventListener("click", function () {
  if(document.body.classList.contains("warm")) {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
  } else {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
  }
});