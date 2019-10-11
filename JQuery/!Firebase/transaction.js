//https://www.firebase.com/docs/transactions.html

						//////////////////////////// BUILD SUB-NODE CAUSES TO AN OBJECT
						var causeItems = {};
						var causeitem;

						for (var causeNo = 0; causeNo < selectedCauses.length; causeNo++) {
							causeitem = {};
							causeitem['text'] = selectedCauses[causeNo][1];
							console.log(selectedCauses[causeNo][0] + selectedCauses[causeNo][1]);
							causeItems[selectedCauses[causeNo][0]] = causeitem;
						}
						//////////////////////////// BUILD SUB-NODE CAUSES TO AN OBJECT

						var db6 = new Firebase('https://testarea.firebaseio.com/competitions/' + $('#oCOMPETITION_updateID').val());

						db6.transaction(function(current_value) {
							return {
								"Cat" : $('#category').val(),
								"Comment" : $('#descr').val(),
								"Cr" : $('#credit').val(),
								"Logo" : $('#logo').val(),
								"Title" : $('#title').val(),
								"adminID" : userID,
								"dateStart" : getUTCfromGMT(dt1),
								"dateEnd" : endDate,
								"causes" : causeItems
							};
						});