//http://theopentutorials.com/tutorials/android/listview/android-expandable-list-view-example/

public class MainActivity2 extends ExpandableListActivity implements OnChildClickListener {
	ExpandableListView expListView;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		expListView = getExpandableListView();
	}

//on child click
	@Override
	public boolean onChildClick(ExpandableListView arg0, View arg1, int groupPosition, int childPosition, long id) {
		CompetitionItem tt = groupsItems.get(groups.get(groupPosition)).get(childPosition);
		
//        Toast.makeText(
//                getApplicationContext(),tt.getTitle(), Toast.LENGTH_SHORT)
//                .show();
		
		 Intent myIntent;
		 myIntent = new Intent().setClass(MainActivity2.this,
		 Competition_Details.class);
		 myIntent.putExtra("itemKey", tt.getkey());
		 startActivity(myIntent);
		
        
		return false;
	}