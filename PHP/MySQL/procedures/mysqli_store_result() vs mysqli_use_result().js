//http://stackoverflow.com/questions/9876730/mysqli-store-result-vs-mysqli-use-result

mysqli::store_result() will fetch the whole resultset from the MySQL server  
mysqli::use_result() will fetch the rows one by one.

This is also mentioned in the mysqli::use_result docs you linked to:

The mysqli_use_result() function does not transfer the entire result set from the database and hence cannot
be used functions such as mysqli_data_seek() to move to a particular row within the set. To use this functionality,
the result set must be stored using mysqli_store_result(). One should not use mysqli_use_result() if a lot of processing
on the client side is performed, since this will tie up the server and prevent other threads from updating any tables from
which the data is being fetched.


**
You can usually always use mysqli::store_result() unless you have a good reason for not reading all rows from the server at once.