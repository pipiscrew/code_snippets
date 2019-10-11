//tested bootstrap v3.1.1
//http://getbootstrap.com/javascript/ -- Single toggle
		<button id="sort_order" type="button" class="btn btn-default" data-toggle="button" value="ASC">αντίστροφη ταξινόμηση</button>
		
		
		$('#sort_order').click(function() {
			if ($(this).val()=="ASC")
				$(this).val("DESC");
			else 
				$(this).val("ASC");
				
				console.log($(this).val());
		});