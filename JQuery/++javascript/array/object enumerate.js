


		for(var propertyName in myObject) {
		   // propertyName is what you want
		   // you can get the value like this: myObject[propertyName]
		}
		
		
//ex
		itemOBJ = {};
		itemOBJ = {
			title : $('#oCAUSE_name').val(),
			goal : $('#oCAUSE_goal').val(),
			goalsum : $('#oCAUSE_goalnow').val(),
			logo : $('#oCAUSE_logo').val(),
		};
						
		for(var propertyName in itemOBJ) 
				upd2DB.child(propertyName).set(itemOBJ[propertyName]);