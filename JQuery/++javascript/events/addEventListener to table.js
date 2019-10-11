<table class="table table-hover" id="forums">
    <thead>
        <tr>
            <th>Type</th>
            <th>Forum</th>
            <th>Last Activity</th>
        </tr>
    </thead>
    <tbody>


        <tr class="topics">
            <td>
                <img src="assets/cat_icon.png" class="img-polaroid" data-id="1">
            </td>
            <td id="ids">
                <a href="list_topics.php?id=1">Health</a>
            </td>
            <td>2018-06-04</td>
        </tr>

    </tbody>
</table>
				

//everywhere on the row clicked gets the cell, the first element, and reading the data-id attribute
document.querySelector("#forums tbody").addEventListener("click", function(event) {
	console.log(event.target.parentNode.cells[0].children[0].getAttribute('data-id'));
});
//td = event.target
//tr = event.target.parentNode
//first cell = cells[0]
//get first element that exist to cell = children[0]
//read from first element the data attribute = getAttribute

//alternative https://stackoverflow.com/a/46341384

//closest - https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

//get+set data attribute - https://plainjs.com/javascript/attributes/setting-getting-and-removing-data-attributes-8/