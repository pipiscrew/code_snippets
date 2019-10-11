JSONObject jsonObj = new JSONObject(General.JSONtxt);
	
JSONArray nameArray = jsonObj.names();// .getJSONArray(name)

for(int i=0;i<nameArray.length();i++)
{
    String p = nameArray.getString(i) + "," +  jsonObj.getJSONObject(nameArray.getString(i)).getString("icon");
    System.out.println("--" + p);
}   