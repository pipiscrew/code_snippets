		
		try {
			JSONObject jsonObj = new JSONObject(General.JSONtxt);
			
			JSONArray nameArray = jsonObj.names();// .getJSONArray(name)
			JSONArray valArray = jsonObj.toJSONArray(nameArray);
			
			   for(int i=0;i<valArray.length();i++)
	            {
	                String p = nameArray.getString(i) + "," + valArray.getString(i);
	                System.out.println("--" + p);
	            }   
			   
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}