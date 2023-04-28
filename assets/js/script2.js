






$(document).ready(function() {
    for (let i = 1; i <= 4; i++) {
        if (localStorage.getItem([i]) !== null) {
        var get = localStorage.getItem([i]);
        var query = $("<div>").attr('class', 'prevSearch');
        query.attr('city-name', get);
        var city = $('<h2>').text(get).attr('city-name', get);
        query.append(city);
        searchContainer.prepend(query);
        return;
        }
    }
})
