exoyme restriction otan to field einai
smalldatetime ews 1/6/2079

sta DTP ... MaxDate : 1/6/2079

otan einai datetime den exei prob! LOL


'source
'http://www.databasejournal.com/features/mssql/article.php/2191631/Working-with-SQL-Server-DateTime-Variables.htm
'http://www.databasejournal.com/features/mssql/article.php/3718086/New-datetime-datatypes-in-SQL-Server-2008.htm
A SMALLDATETIME column also holds a date and time value, but the time
 portion is only accurate to one minute. Valid dates for a SMALLDATETIME
 column can range from January 1, 1900 to June 6, 2079. The SMALLDATETIME
 column takes 4 bytes of storage. This 4 bytes is broken into two 2 byte
 integer pieces. The first 2 bytes integer piece contains the number of
 days since January 1, 1900; the second 2 byte integer holds the number 
 of minutes since midnight.
 
 
The DATETIME column is used to hold a date and time value, where time is 
accurate to three-hundredth of a second. The date for a DATETIME column 
can range from January 1, 1753 to December 31, 9999. A DATETIME column 
takes 8 bytes of disk storage. The physical storage of these 8 bytes is
 divided into 2 - 4 byte integer pieces. The first 4 byte integer is
 used to store the number of days before or after the base date 
 January 1, 1900, while the second 4 bytes integer is used to represent
 the number of milliseconds since midnight.
 
 