		Firebase db = new Firebase(General.baseURL + "/competitions/" + Competition_Key);
		
		db.addListenerForSingleValueEvent(new ValueEventListener() {

			@Override
			public void onDataChange(DataSnapshot base) {

				if (base.getValue() != null) {
					Firebase dbClone = new Firebase(General.baseURL + "/competitions_approved/" + Competition_Key);
					
					for(DataSnapshot item : base.getChildren()){
						dbClone.child(item.getName()).setValue(item.getValue());
					}
					
					//set priority
					dbClone.setPriority(base.child("date_start").getValue().toString());
				}
			}

			@Override
			public void onCancelled(FirebaseError arg0) {
				// TODO Auto-generated method stub
				
			}
		
		});