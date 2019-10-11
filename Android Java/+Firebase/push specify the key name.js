					Firebase db2 = new Firebase("https://testarea.firebaseio.com/people/" + General.userID);
					db2.child("Cr").setValue(General.format2decimal(userCredit)); //write to root

					// add competition record to user
					Firebase db3 = db2.child(itemKey); //the new key speicfied by us
					db3.child("compTitle").setValue( Competition_Title);
					db3.child("compCr").setValue( Competition_Credit);
					db3.child("cause").setValue( cause_userChoiceText);  //cause here store it as text for reporting
					db3.child("when").setValue( General.getUTCforNOW());

// or add it via Map
//						Map<String, Object> firebaseMessage = new HashMap<String, Object>();
//						firebaseMessage.put("compTitle", Competition_Title);
//						firebaseMessage.put("compCr", Competition_Credit);
//						firebaseMessage.put("cause", cause_userChoiceText);  //cause here store it as text for reporting
//						firebaseMessage.put("when", General.getUTCforNOW());
//						db3.setValue(firebaseMessage);