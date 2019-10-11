//class should be like 
	public class ListBySupporters extends Activity implements OnItemClickListener {

//then @ click

	@Override
	public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {
		// TODO Auto-generated method stub
		 Toast.makeText(ListBySupporters.this, rowItems.get(arg2).getId(),	Toast.LENGTH_SHORT).show();

//		Intent myIntent;
//		myIntent = new Intent().setClass(MainActivity2.this, Competition_Details.class);
//		myIntent.putExtra("itemKey", rowItems.get(arg2).getkey());
//		startActivity(myIntent);
		
	}