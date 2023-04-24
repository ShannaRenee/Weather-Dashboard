var cityName = $('#textbox')
var button = $('button')


button.on('click', start)


function start() {
var location = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName.val() +
"&appid=f935ee17441f16d1cfe096562d3793e1"

    fetch(location)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            testFunction(data);
        })
    }


function testFunction(data) {
    var longitude = data[0].lon;
    var latitude = data[0].lat;
    var requestForecast = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude +
    "&lon=" + longitude + "&appid=f935ee17441f16d1cfe096562d3793e1&units=imperial";

    fetch(requestForecast)
        .then(function (response) {
           return response.json()
        })
        .then(function (data) {
            construct(data);
         })
    }

function construct(data) {

    }