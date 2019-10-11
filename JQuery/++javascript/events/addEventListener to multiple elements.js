//http://www.pipiscrew.com/2018/06/selecting-multiple-elements-with-the-same-id-using-queryselectorall-and-use-the-returned-nodelist-object/

//rev 2
	Array.prototype.forEach.call(document.querySelectorAll('#btn_edit'), function(el) {

		el.addEventListener('click', function(e) {
			e.preventDefault();
			var x = getSelected(e.srcElement);
			console.log(x);
		})
		
	})
	
	function getSelected(e){

		var tr = e.parentNode.parentNode;

		var id = tr.cells[0].children[0].getAttribute('data-id');
		var forum_name = tr.cells[1].children[0].text;
		var forum_private = tr.cells[3].childElementCount;
		
		return { id, forum_name, forum_private };
	}

//rev 1
	 var tbl_btns = document.querySelectorAll("#btn_edit");

	 tbl_btns.forEach(function(elem) {
	 	elem.addEventListener("click", function(e) {
	 		e.preventDefault();
	 		var x = getSelected(e.srcElement);
	 		console.log(x);
	 	});
	 });
	
	function getSelected(e){

		var id = e.parentNode.parentNode.cells[0].children[0].getAttribute('data-id');
		var forum_name = e.parentNode.parentNode.cells[1].children[0].text;
		var forum_private = e.parentNode.parentNode.cells[3].childElementCount;
		
		return { id, forum_name, forum_private };
	}