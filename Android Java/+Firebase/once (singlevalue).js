//get the nodeID with 
	child.getName()
	
//and the parentNodeID with 
	child.getRef().getName()

		Firebase db = new Firebase("https://testarea.firebaseio.com/competitions/" + itemKey);
		
		db.limit(1);
		
		db.addListenerForSingleValueEvent(new ValueEventListener() {

			@Override
			public void onDataChange(DataSnapshot arg0) {
				TextView tx = (TextView) findViewById(R.id.txtCTitle);
				tx.setText(arg0.child("Title").getValue().toString());

				TextView tx2 = (TextView) findViewById(R.id.txtCComment);
				tx2.setText(arg0.child("Comment").getValue().toString());
				
				ImageView img =(ImageView) findViewById(R.id.CLogo);
				new DownloadImageTask((ImageView)  img).execute(arg0.child("Logo").getValue().toString());
			}
			
			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub
			}
		});
		
//when we have sub keys
		db = new Firebase("https://testarea.firebaseio.com/categories");
		
		db.limit(500);
		
		db.addListenerForSingleValueEvent(new ValueEventListener() {
			@Override
			public void onDataChange(DataSnapshot arg0) {
			
				for (DataSnapshot categories : arg0.getChildren()) {
					groups.add(categories.child("title").getValue().toString());	
				}
				
			}
		});