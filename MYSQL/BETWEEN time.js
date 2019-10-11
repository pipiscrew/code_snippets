//http://stackoverflow.com/a/20814508
//query a datetime field only by time!

//time*10000 = 15 * 10000 = 150000 is 15:00 o'clock
//for 15:31 use 153100

SELECT *
FROM  user_working_hours
WHERE EXTRACT(HOUR_SECOND from date_start) between 150000 and 190000


//this result records 10:00 - 10:05 including 10:05
SELECT *
FROM  user_working_hours
WHERE EXTRACT(HOUR_SECOND from date_start) between 100000 and 100500


//result when date_start 10:00:00-10:05:60 and 15:30:00-15:31:00
SELECT *
FROM  user_working_hours
WHERE (EXTRACT(HOUR_SECOND from date_start) between 100000 and 100600) AND (EXTRACT(HOUR_SECOND from date_end) between 153000 and 153100)