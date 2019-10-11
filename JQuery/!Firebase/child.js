	var dbQuery = new Firebase('https://' + baseURL + '/people');

	var users_ids = "";

	dbQuery.once('value', function(snapshot) {

		snapshot.forEach(function(person) {

			var category = person.child('categories/' + category_id);

			if (category.val() != null) {
					if (category.val() == "1")
						users_ids += person.name() + "|";
			}
		});
		
		console.log("bb" + users_ids);

	});