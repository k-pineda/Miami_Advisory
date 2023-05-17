
var currentWeatherAPI=`https://api.openweathermap.org/data/2.5/weather?id=4164138&appid=3484e08d51e803d19133758ad6e77ac5&units=imperial`



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
            console.log(data.weather[0])
            console.log(data.weather[1])
        })
    }
 
getWeatherAPI(currentWeatherAPI)



//   function pageLoad()
// {
//     getWeatherAPI(currentWeatherAPI)
// }  

// pageLoad()