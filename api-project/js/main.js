import '/styles/style.css'

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.meals.strMeal);

    function showFood() {
      data.meals.forEach((food) => document.getElementById("response").insertAdjacentHTML(
        "afterbegin",
            `
            <h2>cook ${food.meals.strMeal}</h2>
            <p>${food.meals.strIntrusctions}</p>`
      ))
    }

data.meals
.forEach((food) => showFood(food));

    document.getElementById("response").textContent = data.text;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);