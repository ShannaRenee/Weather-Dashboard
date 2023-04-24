var cityName = $('#textbox')
var button = $('button')
var today = $('#today')
var temp = $('#temp')
var wind = $('#wind')
var humidity = $('#humidity')


var conditions = {
    'Thunderstorm': "fa-solid fa-cloud-bolt fa-shake",
    'Drizzle': "fa-solid fa-cloud-showers-heavy",
    'Rain': "fa-solid fa-cloud-rain",
    'Snow': "fa-solid fa-snowflake fa-spin",
    'Clear': "fa-solid fa-sun fa-spin",
    'Clouds': "fa-solid fa-cloud fa-bounce",
    'Mist': "fa-solid fa-smog",
    'Smoke': "fa-solid fa-smog",
    'Haze': "fa-solid fa-smog",
    'Dust': "fa-solid fa-smog",
    'Fog': "fa-solid fa-smog",
    'Sand': "fa-solid fa-smog",
    'Ash': "fa-solid fa-smog",
    'Squall': "fa-solid fa-wind fa-beat-fade",
    'Tornado': "fa-solid fa-tornado fa-flip"
}

button.on('click', start)

function start() {
    var location = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName.val() + 
    "&appid=f935ee17441f16d1cfe096562d3793e1&units=imperial";
    fetch(location)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            construct(data)
        })
}


function construct(data) {
    //Displays city, current date, and current weather icon
    var iconNow = data.list[0].weather[0].main;
    var currentTemp = data.list[0].main.temp;
    var currentWind = data.list[0].wind.speed;
    var currentHum =  data.list[0].main.humidity;
    today.text(cityName.val() + " " + dayjs().format('MM/DD/YYYY') + " ");
    today.append($('<span>').attr('class', conditions[iconNow]));

    //Current conditions
    temp.text("Current temp: " + currentTemp + " °F");
    wind.text("Current wind speed: " + currentWind + " mph");
    humidity.text("Current humidity level: " + currentHum + "%");

    }


// for (let i = 0; i < data.list.length; i++) 
//     console.log(data.list[i].dt_txt.split(' ')[1])
