const apiKey = "888e23c97aacbf18e76b99e8b025297f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=888e23c97aacbf18e76b99e8b025297f&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid = ${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="assets/cloudy.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="assets/sunny.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src="assets/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="assets/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src="assets/fog.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
