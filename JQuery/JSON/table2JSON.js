//https://github.com/lightswitch05/table-to-json
<script>
$('#convert-table').click( function() {
  var table = $('#example-table').tableToJSON(); // Convert the table into a javascript object
  console.log(table);
  alert(JSON.stringify(table));
});
</script>

//^sample - http://lightswitch05.github.io/table-to-json/




//http://johndyer.name/html-table-to-json/
function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}