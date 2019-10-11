//http://stackoverflow.com/a/24281246/1320686

//add and select it!
	$('#light_well').on('change', function() {
	
		 if (this.value == "**new**")  {
	
			var new_entry = prompt("Input the new record", "");
	
			if (!new_entry)
				return;
	
			var o = new Option(new_entry, "value");
			//var o = new Option(new_entry);
			o.selected=true;
			$("#" + this.name).append(o);
		}
	
	});