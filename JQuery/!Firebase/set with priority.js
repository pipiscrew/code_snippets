//simple
		var dbSaveAndroid = new Firebase('http://' + baseURLC + '/competitions/' + comp_id + '/bids/' + user_id + '/send_push_android');
		dbSaveAndroid.set(info.success);
				
//by child
						var db6 = new Firebase('https://testarea.firebaseio.com/competitions/' + $('#oCOMPETITION_updateID').val());
						//if use, this delete any other child nodes!
						// db6.setWithPriority({
						// Cat : $('#category').val(),
						// Comment : $('#descr').val(),
						// Cr : $('#credit').val(),
						// Logo: $('#logo').val(),
						// Title: $('#title').val(),
						// adminID: userID,
						// dateStart : getUTCfromGMT(dt1),
						// dateEnd : endDate
						// }, endDate);

						db6.child('Cat').set($('#category').val());
						db6.child('Comment').set($('#descr').val());
						db6.child('Cr').set($('#credit').val());
						db6.child('Logo').set($('#logo').val());
						db6.child('Title').set($('#title').val());
						db6.child('adminID').set(userID);
						db6.child('dateStart').set(getUTCfromGMT(dt1));
						db6.child('dateEnd').set(endDate);

						db6.setPriority(endDate);