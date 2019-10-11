		
		Firebase db = new Firebase(General.baseURL + "/countries");
		
		db.addListenerForSingleValueEvent(new ValueEventListener() {

			@Override
			public void onCancelled(FirebaseError arg0) {
				
			}

			@Override
			public void onDataChange(DataSnapshot arg0) {
				
				if (arg0.getValue()!=null)
				{
					CauseItem i = null;
					for (DataSnapshot country : arg0.getChildren()) {
						
						i= new CauseItem(country.getPriority().toString() , country.child("title").getValue().toString());
//						i= new CauseItem(country.getRef().getName() , country.child("title").getValue().toString());
					
						items.add(i);
					}
					
					changeCountry_showDialog(items);
					
				}
			}
			
		});