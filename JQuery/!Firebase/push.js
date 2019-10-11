						var db5 = new Firebase('https://testarea.firebaseio.com/competitions');
						
						db5.push({
							 Cat : $('#category').val(),
							 Comment : $('#descr').val(),
							 Cr : $('#credit').val(),
							 Logo: $('#logo').val(),
							 Title: $('#title').val(),
							 adminID: userID,
							 dateStart : getUTCfromGMT(dt1),
							 dateEnd : getUTCfromGMT(dt2)
						 });