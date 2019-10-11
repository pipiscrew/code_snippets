//enumerate all items with
$("#select2> option").each(function() {
    console.log(this.text + ' ' + this.value);
});