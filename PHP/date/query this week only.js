//http://stackoverflow.com/a/20120711

//this  Q from this week Monday to this week SUN

SELECT  *
FROM   offers
WHERE  YEARWEEK(offer_date_rec, 1) = YEARWEEK(CURDATE(), 1)