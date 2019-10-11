
	EditText txtName;
	EditText txtCity;
	EditText txtMobile;
	EditText txtPhone;
	CustomersDatasource custDB;
	static public GridView grid;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
        txtName=(EditText)findViewById(R.id.txtName);
        txtCity=(EditText)findViewById(R.id.txtCity);
        txtMobile=(EditText)findViewById(R.id.txtMobile);
        txtPhone=(EditText)findViewById(R.id.txtPhone);
        
        grid=(GridView)findViewById(R.id.gridView1);
        
        LoadGrid();
        
        grid.setOnItemClickListener(new OnItemClickListener() {
			public void onItemClick(AdapterView<?> parent, View v,
				int position, long id) {
				
				//get the _id column
			   Toast.makeText(getBaseContext(),
					  String.valueOf(id), Toast.LENGTH_SHORT).show();
			}
		});
        
	}
	

    public void LoadGrid()
    {
    	try
    	{
    		custDB=new CustomersDatasource(this);
    		custDB.open();
    		
    		Cursor c;
    		c=custDB.customersCursor();
    		startManagingCursor(c);
    		
    		String [] from=new String []{"_id","TIT","FF"};
    		int [] to=new int [] {R.id.colName,R.id.colAge,R.id.colDept};
    		SimpleCursorAdapter sca=new SimpleCursorAdapter(this,R.layout.table_row,c,from,to);
    		grid.setAdapter(sca);
    	
    		txtName.setText(String.valueOf(grid.getCount()) );
    		
    	}
    	catch(Exception ex)
    	{
    		AlertDialog.Builder b=new AlertDialog.Builder(this);
    		b.setMessage(ex.toString());
    		b.show();
    	}
    }