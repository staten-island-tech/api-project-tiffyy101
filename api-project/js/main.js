import '/styles/style.css'

const URL = "https://www.themuse.com/api/public/companies";

async function getData(URL){
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.content);
    document.getElementById("response").textContent = data.content;
  }catch (error) {
    console.log(error);
  }
}
getData(URL);