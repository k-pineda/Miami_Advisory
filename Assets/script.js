var currentTime = dayjs().format("MMM DD, YYYY  h:mm:ss A")

$("#current-time").text(currentTime)

var currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?id=4164138&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`

var weatherNWSAPI=`https://api.weather.gov/points/25.774269,-80.193657`

var stationNWSAPI="https://api.weather.gov/gridpoints/MFL/110,51/stations"

var forecastNWSAPI=`https://api.weather.gov/gridpoints/MFL/110,51/forecast`



var currentFeelsLikeTemp;
var cityName;
var currentWeather;
var currentWeatherIcon;

// when current feel is greater than 90 move progress bar to 😰🐕☠️
// when current feel is greater than 105 move progress bar to 🥵🐕⚱️ 
// when current feel is less than 90 move progress bar to 🙂🐕✅ 


function getWeatherAPI(currentWeatherAPI) {
    fetch(currentWeatherAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.main.feels_like)
            console.log(data.name)
            console.log(data.weather[0].icon)
            if (data.main.feels_like <= 80) {
                $('.25').removeClass('hide')
            } if (data.main.feels_like <= 90) {
                $('.25').addClass('hide')
                $('.50').removeClass('hide')
            }if (data.main.feels_like <= 104) {
                $('.50').addClass('hide')
                $('.75').removeClass('hide')
            }else{
                $('.75').addClass('hide')
                $('.100').removeClass('hide')
            }

            })
}

// function getWeatherAPI(requestURL) {
//     fetch(requestURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             })
// }

function getWeatherIconAPI() {
    // $('img').remove()
    var currentWeatherIcon = data.weather[0].icon
    var img = $('<img>', { src: `https://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png` })
    return img
}

getWeatherAPI(currentWeatherAPI)

// getWeatherAPI(weatherNWSAPI)

// getWeatherAPI(forecastNWSAPI)

//   function pageLoad()
// {
//     getWeatherAPI(currentWeatherAPI)
// }  

// pageLoad()