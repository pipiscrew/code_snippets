startActivity(new Intent(this, TakisActivity.class));

//with params :
	//parent
		        	  Intent myIntent;
		              myIntent = new Intent().setClass(getParent(),Authentication.class);       
		              myIntent.putExtra("renew", true);
		              startActivity( myIntent );
		              
		              

	//child
						Bundle extras = getIntent().getExtras();
						if (extras != null) {
						    String value = extras.getString("new_variable_name");
						}
						
						
//example
						//parent
						Intent myIntent;
						myIntent = new Intent().setClass(MainActivity2.this, Competition_Details.class);
						//myIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP); //when specified there is no back!
						myIntent.putExtra("itemKey", rowItems.get(arg2).getkey());
						startActivity(myIntent);
						//finish(); close current activity
		
		
		
						//child activity
							@Override
							protected void onCreate(Bundle savedInstanceState) {
								super.onCreate(savedInstanceState);
								setContentView(R.layout.activity_competition__details);
								
								Bundle extras = getIntent().getExtras();
								if (extras != null) {
									itemKey = extras.getString("itemKey");
								}
								
//        <activity
//            android:name="com.example.tc.fb.test2.LoginActivity"
//            android:launchMode= "singleTop"
//            android:label="@string/title_activity_login" >