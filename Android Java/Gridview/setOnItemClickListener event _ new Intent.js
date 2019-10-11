		// GRID LISTENER
		grid.setOnItemClickListener(new OnItemClickListener() {

			public void onItemClick(AdapterView<?> parent, View v, int position, long id) {
				Intent i = new Intent(v.getContext(), MainActivity2.class);
				i.putExtra("ID",id);
				startActivity(i);
			}
		});