//https://www.firebase.com/docs/transactions.html
//http://runnable.com/UnA2UTlk6cVmAABB/firebase-tetris-example-for-javascript

function transPromo(arr_no, comp_id, promo_id){
	// sendO('https://' + baseURLC + '/competitions/' + comp_id + '/promos/' + promo_id);
	// return;
	var dbTR = new Firebase('https://' + baseURLC + '/competitions/' + comp_id + '/promos/' + promo_id);
	dbTR.transaction(function(current_value) {
		
			if (current_value!=null){
				  if (current_value["is_used"]<1)
					current_value["is_used"]+=1;
				  else
					return; //ABORT THE TRANSACTION - the !committed
			 }
			 
			 return current_value;
	}, function(error, committed, snapshot) {
		// if (snapshot.val()!=null)
			// if (snapshot.val().is_used==8)
			if (!committed)
			{
					promosArr[arr_no]["used"]=1;
					find_promo();
			}
			else if (committed)
			{
				sendO("ok");
				//push+mail
			}
		}
	);
}	