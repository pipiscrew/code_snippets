		private ChildEventListener listenerChild;
		
		db = new Firebase("https://testarea.firebaseio.com/competitions");

		db.startAt(General.getUTCforNOW());


		//child (KEYS) come 1by1 (the event fired multiple times)
		//use ON for 1event fire
		listenerChild = this.db.addChildEventListener(new ChildEventListener() {

			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub

			}

			@Override
			public void onChildAdded(DataSnapshot itemComp, String arg1) {
				if (itemComp.getValue() == null)
					return;

				CompetitionItem rec;
				String groupName = null;

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

			@Override
			public void onChildChanged(DataSnapshot arg0, String arg1) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onChildMoved(DataSnapshot arg0, String arg1) {
				// TODO Auto-generated method stub

			}

			@Override
			public void onChildRemoved(DataSnapshot arg0) {
				// TODO Auto-generated method stub

			}

		});
	}