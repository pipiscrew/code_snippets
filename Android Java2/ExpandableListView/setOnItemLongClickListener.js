//http://stackoverflow.com/a/8320128
		ExpandableListView expListView;
		
		expListView = getExpandableListView();


		expListView.setOnItemLongClickListener(new OnItemLongClickListener() {

			@Override
			public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
			       if (ExpandableListView.getPackedPositionType(id) == ExpandableListView.PACKED_POSITION_TYPE_CHILD) {
			            int groupPosition = ExpandableListView.getPackedPositionGroup(id);
			            int childPosition = ExpandableListView.getPackedPositionChild(id);
			            
						List<RecordItem> child = head.get(groupList.get(groupPosition));
						 String del_id = child.get(childPosition).getTitle();
//						child.remove(childPosition);
						Log.w("sdfsd",del_id);

			            // You now have everything that you would as if this was an OnChildClickListener() 
			            // Add your logic here.

			            // Return true as we are handling the event.
			            return true;
			        }

			        return false;
			}
		});