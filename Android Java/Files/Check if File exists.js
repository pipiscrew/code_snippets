	//the call
	if(General.fileExistance(getBaseContext(), "possible7.txt")){
		System.out.println("exist!"); 
	}
	
//for internal storage 
	public boolean fileExistance(String fname){
	       File file = getBaseContext().getFileStreamPath(fname);
	       if(file.exists()){
	           return true;
	       }
	       else{
	           return false;
	       }    
	}
	
	
//for sdcard
	File file = getActivity().getFileStreamPath("/mnt/sdcard/photo/1342147146535.jpg");
	if(file.exists()){