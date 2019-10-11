	// clean objects
	@Override
    protected void onDestroy() {
        super.onDestroy();

        if (CustomersDB!=null)
        {	
        	CustomersDB.close();
        	CustomersDB=null;
        	
        	if (customersOBJ!=null)
        		customersOBJ=null;
        }

        System.gc();
    }