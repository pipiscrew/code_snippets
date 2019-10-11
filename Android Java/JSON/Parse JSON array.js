
	private void parseNews_Response(String response)
	{
		try {		
					
			JSONObject obj = new JSONObject(response);			
			
			try
			{
		        String status = obj.getString("Status")	;
		        
		        if(status.equalsIgnoreCase("401"))
		        {
		        	  Intent myIntent;
		              myIntent = new Intent().setClass(getParent(),Authentication.class);       
		              myIntent.putExtra("renew", true);
		              startActivity( myIntent );
		             
		        }
			}
			catch(JSONException je)
			{
				
			}
	        
			JSONArray jArray = obj.getJSONArray("Items");
			
			total_count = obj.getInt("TotalCount");
		    
		    
		    for(int i = 0 ; i<jArray.length() ; i++)
		    {
		    	news_images_temp.add("http://mykipanel.com.au/" + jArray.getJSONObject(i).getString("ImageUrl").replace("\\", ""));
		    //	System.out.println(news_images_temp.get(i));
		    	news_details_temp.add(jArray.getJSONObject(i).getString("Heading") + "   " +  "by " + jArray.getJSONObject(i).getString("Author").trim() +"   " + jArray.getJSONObject(i).getString("PublishedDate")) ;
		    	auther_images_temp.add("http://mykipanel.com.au/avatar/" + jArray.getJSONObject(i).getJSONObject("Owner").getString("AvatarUrl"));
		   // 	System.out.println("Avatar images " + auther_images_temp.get(i));
		    	Item_Id_temp.add(jArray.getJSONObject(i).getInt("ID"));
		    	
		    }
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}