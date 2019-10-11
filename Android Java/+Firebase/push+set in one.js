				// update user credits
				Firebase db2 = new Firebase("https://testarea.firebaseio.com/people/" + General.userID);
				db2.child("Cr").setValue(General.format2decimal(userCredit));

				// add competition record to user
				Map<String, Object> firebaseMessage = new HashMap<String, Object>();
				firebaseMessage.put("compID", itemKey);
				firebaseMessage.put("compTitle", Competition_Title);
				firebaseMessage.put("compCr", Competition_Credit);
				firebaseMessage.put("cause", cause_userChoiceText);  //cause here store it as text for reporting
				firebaseMessage.put("when", General.getUTCforNOW());

				Firebase db2push = db2.push();
				db2push.setValue(firebaseMessage);