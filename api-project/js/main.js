import '/styles/style.css'

const DOMSelectors = {
  btnTheme: document.getElementById("btnTheme"),
  btns: document.getElementById("btns"),
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  result: document.getElementById("result")
};

const URL = "https://api.open5e.com/monsters/?search";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
    const data = await response.json();
    data.data.forEach((a) => {
      DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class="character">
        <h2>${a.results.name}</h2>
        <h3>${a.results.alignment}</h3>
        <p>${a.results.skills}</p>
        </div>
        `
      );
    });
  };

  }catch (error) {
    console.log(error);
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