//http://www.mysqltutorial.org/stored-procedures-loop.aspx

DELIMITER $$
 DROP PROCEDURE IF EXISTS LOOPLoopProc$$
 CREATE PROCEDURE LOOPLoopProc()
       BEGIN
               DECLARE x  INT;
               DECLARE str  VARCHAR(255);
               SET x = 1;
               SET str =  '';
               loop_label:  LOOP
                           IF  x > 10 THEN
                               LEAVE  loop_label;
                           END  IF;
                           SET  x = x + 1;
                           IF  (x mod 2) THEN
                               ITERATE  loop_label;
                           ELSE
                               SET  str = CONCAT(str,x,',');
                           END  IF;
 
               END LOOP;    
               SELECT str;
       END$$
 DELIMITER ;