import '/styles/style.css'

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.meals.strInstructions);
    document.getElementById("response").textContent = data.meals.strInstructions;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);