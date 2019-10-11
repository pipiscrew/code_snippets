//http://stackoverflow.com/questions/3163845/is-the-onupgrade-method-ever-called

If your are using the SQLiteOpenHelper the onUpgrade will be called whenever you change the DB version. There is an additional requirement for this to work. The db name has to remain the same.

Old Version:
dbName = "mydb.db"
dbVersion = 1

New Version:
dbName = "mydb.db"
dbVersion = 2
in the onCreate of the content provider you create an instance of the SQLiteOpenHelper
 that takes these params. Your SQLiteOpenHelper implementation would look like this:

public static final class MySQLiteOpenHelper extends SQLiteOpenHelper {

        public MySQLiteOpenHelper(Context context, int dbVersion, String dbName) {
            super(context, dbName, null, dbVersion);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            //Code to create your db here
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
            // Code to upgrade your db here
        }

}

////////////

For those of you who would like to know the exact moment when onUpgrade() gets called, 
it is during a call to either getReadableDatabase() or getWriteableDatabase().

To those who are not clear how it ensure it gets triggered...the answer is: It is 
triggered when the database version provided to the constructor of SqLiteOpenHelper is updated. Here is a example

public class dbSchemaHelper extends SQLiteOpenHelper {

private String sql;
private final String D_TAG = "FundExpense";
//update this to get onUpgrade() method of sqliteopenhelper class called
static final int DB_VERSION = 2; 
static final String DB_NAME = "fundExpenseManager";

public dbSchemaHelper(Context context) {
    super(context, DB_NAME, null, DB_VERSION);
    // TODO Auto-generated constructor stub
}
now to...onUpgrade()

@Override
public void onUpgrade(SQLiteDatabase arg0, int arg1, int arg2) {
    sql = "ALTER TABLE " + fundExpenseSchema.Expense.TABLE_NAME + " ADD COLUMN " + fundExpenseSchema.Expense.FUNDID + " INTEGER";
    arg0.execSQL(sql);
}