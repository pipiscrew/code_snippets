			function getNewNodeKey(url) {
				var getNewKey4DB = new Firebase(url);
				var ret = "";

				$.when(getNewKey4DB.push().name()).done(function(x) {
				// $.when(getNewKey4DB.push({}).toString()).done(function(x) {
					console.log(x);
					ret = x;
				});

				return ret;
			}
			
			
//The id is unique across all paths; it doesn’t matter which path you request it for.

//Additionally, instead of using toString(), you should be using name(), and there is no need to push a value