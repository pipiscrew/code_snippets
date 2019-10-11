//the call
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		 setContentView(R.layout.activity_main);

		 new asyncTask().execute();
		 
		 
//tha class

	class asyncTask extends AsyncTask<Void, Integer, Void> {

  
		@Override
	    protected void onPostExecute(Void result) {
					// TODO Auto-generated method stub
					// do something after loading
		}

		@Override
		protected void onPreExecute() {
					// TODO Auto-generated method stub
					

		}
		
		@Override
		protected void onProgressUpdate(Integer... values) {
			if (values[0]==1000)
			{
				//the only way to display a Toast (getApplicationContext)
				//http://stackoverflow.com/questions/5441231/how-to-use-toast-in-asynctask-onpostexecute-with-string-from-resources
				Toast.makeText(getApplicationContext(), "Internet is not available", Toast.LENGTH_LONG).show();
			}
			
		}
		

			@Override
			protected Void doInBackground(Void... params) {
			// set the maximum value of the progress bar	
				
				 try{
						String url="http://www.essentialapps.com.au/AppData/AU/002/0000006/jsons/Main.json";

						//call JSON for BornaAte
						String page = new Communicator().executeHttpGet(url);

						//If returns null warn user
						if (page == null )
						{
							publishProgress(1000);	
						}
						{
						
						}
						
				 	}
					catch (Exception  e) {	
						System.out.println("ERROR - null" + e.getMessage());
					}
					
					return null;
				}

			}