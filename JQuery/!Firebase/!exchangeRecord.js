//usage
////////////get selected
	var selectedCats = get_multiselected('#oCAUSE_categories');

			//get the selected items to an array (val,text)
			function get_multiselected($el) {
				var ret = true;
				var arr = [];
				var i = 0;

				$('option', $el).each(function(element) {
					if ($(this).prop('selected')) {
						if ($(this).val() != 'multiselect-all') {

							arr[i] = [];
							arr[i][0] = $(this).val();
							arr[i][1] = $(this).text();

							i += 1;
						}
					}
				});

				return arr;
			}

////////////record			
						var record = {
							title : $('#oCAUSE_name').val(),
							goal : $('#oCAUSE_goal').val(),
							goalsum : $('#oCAUSE_goalnow').val(),
							logo : $('#oCAUSE_logo').val(),
						};
		
////////////before
					var db4b = db4.child($(this).attr('data-name') + '/ccategories/cats');
					db4b.once('value', function(snapshot) {
						if (snapshot.val() === null) {
							console.log('ccategoriesEDIT - I got a null result.');
						} else {
							var causeCategoriesBefore = "";
							snapshot.forEach(function(causeCategories) {
								$('#oCAUSE_categories').multiselect('select', causeCategories.name());
								causeCategoriesBefore += causeCategories.name() + "|";
							});

							//set the db causes values to an attribute so later on save
							//compare if needed to delete it!!!!
							$("#oCAUSE_categories").data("before", causeCategoriesBefore);
						}
					});
					
exchangeRecord('https://' + baseURL + '/causecategories', 'causes', $('#oCAUSE_updateID').val(), $("#oCAUSE_categories").data('before'), selectedCats, record, null);

//function
			function exchangeRecord(rootURL, subkeyURL, parentNewNodeKey, valsBeforeSeperated, valsNowArray, recordOBJ, priority) {
				var itemsOLDArray = valsBeforeSeperated.split('|');
				var itemFoundPosition = false;

				//for each old items
				for (var c = 0; c < itemsOLDArray.length - 1; c++) {

					itemFoundPosition = false;

					//for each current values
					for (var i = 0; i < valsNowArray.length; i++) {
						//if old cause exists to new causes
						if (itemsOLDArray[c] == valsNowArray[i][0]) {
							//mark it that will updated + dont insert/add it!
							valsNowArray[i][0] = "";
							itemFoundPosition = true;
							break;
							//exit for loop
						}
					}

					//when found (exist to old + new array)
					if (itemFoundPosition == true) {
						//when found update!
						console.log("update-" + itemsOLDArray[c]);

						updateNode(rootURL + "/" + itemsOLDArray[c] + "/" + subkeyURL + "/" + parentNewNodeKey, recordOBJ, priority)
					} else {
						//when no found delete!
						console.log("del-" + itemsOLDArray[c]);
						delNode(rootURL + "/" + itemsOLDArray[c] + "/" + subkeyURL + "/" + parentNewNodeKey);
					}
				}

				///////////////////////////////////// ADD PROCEDURE
				for (var z = 0; z < valsNowArray.length; z++) {
					if (valsNowArray[z][0] != "") {
						console.log("add-" + valsNowArray[z][0]);
						addNode(rootURL + "/" + valsNowArray[z][0] + "/" + subkeyURL + "/" + parentNewNodeKey, recordOBJ, priority)
					}
				}
			}