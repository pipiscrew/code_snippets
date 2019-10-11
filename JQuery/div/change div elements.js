//http://getbootstrap.com/components/#list-group-linked

//js
		var cats = "<a class='list-group-item active'> Επιλέξτε κατηγορία : </a>";
		
		for (var it=0; it<e.length; it++){
			cats+="<a href='#' class='list-group-item' data-name='"+ e[it]["categ_id"] +"'>" + e[it]['categ_name'] + "</a>";
		}
		
		
		// $("#categories").replaceWith(cats); //this replace complete the div
		$("#categories").html(cats);

//before
		<div id="categories" class="list-group">
		</div>
		
//after
		<div id="categories" class="list-group">
			<a class="list-group-item active"> Επιλέξτε κατηγορία : </a>
			<a href="#" class="list-group-item" data-name="1">Ad agencies</a>
			<a href="#" class="list-group-item" data-name="768">Ad networks</a>
			<a href="#" class="list-group-item" data-name="4">Communication agencies</a>
			<a href="#" class="list-group-item" data-name="12">Communication services</a>
			<a href="#" class="list-group-item" data-name="20">Creativity</a>
		</div>