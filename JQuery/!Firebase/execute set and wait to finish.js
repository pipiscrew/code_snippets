		for (var causeNo = 0; causeNo < selectedCats.length; causeNo++) {
			//console.log('https://' + baseURL + '/causecategories/' + selectedCats[causeNo][0] + '/causes/' + newID);

			var db52 = new Firebase('https://' + baseURL + '/causecategories/' + selectedCats[causeNo][0] + '/causes/' + newID);

			$.when(db52.set(record2)).done(function(x) {
				console.log(new Date() + "added" + record2);
			});

		}