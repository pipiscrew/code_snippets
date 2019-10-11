//activity

public class Messaging extends Activity implements OnItemClickListener {

	// listview
	private ListView lstv;
	private MessagingAdapter listAdapter;
	private List<Generic4lstv> rowItems = null;

	// indicator
	private ImageView Indicator;

	private Firebase db;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_messaging);

		rowItems = new ArrayList<Generic4lstv>();
				
		// lstv
		lstv = (ListView) findViewById(R.id.lstv_mess);
		lstv.setOnItemClickListener(this);
		listAdapter = new MessagingAdapter(this, rowItems);
		lstv.setAdapter(listAdapter);

		// indicator
		Indicator = (ImageView) findViewById(R.id.indicatorLbCmess);
		// startIndicator();

		queryDB();
	}

	public void startIndicator() {
		RotateAnimation rotation = new RotateAnimation(0f, 360f, Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
		rotation.setDuration(1200);
		rotation.setInterpolator(new LinearInterpolator());
		rotation.setRepeatMode(Animation.RESTART);
		rotation.setRepeatCount(Animation.INFINITE);

		Indicator.startAnimation(rotation);
	}

	public void stopIndicator() {
		Indicator.setVisibility(View.INVISIBLE);
		Indicator.setAnimation(null);
	}

	public void queryDB() {
		if (!Sigl.getInstance().getIsConnected() || !Sigl.getInstance().getIsAuthenticated()) {
			Toast.makeText(Messaging.this, R.string.notconnected, Toast.LENGTH_SHORT).show();
			return;
		}

		if (Indicator.getVisibility() == View.INVISIBLE)
			startIndicator();

		// clear list
		rowItems.clear();

		// inform the adapter
		listAdapter.notifyDataSetChanged();

		db = new Firebase(Sigl.getInstance().getBaseURL() + "/people/" + Sigl.getInstance().getUserID() + "/messages");

		db.addListenerForSingleValueEvent(new ValueEventListener() {

			@Override
			public void onCancelled(FirebaseError arg0) {
				stopIndicator();
			}

			@Override
			public void onDataChange(DataSnapshot arg0) {

				if (arg0.getValue() == null)
					stopIndicator();

				Generic4lstv rec;

				for (DataSnapshot mes : arg0.getChildren()) {

					rec = new Generic4lstv();

					rec.setRowID(mes.getRef().getName());
					rec.setRowText(mes.child("body").getValue().toString());
					rec.setRowTextDate(General.getDateStringFromUNIX(mes.child("when").getValue().toString()));
					// rec.setImgURL(mes.child("date_end").getValue().toString());

					if (mes.child("is_red").getValue().toString().equals("0"))
						rec.setIsSelected(false);
					else
						rec.setIsSelected(true);

					rowItems.add(rec);

				}

				listAdapter.notifyDataSetChanged();

				stopIndicator();
			}

		});
	}
	
	 @Override
	public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {

		if (!rowItems.get(arg2).getIsSelected()) {
			
			db = new Firebase(Sigl.getInstance().getBaseURL() + "/people/" + Sigl.getInstance().getUserID() + "/messages/" + rowItems.get(arg2).getRowID());
			db.child("is_red").setValue(1);
			
			rowItems.get(arg2).setIsSelected(true);
		}
		else 
		{
			db = new Firebase(Sigl.getInstance().getBaseURL() + "/people/" + Sigl.getInstance().getUserID() + "/messages/" + rowItems.get(arg2).getRowID());
			db.child("is_red").setValue(0);
			
			rowItems.get(arg2).setIsSelected(false);
		}

		listAdapter.notifyDataSetChanged();
	}

}

	
	
//adapter
public class MessagingAdapter extends BaseAdapter {

	private List<Generic4lstv> data;
	private LayoutInflater mLayoutInflater;
	
	public MessagingAdapter(Context context, List<Generic4lstv> items) {
		this.data = items;
		
		 //get the layout inflater
	    mLayoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
	}

	@Override
	public int getCount() {
		//getCount() represents how many items are in the mItemArrayList
		return data.size();
	}

	@Override
	public Object getItem(int position) {
		//get the data of an item from a specific position
		//it represents the position of the item in the mItemArrayList
		return data.get(position);
	}

	@Override
	public long getItemId(int position) {
		//get the position id of the item from the mItemArrayList
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup arg2) {

		// create a ViewHolder reference
		ViewHolder holder;

		//check to see if the reused view is null or not, if is not null then reuse it
		if (convertView == null) {
			holder = new ViewHolder();
			
			convertView = mLayoutInflater.inflate(R.layout.activity_messaging_row, null);

			holder.rowText = (TextView) convertView.findViewById(R.id.titleTextView);
			holder.rowDate = (TextView) convertView.findViewById(R.id.dateTextView);
			holder.rowImage = (ImageView) convertView.findViewById(R.id.mailIcon);

			// store the holder with the view.
			convertView.setTag(holder);

		} else {
			// the getTag returns the viewHolder object set as a tag to the view
			//
			// we've just avoided calling findViewById() on resource everytime just use the viewHolder
			holder = (ViewHolder) convertView.getTag();
		}

		// dont inflate all the time *proper*
		// http://stackoverflow.com/questions/20843796/listview-with-viewholder-textviews-change-content

		// get item @ position *proper*
		// http://stackoverflow.com/questions/7136158/dynamically-change-textview-font-color-in-listview

		// dont update the UI based on data speeds
		// http://stackoverflow.com/questions/19025841/how-to-update-some-data-in-a-listview-without-using-notifydatasetchanged

		Generic4lstv item = (Generic4lstv) getItem(position);

		if (item == null) {
			Log.w("wwwwwww", "isnull!!!");
		} else {
			holder.rowText.setText(item.getRowText());
			holder.rowDate.setText(item.getRowTextDate());

			if (item.getIsSelected()) { // aka is red
				Log.w("wwwwwww", "IsSelected" + item.getRowID());
				holder.rowText.setTextColor(Color.GRAY);
				holder.rowImage.setImageResource(R.drawable.mail);
			} else {
				Log.w("wwwwwww", "Is NOT Selected" + item.getRowID());
				holder.rowText.setTextColor(Color.BLACK);
				holder.rowImage.setImageResource(R.drawable.mail_new);
			}
		}

		//this method must return the view corresponding to the data at the specified position.
		return convertView;
	}

	
	/**
	 * Static class used to avoid the calling of "findViewById" every time the getView() method is called,
	 * because this can impact to your application performance when your mItemArrayList is too big. The class is static so it
	 * cache all the things inside once it's created.
	 */
	private static class ViewHolder {
		protected  ImageView rowImage;
		protected TextView rowText;
		protected TextView rowDate;
	}
}