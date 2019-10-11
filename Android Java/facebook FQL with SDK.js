//http://stackoverflow.com/questions/13846911/extracting-information-from-a-fql-query-in-android-app

    queryButton.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            String fqlQuery = "SELECT uid, name, pic_square, status FROM user WHERE uid IN " +
                  "(SELECT uid2 FROM friend WHERE uid1 = me() LIMIT 25)";
            Bundle params = new Bundle();
            params.putString("q", fqlQuery);
            Session session = Session.getActiveSession();

            Request request = new Request(session,
                "/fql",                         
                params,                         
                HttpMethod.GET,                 
                new Request.Callback(){         

                    @SuppressWarnings("deprecation")
                    public void onCompleted(Response response) {

                            GraphObject graphObject = response.getGraphObject();


                            if (graphObject != null)
                            {
                                if (graphObject.getProperty("data") != null)
                                {
                                    try {
                                        String arry = graphObject.getProperty("data").toString();

                                        JSONArray jsonNArray = new JSONArray(arry);

                                        for (int i = 0; i < jsonNArray.length(); i++) {

                                            JSONObject jsonObject = jsonNArray.getJSONObject(i);

                                            String name = jsonObject.getString("name");
                                            String uid = jsonObject.getString("uid");

                                            String pic_square = jsonObject.getString("pic_square");
                                            String status = jsonObject.getString("status");

                                            Log.i("Entry", "uid: " + uid + ", name: " + name + ", pic_square: " + pic_square + ", status: " + status);
                                        }

                                    } catch (JSONException e) {
                                        // TODO Auto-generated catch block
                                        e.printStackTrace();
                                    }                                       
                                }
                            }

                    }                  
            }); 
            Request.executeBatchAsync(request);                 
        }
    });