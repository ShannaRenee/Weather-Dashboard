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
            console.log(data)
        })
}



