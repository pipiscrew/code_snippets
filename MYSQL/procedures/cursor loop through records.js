//http://www.markomedia.com.au/mysql-cursors-in-stored-procedures/

DELIMITER // 

DROP PROCEDURE IF EXISTS sp_test //

CREATE PROCEDURE sp_test ()
BEGIN
	DECLARE done INT DEFAULT FALSE;
	DECLARE myid INT;
	DECLARE cur1 CURSOR FOR SELECT id from table1 WHERE firstname IS NULL;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

	OPEN cur1;

	read_loop: LOOP
		IF done THEN
			LEAVE read_loop;
		END IF;

		FETCH cur1 INTO myid;
		UPDATE table1 SET firstname = (SELECT firstname from table2 WHERE id = myid)
		WHERE id = myid;
	END LOOP;

	close cur1;
END;
//



//ex2
BEGIN

declare myid INT;
declare i INT;
declare c CHAR(50);

SET i=0;

while i < 350 DO

	select offer_id into myid from offers where offer_id= i;

	set c = CONVERT(i,char(50));

	update offers set gen_subtotal = 600 where offer_id=myid;
	
	set i=i+1;



END WHILE;

END