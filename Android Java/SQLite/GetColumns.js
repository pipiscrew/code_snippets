//http://stackoverflow.com/questions/3505900/sqliteopenhelper-onupgrade-confusion-android
public static List<String> GetColumns(SQLiteDatabase db, String tableName) {
    List<String> ar = null;
    Cursor c = null;
    try {
        c = db.rawQuery("select * from " + tableName + " limit 1", null);
        if (c != null) {
            ar = new ArrayList<String>(Arrays.asList(c.getColumnNames()));
        }
    } catch (Exception e) {
        Log.v(tableName, e.getMessage(), e);
        e.printStackTrace();
    } finally {
        if (c != null)
            c.close();
    }
    return ar;
}