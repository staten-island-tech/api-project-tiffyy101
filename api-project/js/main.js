import '/styles/style.css'

const URL = "https://cat-fact.herokuapp.com/facts";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.text);

    function showText() {
      data.data.forEach((text) => document.getElementById("response").insertAdjacentHTML(
        "beforeend",
            `
            <h2>${text.text}`
      ))
    }
    document.getElementById("response").textContent = data.text;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);