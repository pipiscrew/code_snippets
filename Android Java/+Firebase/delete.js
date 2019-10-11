				Firebase db2 = new Firebase("https://testarea.firebaseio.com/competitions/" + itemKey + "/bids/" + General.userID);
				db2.removeValue();