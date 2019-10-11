//http://www.mysqltutorial.org/mysql-if-statement/

IF if_expression THEN commands
   [ELSEIF elseif_expression THEN commands]
   [ELSE commands]
   END IF;
   
//example
DELIMITER $$
 
CREATE PROCEDURE GetCustomerLevel(
    in  p_customerNumber int(11), 
    out p_customerLevel  varchar(10))
BEGIN
    DECLARE creditlim double;
 
    SELECT creditlimit INTO creditlim
    FROM customers
    WHERE customerNumber = p_customerNumber;
 
    IF creditlim > 50000 THEN
    SET p_customerLevel = 'PLATINUM';
    ELSEIF (creditlim <= 50000 AND creditlim >= 10000) THEN
        SET p_customerLevel = 'GOLD';
    ELSEIF creditlim < 10000 THEN
        SET p_customerLevel = 'SILVER';
    END IF;
 
END$$