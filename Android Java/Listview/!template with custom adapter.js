//main activity CODE
	public class ListByCauses  extends Activity implements OnItemClickListener  {
	
		private Firebase db = null;
		private ChildEventListener listenerChild;
	
		ListView lstv;
		List<CauseItem> rowItems = new ArrayList<CauseItem>();
		ListByCausesAdapter listAdapter;
	
		@Override
		protected void onCreate(Bundle savedInstanceState) {
			super.onCreate(savedInstanceState);
			setContentView(R.layout.activity_list_by_causes);
	
			// /////////////////////////////////////////////////////////// setup
			// listview
			lstv = (ListView) findViewById(R.id.lstv_CAUSES);
			lstv.setOnItemClickListener(this);
			listAdapter = new ListByCausesAdapter(this, rowItems);
			lstv.setAdapter(listAdapter);
			// /////////////////////////////////////////////////////////// setup
			// listview
	
			queryDB();
		}

//activity adapter
		import java.util.List;
		
		import android.app.Activity;
		import android.content.Context;
		import android.view.LayoutInflater;
		import android.view.View;
		import android.view.ViewGroup;
		import android.widget.BaseAdapter;
		import android.widget.ImageView;
		import android.widget.ProgressBar;
		import android.widget.TextView;
		
		import com.fedorvlasov.lazylist.ImageLoader;
		
		import com.fedorvlasov.lazylist.ImageLoader;
		
		public class ListByCausesAdapter extends BaseAdapter {
		
			private List<CauseItem> data;
			private Activity context;
			private ImageLoader imageLoader;
		
			public ListByCausesAdapter(Activity a, List<CauseItem> items) {
				this.context = a;
				this.data = items;
				this.imageLoader = new ImageLoader(this.context.getApplicationContext());
			}
		
			@Override
			public int getCount() {
				return data.size();
			}
		
			@Override
			public Object getItem(int position) {
				return data.get(position);
			}
		
			@Override
			public long getItemId(int position) {
				// TODO Auto-generated method stub
				return position;
			}
		
			@Override
			public View getView(int position, View convertView, ViewGroup arg2) {
				LayoutInflater infalInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
				convertView = infalInflater.inflate(R.layout.activity_list_by_causes_row, null);
		
				ViewHolder holder;
				holder = new ViewHolder();
				holder.title = (TextView) convertView.findViewById(R.id.titleCAUSElist);
				holder.counterTXT = (TextView) convertView.findViewById(R.id.titleCAUSElistCounter);
				holder.counter = (ProgressBar) convertView.findViewById(R.id.prgCAUSElistCounter);
				
				holder.image = (ImageView) convertView.findViewById(R.id.logoCAUSEitem);
		
				holder.title.setText(data.get(position).getName());
		
				// goal + goalSUM
				// holder.counter.setText(getCompetitionEnd(data.get(position).dateEnd));
				int perc = getPercentage(data.get(position).getGoal(), data.get(position).getGoalSUM());
				holder.counter.setProgress(perc);
				
		
					
				
				holder.counterTXT.setText(" " + String.valueOf(perc) + " % ");
		
			
				if (data.get(position).getLogo().toLowerCase().startsWith("http://")) {
					imageLoader.DisplayImage(data.get(position).getLogo(), holder.image);
				} else
					holder.image.setImageResource(R.drawable.empty);
		
				return convertView;
			}
		
			private int getPercentage(String goalI, String goalSUMI) {
				float goal = Float.parseFloat(goalI);
				float goalSUM = Float.parseFloat(goalSUMI);
		
				float result;
		
				result = goalSUM * 100 / goal;
		
				return (int)(Math.round(result));
			}
		
			class ViewHolder {
				TextView title;
				ProgressBar counter;
				TextView counterTXT;
				ImageView image;
			}
		}
		

//CauseItemClass
	public class CauseItem {
		private String id;
		private String name;
		private String competitionCount;
		private String logo;
		private String goal;
		private String goalSUM;
		
		public CauseItem() {
			super();
		}
	
		public CauseItem(String id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
	
		@Override
		public String toString() {
			return this.name;
		}
	
		public String getCompetitionCount() {
			return competitionCount;
		}
	
		public void setCompetitionCount(String competitionCount) {
			this.competitionCount = competitionCount;
		}
	
		public String getLogo() {
			return logo;
		}
	
		public void setLogo(String logo) {
			this.logo = logo;
		}
	
		public String getGoal() {
			return goal;
		}
	
		public void setGoal(String goal) {
			this.goal = goal;
		}
	
		public String getGoalSUM() {
			return goalSUM;
		}
	
		public void setGoalSUM(String goalSUM) {
			this.goalSUM = goalSUM;
		}
		
		public String getID() {
			return this.id;
		}
	}

		
//main activity XML
	<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    android:id="@+id/RelativeLayout1"
	    android:layout_width="fill_parent"
	    android:layout_height="fill_parent"
	    android:background="@android:color/white"
	    android:orientation="vertical" >
	
	<!--  HEADER -->
	
	    <RelativeLayout
	        android:id="@+id/tableRow1_CAUSES"
	        android:layout_width="wrap_content"
	        android:layout_height="wrap_content"
	        android:background="#009BBF"
	        android:orientation="horizontal"
	        android:layout_marginBottom="2dip" >
	
	        <ImageView
	            android:id="@+id/imgHeader"
	            android:layout_width="wrap_content"
	            android:layout_height="wrap_content"
	            android:layout_marginBottom="2dip"
	            android:scaleType="fitStart"
	            android:src="@drawable/support" />
	
	        <ImageView
	            android:id="@+id/imgHeaderOptions"
	            android:layout_width="wrap_content"
	            android:layout_height="wrap_content"
	            android:layout_alignParentRight="true"
	            android:layout_alignParentTop="true"
	            android:layout_marginBottom="2dip"
	            android:onClick="options_Clicked"
	            android:scaleType="fitStart"
	            android:src="@drawable/main_header_options" />
	    </RelativeLayout>
	
	        <ListView
	        android:id="@+id/lstv_CAUSES"
	        android:layout_width="fill_parent"
	        android:layout_height="fill_parent"
	        android:layout_below="@id/tableRow1_CAUSES"
	        android:layout_marginBottom="2dip" />
	    
	</RelativeLayout>

//listview ROW
	<?xml version="1.0" encoding="utf-8"?>
	<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    android:layout_width="fill_parent"
	    android:layout_height="fill_parent" >
	
	    <RelativeLayout
	        android:layout_width="wrap_content"
	        android:layout_height="wrap_content"
	        android:paddingBottom="5dip"
	        android:paddingTop="5dip" >
	
	        <ImageView
	            android:id="@+id/logoCAUSEitem"
	            android:layout_width="120dip"
	            android:layout_height="80dip"
	            android:adjustViewBounds="true"
	            android:scaleType="fitStart"
	            android:src="@drawable/causepic" />
	
	        <TextView
	            android:id="@+id/titleCAUSElist"
	            android:layout_width="wrap_content"
	            android:layout_height="wrap_content"
	            android:layout_marginLeft="10dip"
	            android:layout_toRightOf="@id/logoCAUSEitem"
	            android:paddingBottom="10dp"
	            android:textColor="#000000"
	            android:textSize="20sp" />
	
	        <RelativeLayout
	            android:layout_width="wrap_content"
	            android:layout_height="wrap_content"
	            android:layout_alignParentBottom="true"
	            android:layout_below="@id/titleCAUSElist"
	            android:layout_marginLeft="10dip"
	            android:layout_toRightOf="@id/logoCAUSEitem" >
	
	            <TextView
	                android:id="@+id/titleCAUSElistCounter"
	                android:layout_width="60dip"
	                android:layout_height="wrap_content"
	                android:layout_alignParentBottom="true"
	                android:layout_alignParentRight="true"
	                android:background="#009BBF"
	                android:gravity="right"
	                android:textColor="#FFFFFF"
	                android:textSize="20sp" />
	
	            <ProgressBar
	                android:id="@+id/prgCAUSElistCounter"
	                style="?android:attr/progressBarStyleHorizontal"
	                android:layout_width="match_parent"
	                android:layout_height="20dip"
	                android:layout_centerVertical="true"
	                android:layout_toLeftOf="@id/titleCAUSElistCounter"
	                android:paddingRight="15dip"
	                android:progressDrawable="@drawable/progess_cause"
	                android:visibility="visible" />
	        </RelativeLayout>
	    </RelativeLayout>
	
	</RelativeLayout>