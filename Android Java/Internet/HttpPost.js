	private String retreiveNews(int PageIndex , int PageSize)
	{
		    String a = null;	        
	        News_request_url = YRGO_URL + NEWS;    
	        
	     //   System.out.println("News_request_url" + News_request_url);
	        
	        HttpClient client = new DefaultHttpClient();
	        HttpConnectionParams.setConnectionTimeout(client.getParams(), 10000); //Timeout Limit
	        HttpResponse response;	     
	        try
	        {
	            HttpPost post = new HttpPost(News_request_url.trim());	            
	            JSONStringer json = new JSONStringer()
	            .object()	               
	                 .key("UserToken").value(Authentication.UserToken)
	                 .key("PortalId").value(PortalId)
	                 .key("ItemId").value(null)
	                 .key("PageIndex").value(PageIndex)
	                 .key("PageSize").value(PageSize)
	               .endObject();
	            String aa = Authentication.getAPIAccessKey();                
                System.out.println("aa" + aa);
                post.setHeader("Authentication", aa.trim());           
	            StringEntity se = new StringEntity(json.toString());  
	            System.out.println("News body request" + json.toString());
	            se.setContentEncoding("UTF-8");
	            se.setContentType("application/json");                
	            post.setEntity(se);                  
	           
	            response = client.execute(post);
	          
	            /*Checking response */
	            if(response!=null)
	            {
	                InputStream in = response.getEntity().getContent(); //Get the data in the entity                      
	                a = cm.convertStreamToString(in);       
	                
	         //       System.out.println("News Response" + a);
	            }
	            else
	            {
	        //  	    System.out.println("response null che");
	          	    error = "Unable to connect with server please try again";
		      	    errorhandler.sendEmptyMessage(0); 
	            }
	        }
	        catch(IOException io)
	        {
	       // 	 System.out.println(io.toString());
		      	  error = "Unable to connect with server please try again";
		      	  errorhandler.sendEmptyMessage(0);
	        }
	        catch(Exception e){   
	      	//  System.out.println(e.toString());
	      	  error = e.toString();
	      	  errorhandler.sendEmptyMessage(0);            	  
	        }	   	  
	    return a;		  
	}