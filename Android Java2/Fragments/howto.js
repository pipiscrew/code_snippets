1-create an activity to get fragment class and layout files
2-change class to :
						public class People_Pending extends Fragment implements OnItemClickListener {
						
3-
	   @Override
	    public View onCreateView(LayoutInflater inflater, ViewGroup container,
	            Bundle savedInstanceState) {
		   //here set the layout
		   View rootView = inflater.inflate(R.layout.activity_people__pending, container, false);
		   return rootView;
	    }
	    
	    
4-
	//http://www.vogella.com/tutorials/AndroidFragments/article.html
	//http://stackoverflow.com/questions/6495898/findviewbyid-in-fragment-android
	   @Override
	    public void onViewCreated(View view, Bundle savedInstanceState) {
			Indicator = (ImageView) getActivity().findViewById(R.id.indicatorLbC);
			startIndicator();
			
			lstv = (ListView) view.findViewById(R.id.lstv);
			lstv.setOnItemClickListener(this);
			listAdapter = new CompetitionsPendingadapter(getActivity().getBaseContext(), rowItems);
			lstv.setAdapter(listAdapter);
			
			queryDB("competitions");
//			super.onViewCreated(view, savedInstanceState);
	    }