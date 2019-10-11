private ArrayList<String> download_image = new ArrayList<String>();
download_image.add("test");

  for(int img= 0; img<download_image.size(); img++) 
  {
	  System.out.println(img + "  " + download_image.get(img));
	  
	  if(img == download_image.size()/2)
	  {
		  publishProgress(110);
	  }
  }