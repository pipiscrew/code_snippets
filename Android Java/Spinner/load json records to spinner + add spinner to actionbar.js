//http://www.pipiscrew.com/2016/04/android-set-json-records-to-spinner/

if (response == null || response.length() < 10) {
	progress.dismiss();
	return;
}

String resp = response;
JSONArray clients = null;

try {
	clients = new JSONArray(resp);

	if (clients == null || resp.length() < 10)
		return;

	JSONObject client_obj;
	SpinnerItem client = null;
	ArrayList<SpinnerItem> clients_LIST=new ArrayList<SpinnerItem>();

	//add dummy record	
	client = new SpinnerItem("0","");

	for (int i = 0; i < clients.length(); i++) {
		client_obj = (JSONObject) clients.get(i);

		client = new SpinnerItem(String.valueOf(client_obj.getInt("id")),client_obj.getString("client_name"));

		clients_LIST.add(client);
		
	}
	
	//add to spinner
	ArrayAdapter<SpinnerItem> dataAdapter = new ArrayAdapter<SpinnerItem>(clients_Map.this, android.R.layout.simple_spinner_item, clients_LIST);
	dataAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
	actionbar_spinner.setAdapter(dataAdapter);
} catch (JSONException e) {
	General.mes(Clients_Map.this, e.getMessage());
} finally {
	progress.dismiss();
}
	
	
//add to actiobar
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// setup on actiobar  -   http://stackoverflow.com/a/30639393/1320686
		getMenuInflater().inflate(R.menu.super_markets__map, menu);
		MenuItem item = menu.findItem(R.id.map_spinner);

		actionbar_spinner = (Spinner) MenuItemCompat.getActionView(item);
		
		get_clients();
		
		actionbar_spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
				@Override
				public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
					if (pos==0)
						return;

					SpinnerItem smarket = (SpinnerItem)parent.getItemAtPosition(pos);
					Toast.makeText(SuperMarkets_Map.this, smarket.getTitle() + " with id " + smarket.getId(),Toast.LENGTH_SHORT).show();
				}

				@Override
				public void onNothingSelected(AdapterView<?> arg0) {
						
				}

	    }); // (optional)


		return true;
	}
	
//R.menu.super_markets__map.xml
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto" >
 
    <item
        android:id="@+id/map_spinner"
        android:actionViewClass="android.widget.Spinner"
        android:icon="@drawable/ic_launcher"
        android:orderInCategory="1"
        android:showAsAction="always"
        android:title="pipiscrew"/>
 
</menu>