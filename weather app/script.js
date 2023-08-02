const apiKey = "a26bf6141031a788c3640b1d41117281";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".input-field");
const searchBtn = document.querySelector(".search-btn")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".city-temp").innerHTML = Math.round(data.main.temp) + " C°";
    document.querySelector(".city-humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".city-wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".image-change").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".image-change").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".image-change").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".image-change").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".image-change").src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})