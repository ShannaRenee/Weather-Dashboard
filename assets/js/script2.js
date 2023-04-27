








if (searchContainer.children().length > 4) {
    searchContainer.last().remove();
}

var div = $('<div>').addClass('prevSearch');
div.append($('<h2>').text(inputEntry));
searchContainer.append(div);

