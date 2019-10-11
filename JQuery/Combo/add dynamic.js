//http://stackoverflow.com/a/14447147

$('#mySelect').append($('<option>', {
    value: 1,
    text: 'My option'
}));

If you're adding options from a collection of items, you can do the following:

$.each(items, function (i, item) {
    $('#mySelect').append($('<option>', { 
        value: item.value,
        text : item.text 
    }));
});
