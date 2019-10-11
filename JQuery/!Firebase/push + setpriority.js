//1st ex.
	var add2DB = new Firebase(url);
	
	vat itemOBJ = {
		title : $('#oCATEGORY_name').val(),
		logo : $('#oCATEGORY_logo').val(),
		'.priority' : companyCountry
		}
	
	add2DB.push(itemOBJ)


//2nd ex.
						var db5 = new Firebase('https://testarea.firebaseio.com/competitions');

						var newID = db5.push({
						}).toString();

						var db5b = new Firebase(newID);
						db5b.setWithPriority({
							Cat : $('#category').val(),
							Comment : $('#descr').val(),
							Cr : $('#credit').val(),
							Logo : $('#logo').val(),
							Title : $('#title').val(),
							adminID : userID,
							dateStart : getUTCfromGMT(dt1),
							dateEnd : endDate
						}, endDate);