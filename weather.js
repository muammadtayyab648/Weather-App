

const apiKey="e4e9fb2b5694f3d46572156ffea05410";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed+" km/h";

}
   
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
   


    