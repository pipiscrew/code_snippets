    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.listnotes);

        new MyTask().execute();
    }
    
    
    private class MyTask extends AsyncTask<Void, Void, Void> {
        private ProgressDialog progressDialog;

        protected void onPreExecute() {
            progressDialog = ProgressDialog.show(listnotes.this,
                    "", "Loading. Please wait...", true);
        }

        @Override
        protected Void doInBackground(Void... arg0) {
            try {
                HttpClient hc = new DefaultHttpClient();
                HttpGet get = new HttpGet("http://pipiscrew.com/notes/utc.php");
                final HttpResponse rp = hc.execute(get);

                if (rp.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
	// so I can update the GUI
   						runOnUiThread(new Runnable() {
	// so I can update the GUI
                        public void run() {

                            String result = null;

                            try {
                                result = EntityUtils.toString(rp.getEntity());
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                            JSONArray records = null;

                            try {
                                records = new JSONArray(result);
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                            ///

                            TableLayout ll = (TableLayout) findViewById(R.id.tableLayoutList);

                            View mTableRow = null;

                            ///
                            for (int i = 0; i < records.length(); i++) {
                                JSONObject c = null;
                                try {
                                    c = records.getJSONObject(i);
                                    //General.showAlert(c.getString("GUID"), MainActivity.this);

                                    mTableRow = (TableRow) View.inflate(listnotes.this, R.layout.note_row, null);

                                    TextView cb = (TextView) mTableRow.findViewById(R.id.tblrow);
                                    cb.setText(c.getString("GUID"));


                                    mTableRow.setTag(i);


                                    //add TableRows to TableLayout
                                    ll.addView(mTableRow);


                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }

                        }
                    });
                }
            } catch (Exception e) {
                Log.e("TwitterFeedActivity", "Error loading JSON", e);
            }
            return null;
        }

        @Override
        protected void onPostExecute(Void result) {
            progressDialog.dismiss();
        }
    }