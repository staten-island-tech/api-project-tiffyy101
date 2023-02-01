import '/styles/style.css'

const DOMSelectors = {
  btnTheme: document.getElementById("btnTheme"),
  btns: document.getElementById("btns"),
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  display: document.getElementById("display"),
  sword: document.getElementById("sword"),
  claymore: document.getElementById("claymore"),
  bow: document.getElementById("bow"),
  all: document.getElementById("all")

};

const characters = "https://genshinlist.com/api/characters";

async function getData(characters) {
  try {
    const response = await fetch(characters);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
 

      function all() {
        data.forEach((data) => {
          DOMSelectors.display.insertAdjacentHTML
            ("beforeend",
              `
              <h2>${data.name}</h2>
              <h3>Gender:${data.gender}</h3>
              <p>${data.description}</p>
              <button id="choose" class="choose">Choose</button>
          </div>
          <div id="mainCard">`
            )
        });
      }

      function sword() {
        data.filter((results) => results.weapon === "sword")
          .forEach(results => {
            DOMSelectors.display.insertAdjacentHTML              
            ("beforeend",
                `
                <h2>${results.name}</h2>
                <h3>Gender:${results.gender}</h3>
                <p>${results.description}</p>
                <button id="choose" class="choose">Choose</button>
          </div>
          <div id="mainCard">`)
          });
      }

      function claymore() {
        data.filter((results) => results.weapon === "claymore")
          .forEach(results => {
            DOMSelectors.display.insertAdjacentHTML              
            ("beforeend",
                `
                <h2>${results.name}</h2>
                <h3>Gender:${results.gender}</h3>
                <p>${results.description}</p>
                <button id="choose" class="choose">Choose</button>
          </div>
          <div id="mainCard">`)
          });
      }

      function bow() {
        data.filter((results) => results.weapon === "bow")
          .forEach(results => {
            DOMSelectors.display.insertAdjacentHTML              
            ("beforeend",
                `
                <h2>${results.name}</h2>
                <h3>Gender:${results.gender}</h3>
                <p>${results.description}</p>
                <button id="choose" class="choose">Choose</button>
          </div>
          <div id="mainCard">`)
          });
      }

      DOMSelectors.all.addEventListener("click", function () {
        all();
        });

    DOMSelectors.sword.addEventListener("click", function () {
      sword();
      });
   
    DOMSelectors.claymore.addEventListener("click", function () {
      claymore();
    });
   
    DOMSelectors.bow.addEventListener("click", function () {
      bow();
    });

     console.log(data);
    }  
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(characters);

document.querySelector(".btnTheme").addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  } else {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});
