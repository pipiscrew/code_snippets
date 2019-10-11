//dbase
		    SQLiteDatabase database;
		    SQLiteHelper dbHelper;
			
			dbHelper = new SQLiteHelper(this);
			
			database = dbHelper.getWritableDatabase();
			
//cursor			
			Cursor lexikoC = database
					.rawQuery(
							"select [key],[lemma],[description],[word] from " + SQLiteHelper.TABLE_CUSTOMERS + " where word IS NULL",
							
							
			lexikoC.moveToFirst();
			


			byte[] arrayOfByte=null;
			String str2;
			boolean EOF=true;
//loop			
			while (!lexikoC.isAfterLast()) {
			
			 str2 = lexikoC.getString(0).replace("'","''")
			 arrayOfByte = lexikoC.getBlob(2);
			 
			 	if (kk == 1000)
				{
					EOF=false;
					break;
				}
				
			 lexikoC.moveToNext();
			}
			
			if (EOF)
				Toast.makeText(this, "reached!",1000).show();
			else 
				Toast.makeText(this, "DONE!",1000).show();
			
			database.close();
			dbHelper.close();
			
			
//minimal sqlitehelper class
public class SQLiteHelper extends SQLiteOpenHelper {

	public static final String TABLE_CUSTOMERS = "b";
			public static final String  DATABASE_FILE_PATH = Environment.getExternalStorageDirectory().toString();
	private static final String DATABASE_NAME = "dict.db";
	private static final int DATABASE_VERSION = 1;


	public SQLiteHelper(Context context) {
		super(context, DATABASE_FILE_PATH
	            + File.separator + DATABASE_NAME, null, DATABASE_VERSION);
	
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		//db.execSQL(DATABASE_CREATE);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

//		db.execSQL("DROP TABLE IF EXISTS " + TABLE_COMMENTS);
//		onCreate(db);
	}
	
}