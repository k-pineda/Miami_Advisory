var currentTime = dayjs().format("MMM DD, YYYY  h:mm:ss A")

$("#current-time").text(currentTime)

var currentWeatherAPI=`https://api.openweathermap.org/data/2.5/weather?id=4164138&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`

var currentFeelsLikeTemp;
var cityName;
var currentWeather;
var currentWeatherIcon;

// when current feel is greater than 90 move progress bar to 😰🐕☠️
// when current feel is greater than 105 move progress bar to 🥵🐕⚱️ 
// when current feel is less than 90 move progress bar to 🙂🐕✅ 


function getWeatherAPI (currentWeatherAPI){
    fetch(currentWeatherAPI)
        .then(function (response) 
        {
          return response.json();
        })
        .then(function(data){
            console.log(data)
            console.log(data.main.feels_like)
            console.log(data.name)
            console.log(data.weather[0].icon)
        })
    }
    
function getWeatherIcon() 
{
    // $('img').remove()
    var currentWeatherIcon=data.weather[0].icon
    var img = $('<img>', {src:`https://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`})
    return img
}

getWeatherAPI(currentWeatherAPI)


//   function pageLoad()
// {
//     getWeatherAPI(currentWeatherAPI)
// }  

// pageLoad()