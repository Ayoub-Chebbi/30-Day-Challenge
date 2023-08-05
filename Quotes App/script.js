const apiUrl = "https://api.quotable.io/random";
const quoteField = document.querySelector(".quote");
const authorField = document.querySelector(".author");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quoteField.innerHTML = data.content;
    authorField.innerHTML = data.author;
}

getquote(apiUrl);