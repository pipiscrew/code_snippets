function getSelected(e){

	tr = e.parentNode.parentNode;

	var id = tr.cells[0].children[0].getAttribute('data-id');
	var forum_name = tr.cells[1].children[0].text;
	var forum_private = tr.cells[3].childElementCount;
	
	return { id, forum_name, forum_private };
}

e.parentNode.parentNode;
	
tr.cells[3].firstChild.remove();

var t = (tr.cells[3].firstChild);
t.style.display = 'none';

tr.cells[3].childElementCount == 0

tr.cells[1].children[0].text = "test"
tr.cells[3].innerHTML = '<span class="glyphicon glyphicon-ok">';