//http://stackoverflow.com/questions/20587154/syntax-error-while-looping-through-all-rows-of-a-table-in-a-stored-procedure

DELIMITER$$
CREATE PROCEDURE ROWPERROW2()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE factionName varchar(100);
  DECLARE cursor1 CURSOR FOR SELECT name FROM faction;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cursor1;

  read_loop: LOOP
    FETCH cursor1 INTO factionName;
    IF done THEN
        LEAVE read_loop;
    END IF;
    INSERT INTO groups_group(name) VALUES (factionName);

    -- going to do something else with factionName
  END LOOP;

  CLOSE cursor1;
END$$
DELIMITER ;