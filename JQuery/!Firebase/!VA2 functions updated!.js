function addNode(url, itemOBJ, priority) {
	var add2DB = new Firebase(url);

	if (priority)
		$.when(add2DB.setWithPriority(itemOBJ, priority)).done(function(x) {
		});
	else
		$.when(add2DB.set(itemOBJ)).done(function(x) {
		});

}

function addNodePUSH(url, itemOBJ) {
	var add2DB = new Firebase(url);

	$.when(add2DB.push(itemOBJ)).done(function(x) {
	});

}


function updateNodePreserveAll(url, itemOBJ, priority) {
	console.log('url' + url);

	var upd2DB = new Firebase(url);

	$.when(upd2DB.transaction(function(current_value) {
		
		for(var propertyName in current_value) {
			if (!itemOBJ[propertyName])
				itemOBJ[propertyName] = current_value[propertyName];
		}

		if (priority)
				itemOBJ['.priority'] = priority;
				
		return itemOBJ;
	})).done(function(x) {
		//console.log(new Date() + "updated!");
	});

	// if (priority) {
		// $.when(upd2DB.setPriority(priority)).done(function(x) {
		// });
	// }
}

function updateNode(url, itemOBJ, preserveColsArray, priority) {
	console.log('url' + url);

	var upd2DB = new Firebase(url);

	$.when(upd2DB.transaction(function(current_value) {
		if (preserveColsArray) {
			for (var i = 0; i < preserveColsArray.length; i++) {
				//only when snapshot^ contains the specific node/field
				if (current_value[preserveColsArray[i]])
					itemOBJ[preserveColsArray[i]] = current_value[preserveColsArray[i]];
			}
		}

		return itemOBJ;
	})).done(function(x) {
		//console.log(new Date() + "updated!");
	});

	if (priority) {
		$.when(upd2DB.setPriority(priority)).done(function(x) {
		});
	}
}

function updateNodeSET(url, itemOBJ, priority) {

	var upd2DB = new Firebase(url);

	for (var propertyName in itemOBJ) {
		$.when(upd2DB.child(propertyName).set(itemOBJ[propertyName])).done(function(x) {
		});
	}

	if (priority) {
		$.when(upd2DB.setPriority(priority)).done(function(x) {
		});
	}
}

function delNode(url) {

	var del2DB = new Firebase(url);

	$.when(del2DB.remove()).done(function(x) {
	});

}

function getNewNodeKey(url) {
	var getNewKey4DB = new Firebase(url);
	var ret = "";

	$.when(getNewKey4DB.push().name()).done(function(x) {
		ret = x;
	});

	return ret;
}