import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.RotateAnimation;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.PopupMenu;
import android.widget.PopupMenu.OnMenuItemClickListener;
import android.widget.Toast;

import com.firebase.client.DataSnapshot;
import com.firebase.client.Firebase;
import com.firebase.client.FirebaseError;
import com.firebase.client.ValueEventListener;
import com.tc.contests.swipedismiss.SwipeDismissListViewTouchListener;

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

		SwipeDismissListViewTouchListener touchListener = new SwipeDismissListViewTouchListener(lstv, new SwipeDismissListViewTouchListener.DismissCallbacks() {
			@Override
			public boolean canDismiss(int position) {
				return true;
			}

			@Override
			public void onDismiss(ListView listView, int[] reverseSortedPositions) {
				for (int position : reverseSortedPositions) {

					db = new Firebase(Sigl.getInstance().getBaseURL() + "/people/" + Sigl.getInstance().getUserID() + "/messages/" + rowItems.get(position).getRowID());
					db.removeValue();

					rowItems.remove(position);

				}
				listAdapter.notifyDataSetChanged();
			}
		});
		lstv.setOnTouchListener(touchListener);
		// Setting this scroll listener is required to ensure that during
		// ListView scrolling,
		// we don't look for swipes.
		lstv.setOnScrollListener(touchListener.makeScrollListener());

		// indicator
		Indicator = (ImageView) findViewById(R.id.indicatorLbCmess);
		startIndicator();

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

					rowItems.add(0, rec);
//					rowItems.add(rec);

				}

				listAdapter.notifyDataSetChanged();

				stopIndicator();

			}

		});
		

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.messaging, menu);
		return true;
	}

	public void options_Clicked(View view) {
		PopupMenu popup = new PopupMenu(Messaging.this, view);

		/** Adding menu items to the popumenu */
		popup.getMenuInflater().inflate(R.menu.user__profile, popup.getMenu());

		/** Defining menu item click listener for the popup menu */
		popup.setOnMenuItemClickListener(new OnMenuItemClickListener() {

			@Override
			public boolean onMenuItemClick(MenuItem item) {
				Intent myIntent;
				switch (item.getItemId()) {
				case R.id.mainmenu:
					myIntent = new Intent().setClass(Messaging.this, MainActivity2.class);
					myIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
					startActivity(myIntent);
					// finish();
					return true;
				case R.id.menuByCauses:
					myIntent = new Intent().setClass(Messaging.this, ListByCauses.class);
					startActivity(myIntent);
					// finish();
					return true;
				case R.id.menuBySupporters:
					myIntent = new Intent().setClass(Messaging.this, ListBySupporters.class);
					startActivity(myIntent);
					// finish();
					return true;
				default:
					return true;
				}
			}
		});

		/** Showing the popup menu */
		popup.show();
	}
	
//	private final int interval = 200;
//	private Handler handler = new Handler();
//	private Runnable runnable = new Runnable(){
//	    public void run() {
//	    	listAdapter.notifyDataSetChanged();
//	    }
//	};
	
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
