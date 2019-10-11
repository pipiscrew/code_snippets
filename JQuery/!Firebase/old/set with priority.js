//https://www.firebase.com/docs/javascript/firebase/setwithpriority.html

						//update
						var endDate = getUTCfromGMT(dt2);
						alert(endDate);
						
						var db6 = new Firebase('https://testarea.firebaseio.com/competitions/' + $('#oCOMPETITION_updateID').val());
						db6.setWithPriority({
							Cat : $('#category').val(),
							Comment : $('#descr').val(),
							Cr : $('#credit').val(),
							Logo: $('#logo').val(),
							Title: $('#title').val(),
							adminID: userID,
							dateStart : getUTCfromGMT(dt1),
							dateEnd : endDate
						}, endDate);