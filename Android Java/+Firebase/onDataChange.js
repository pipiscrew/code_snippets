//single values (keys)
		onDataListener=julieRef.addValueEventListener(new ValueEventListener() {
		     @Override
		     public void onDataChange(DataSnapshot snapshot) {
		         Object value = snapshot.getValue();
		         if (value == null) {
		        	 writeLog("\r\nUser julie doesn't exist");
		        	 
		         } else {
		        	
		             String firstName = (String)((Map)value).get("first");
		             String lastName = (String)((Map)value).get("second");
		         }
		     }

		     @Override
		     public void onCancelled() {
		    	 TextView t = (TextView) findViewById(R.id.tblrow);
					t.append("\r\nListener was cancelled");
					
		     }
		 });

	}

//keys in keys
 		private ValueEventListener listenerChild;
 
		db = new Firebase("https://testarea.firebaseio.com/competitions");

		db.startAt(General.getUTCforNOW());

		listenerChild = this.db.addValueEventListener(new ValueEventListener() {

			@Override
			public void onDataChange(DataSnapshot arg0) {
				if (arg0.getValue() == null)
					return;

				CompetitionItem rec;
				String groupName = null;

				// for each competition aka for each KEY
				for (DataSnapshot itemComp : arg0.getChildren()) {

					// get tree causes
					DataSnapshot causesList = itemComp.child("causes");

					if (causesList != null) {
						for (DataSnapshot causeItem : causesList.getChildren()) {
							// get cause name
							groupName = causeItem.child("text").getValue().toString();

							// check if exist to List<String>
							if (groups.indexOf(groupName) == -1)
								groups.add(groupName);
						}
					}

					// group item
					rec = new CompetitionItem();

					rec.setkey(itemComp.getRef().getName());
					rec.setTitle(itemComp.child("Title").getValue().toString());
					rec.setDateStart(itemComp.child("dateStart").getValue().toString());
					rec.setDateEnd(itemComp.child("dateEnd").getValue().toString());
					rec.setComment(itemComp.child("Comment").getValue().toString());
					rec.setWinner(itemComp.child("Winner").getValue().toString());
					rec.setLogo(itemComp.child("Logo").getValue().toString());

					Boolean addIT = true;
					for (DataSnapshot causeItem : causesList.getChildren()) {
						addIT = true;
	
						// get cause name
						groupName = causeItem.child("text").getValue().toString();
	
						for (Entry<String, ArrayList<CompetitionItem>> e : groupsItems.entrySet()) {
							if (e.getKey().equalsIgnoreCase(groupName)) {
								ArrayList<CompetitionItem> valueMap = e.getValue();
								valueMap.add(rec);
								e.setValue(valueMap);
								addIT = false;
								break;
							}
						}
	
						if (addIT)
						{
							ArrayList<CompetitionItem> tmp = new ArrayList<CompetitionItem>();
							tmp.add(rec);
							
							groupsItems.put(groupName, tmp );
							tmp=null;
						}
	
					}
	
					expListAdapter.notifyDataSetChanged();
				}
		});