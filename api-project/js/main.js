import '/styles/style.css'

const DOMSelectors = {
  search: document.getElementById("search"),
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  result: document.getElementById("result")
};

const URL = "https://api.open5e.com/monsters/?search";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    data.data.forEach((a) => {
      console.log(a.results.name, a.results.alignment, a.results.skills);
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
  }catch (error) {
    console.log(error);
  }
}
getData(URL);

async function searchAPI() {
  try {
    DOMSelectors.btn.addEventListener("submit", function clearInput(){
      DOMSelectors.content = "";
    });
  }catch (error) {}
}
searchAPI();
