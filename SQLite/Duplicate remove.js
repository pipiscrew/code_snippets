//https://stackoverflow.com/a/25885564/1320686

/*SQLite has a special column, ROWID created on every table by default (you can switch it off using the  WITHOUT ROWID modifier, but be very sure before doing so).

This means that we can identify specific rows within sets of duplicates, for example, finding the first entry for a value:

SELECT messdatum, MIN(ROWID) FROM lipo
So one way to remove duplicates might be this:*/

*tested&working*

DELETE FROM feeds
WHERE rowid NOT IN (
  SELECT MIN(rowid) 
  FROM feeds 
  GROUP BY feed_title
)