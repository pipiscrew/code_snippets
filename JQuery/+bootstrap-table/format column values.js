//icons @ http://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp
	    function statFormatter(value, row) {
	    	
	    	var icon_stat = '<span class="glyphicon glyphicon-remove">';
			
			if (value != null && value == 1)
			{
				 icon_stat = '<span class="glyphicon glyphicon-ok">';
			}
			
			return icon_stat;
		}
		


//http://wenzhixin.net.cn/p/bootstrap-table/docs/examples.html#format-table

//encodeURI - https://www.w3schools.com/jsref/jsref_encodeURI.asp
function urlFormatter(value, row) {
	
	if (value && value!="null")
	{
		var s = "<a href='" + row.feed_url + "' target='_blank'>" + row.feed_url + "</a>";
		return s;
	}
	else 
		return "";
}


<table id="table-format" data-url="data1.json" data-height="299">
    <thead>
    <tr>
        <th data-field="id">Item ID</th>
        <th data-field="name" data-formatter="nameFormatter">Item Name</th>
        <th data-field="price" data-formatter="priceFormatter">Item Price</th>
    </tr>
    </thead>
</table>
<script>
    function nameFormatter(value, row) {
        var icon = row.id % 2 === 0 ? 'glyphicon-star' : 'glyphicon-star-empty'

        return '<i class="glyphicon ' + icon + '"></i> ' + value;
    }

    function priceFormatter(value) {
        // 16777215 == ffffff in decimal
        var color = '#'+Math.floor(Math.random() * 6777215).toString(16);
        return '<div  style="color: ' + color + '">' +
                '<i class="glyphicon glyphicon-usd"></i>' +
                value.substring(1) +
                '</div>';
    }
</script>