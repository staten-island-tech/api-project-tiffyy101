import '/styles/style.css'

const URL = "https://fruityvice.com/api/fruit/all";

async function getData(URL){
  const response = await fetch(URL);
  console.log(response);
}
getData(URL);