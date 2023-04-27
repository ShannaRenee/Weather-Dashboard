var button = $('button')
var today = $('#today')
var temp = $('#temp')
var wind = $('#wind')
var humidity = $('#humidity')
var fiveForecast = $('#bottom')
var babyboxesEL = $('.babyboxes')
var searchContainer = $('#searchContainer')


const days = [];

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


function buttonClickHandler(event) {
    var inputEntry = event.target.getAttribute('city-name');
    // $('#textbox').val(inputEntry)
    // console.log(input);
        getAPI(inputEntry);
    }
    


function start() {
// grabbing the ciy the user typed in
var inputEntry = $('#textbox').val();
// capitalizes the first letter of the city input
var cityName = inputEntry.charAt(0).toUpperCase() + inputEntry.slice(1);

//only allows the last four searches to populate the search container
if (searchContainer.children().length > 3) {
    searchContainer.children().eq(3).remove();
}
//adds previous searches to the search container
var query = $("<div>").attr('class', 'prevSearch');
query.attr('city-name', inputEntry);
var city = $('<h2>').text(cityName).attr('city-name', inputEntry);
query.append(city);
searchContainer.prepend(query);
getAPI(inputEntry);

}

//fetching the weather data
function getAPI(inputEntry) { 
var location = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputEntry + 
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
    var cityName = data.city.name;
    
    today.text(cityName + " " + dayjs().format('MM/DD/YYYY') + " ");
    today.append($('<span>').attr('class', conditions[iconNow]));

    //Current conditions
    temp.text("Current temp: " + currentTemp + " °F");
    wind.text("Current wind speed: " + currentWind + " mph");
    humidity.text("Current humidity level: " + currentHum + "%");

    //This is the five day forecast
    //Grabbing the forecast info for the days by the noon time
    for (let i = 0; i < data.list.length; i++) {
    var times = data.list[i].dt_txt.split(' ')[1];
        if (times === "12:00:00") {
        days.push(data.list[i]);
        }}


    // for (let i = 0; i < days.length; i++) {
    //    //creating, styling and appending each box
    //    var box = $('<div>').attr('class', 'babyboxes');
    //    fiveForecast.append(box);
    //     //grabbing the date from each and setting it to format I like
    //     //appending to each box
    //     var date = days[i].dt_txt.split(' ')[0];
    //     var formattedDate = $('<h2>').text(dayjs(date).format('MM/DD/YYYY'));
    //     box.append(formattedDate);
    //     //creating and appending the icons to each
    //     var tinyIcon = days[i].weather[0].main;
    //     box.append($('<span>').attr('class', conditions[tinyIcon]));
    //     //adding temp
    //     var tinyTemp = days[i].main.temp;
    //     var showTinyTemp = $('<p>').text('Temp: ' + tinyTemp + ' °F');
    //     box.append(showTinyTemp);
    //     //adding wind
    //     var tinyWind = days[i].wind.speed;
    //     var showTinyWind = $('<p>').text('Wind: ' + tinyWind + ' mph');
    //     box.append(showTinyWind);
    //     //adding humidity
    //     var tinyHum = days[i].main.humidity;
    //     var showTinyHum = $('<p>').text('Humidity: ' + tinyHum + '%');
    //     box.append(showTinyHum);
    // }
        
$('#textbox').val(' ');
}

    
button.on('click', start)
searchContainer.on('click', buttonClickHandler)

