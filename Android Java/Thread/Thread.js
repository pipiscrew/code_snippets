	private Thread newsretreive;
	String news_response;
	
				  newsretreive = new Thread() {  
					   public void run() {			   
						  news_response =  retreiveNews(PageIndex , PageSize);
					//	  System.out.println("news_response" + news_response);
						  handler.sendEmptyMessage(0);			 
					     }
					   };
					   newsretreive.start();  