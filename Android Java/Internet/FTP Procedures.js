
	private boolean uploadImageToFTP()
	{		
		
	   boolean connect = ftpConnect(ip,username,pass,port);
	   
	   System.out.println("connect : " + connect);	   
	
 	    String dir = ftpGetCurrentWorkingDirectory();
 	 
 	    upload = ftpUpload(imagepath,Image_name,dir);
		
		return upload;
		
	}
	 
	  public boolean ftpConnect(String host, String username,String password, int port)
	  {
		try {
				mFTPClient = new FTPClient();
				// connecting to the host
				mFTPClient.connect(host, port);
				
				// now check the reply code, if positive mean connection success
				if (FTPReply.isPositiveCompletion(mFTPClient.getReplyCode())) {
				// login using username & password
				boolean status = mFTPClient.login(username, password);
				
				/* Set File Transfer Mode
				*
				* To avoid corruption issue you must specified a correct
				* transfer mode, such as ASCII_FILE_TYPE, BINARY_FILE_TYPE,
				* EBCDIC_FILE_TYPE .etc. Here, I use BINARY_FILE_TYPE
				* for transferring text, image, and compressed files.
				*/
				mFTPClient.setFileType(FTP.BINARY_FILE_TYPE);
				mFTPClient.enterLocalPassiveMode();
				
				return status;
				}
				} catch(Exception e) {
					System.out.println("Error: could not connect to host " + host );
				}
				
			return false;
		}
	    
	    
	    public boolean ftpUpload(String srcFilePath, String desFileName,
	            String desDirectory)
		{
			boolean status = false;
			try {
				
			//	System.out.println("srcFilePath" + srcFilePath +"   " + "desFileName" + desFileName);
				
			//FileInputStream srcFileStream = new FileInputStream(srcFilePath);
			
			
			 BitmapFactory.Options o = new BitmapFactory.Options();
		     o.inJustDecodeBounds = true;

		     FileInputStream fis = new FileInputStream(srcFilePath);
		     BitmapFactory.decodeStream(fis, null, o);
		     fis.close();

		        int scale = 1;
		        if (o.outHeight > IMAGE_MAX_SIZE || o.outWidth > IMAGE_MAX_SIZE) {
		            scale = (int)Math.pow(2, (int) Math.round(Math.log(IMAGE_MAX_SIZE / (double) Math.max(o.outHeight, o.outWidth)) / Math.log(0.5)));
		        }

		        //Decode with inSampleSize
		        BitmapFactory.Options o2 = new BitmapFactory.Options();
		        o2.inSampleSize = scale;
		        fis = new FileInputStream(srcFilePath);
			
			   // change working directory to the destination directory
			
			  status = mFTPClient.storeFile(desFileName, fis);
			
		     //	System.out.println("status " + status);
			
			fis.close();
			mFTPClient.disconnect();
			return status;
			} catch (Exception e) {
		
		}			
		 return status;
	   }
		  
	    public String ftpGetCurrentWorkingDirectory()
	    {
	        try {
	            String workingDir = mFTPClient.printWorkingDirectory();
	            return workingDir;
	        } catch(Exception e) {
	       // 	System.out.println("Error: could not get current working directory.");
	        	return null;
	        }

	        
	    }