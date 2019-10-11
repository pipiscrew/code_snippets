
			/////////////////////////////////////////////////////////
			//universal function to insert node to a firebase URL
			function addNode(url, itemOBJ, priority) {
				var add2DB = new Firebase(url);

				if (priority)
					$.when(add2DB.setWithPriority(itemOBJ, priority)).done(function(x) {
						//console.log(new Date() + "added!");
					});
				else
					$.when(add2DB.set(itemOBJ)).done(function(x) {
						//console.log(new Date() + "added!");
					});

			}

			/////////////////////////////////////////////////////////
			//universal function to update node to a firebase URL
			function updateNode(url, itemOBJ, preserveColsArray, priority) {
				console.log('url' + url);

				var upd2DB = new Firebase(url);

				$.when(upd2DB.transaction(function(current_value) {
					if (preserveColsArray) {
						for (var i = 0; i < preserveColsArray.length; i++)
							itemOBJ[preserveColsArray[i]] = current_value[preserveColsArray[i]];
					}

					return itemOBJ;
				})).done(function(x) {
					//console.log(new Date() + "updated!");
				});

				if (priority) {
					$.when(upd2DB.setPriority(priority)).done(function(x) {
						//console.log(new Date() + "updated!");
					});
				}
			}

			/////////////////////////////////////////////////////////
			//universal function to update node to a firebase URL
			function updateNodeSET(url, itemOBJ, priority) {

				var upd2DB = new Firebase(url);

				for (var propertyName in itemOBJ) {
					$.when(upd2DB.child(propertyName).set(itemOBJ[propertyName])).done(function(x) {
						//console.log(new Date() + "updated!");
					});
				}

				if (priority) {
					$.when(upd2DB.setPriority(priority)).done(function(x) {
						//console.log(new Date() + "updated!");
					});
				}
			}

			/////////////////////////////////////////////////////////
			//universal function to delete a node by firebase URL
			function delNode(url) {

				var del2DB = new Firebase(url);

				$.when(del2DB.remove()).done(function(x) {
					//console.log(new Date() + "deleted!");
				});

			}

			/////////////////////////////////////////////////////////
			//universal function get a new key by node
			function getNewNodeKey(url) {
				var getNewKey4DB = new Firebase(url);
				var ret = "";

				$.when(getNewKey4DB.push({}).toString()).done(function(x) {
					ret = x;
				});

				return ret;
			}

			/////////////////////////////////////////////////////////
			//universal function substring the node key from URL
			function trimKey4URL(url) {
				return url.substring(url.lastIndexOf("/") + 1, url.length);
			}
			
//examples


						var record = {
							title : $('#oCAUSE_name').val(),
							goal : $('#oCAUSE_goal').val(),
							goalsum : $('#oCAUSE_goalnow').val(),
							logo : $('#oCAUSE_logo').val(),
						};
					
//delNode('https://' + baseURL + '/causes/-J4o6r7aLDLPs1Ut7j4N');
// updateNodeSET('https://' + baseURL + '/causes/-J4o6r7aLDLPs1Ut7j4N',record,33);
						// var preserver = [];
// 						
						// preserver[0] = "ccategories";
						// preserver[1] = "comp";
// 						
// updateNode('https://' + baseURL + '/causes/-J4o6r7aLDLPs1Ut7j4N',record,preserver);


//addnew 

						var catItemsF = {};
						catItemsF['cats'] = catItems;

						///////////// INSERT TO CAUSES
						//prepare array for causes insertion
						var record = {
							title : $('#oCAUSE_name').val(),
							goal : $('#oCAUSE_goal').val(),
							goalsum : $('#oCAUSE_goalnow').val(),
							logo : $('#oCAUSE_logo').val(),
							ccategories : catItemsF
						};

						//ask firebase for new cause key
						var newID = getNewNodeKey('https://' + baseURL + '/causes');

						//insert array to new cause key!
						addNode(newID, record, null);

						///////////// INSERT TO CAUSES CATEGORIES
						//prepare array for causecategories insertion
						var record2 = {
							title : $('#oCAUSE_name').val(),
							goal : $('#oCAUSE_goal').val(),
							goalsum : $('#oCAUSE_goalnow').val(),
							logo : $('#oCAUSE_logo').val()
						};

						//get only the node key from url
						newID = trimKey4URL(newID);

						//add record to cause categories tree
						for (var causeNo = 0; causeNo < selectedCats.length; causeNo++) {
							addNode('https://' + baseURL + '/causecategories/' + selectedCats[causeNo][0] + '/causes/' + newID, record2, null);
						}
						


