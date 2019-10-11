//http://www.pipiscrew.com/2017/05/sqlite-query-datetime-between/

//when the date field saved yyyy-MM-dd without timestamp you can use the between without problems.
//Saving the field as datetime yyyy-MM-dd HH:mm does not return any record.
//The trick applies also to another languages not only to C#, we will use the sqlite builtin function strftime.
//Of course instead you can save the field as UTC then always you have to do conversion from your program before query. Anyway we want the data to be stored as yyyy-MM-dd HH:mm and query as it.

src – https://sqlite.org/lang_datefunc.html

src – http://www.onlineconversion.com/unix_time.htm


//the table :
//https://sqlite.org/datatype3.html
CREATE TABLE "main"."test_tbl" (
"id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
"date_stamp"  TEXT
)


string now = DateTime.Today.ToString("yyyy-MM-dd");
DataTable dT = db.GetDATATABLE("select * from test_tbl where " +
"strftime('%s',date_stamp) between strftime('%s','" + now + " 00:00:00') " +
"and " +
"strftime('%s','" + now + " 23:59:00')");


//strftime('%s' = converts the given date to UTC format