        try
        {
        .
        .
        .
        .
        
        catch(Exception e){   
      	  //System.out.println(e.toString());
			AlertDialog.Builder b=new AlertDialog.Builder(this);
			b.setMessage(ex.toString());
			b.show();
        }