var cityName = $('#textbox')
var button = $('button')
var today = $('#today')
var temp = $('#temp')
var wind = $('#wind')
var humidity = $('#humidity')


button.on('click', start)

function start() {
    var location = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName.val() + 
    "&appid=f935ee17441f16d1cfe096562d3793e1&units=imperial";
    fetch(location)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            construct(data)
        })
}


function construct(data) {
    today.text(cityName.val() + " " + dayjs().format('MM/DD/YYYY'));
}