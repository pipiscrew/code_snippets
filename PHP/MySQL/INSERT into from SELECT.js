//http://stackoverflow.com/questions/17329645/mysql-procedure-insert-into-from-table-and-variable

Just use the variable like you'd use a column or column expression, except if it's a string don't surround it with quotes. If you have, for example, the variable @idValue:

INSERT INTO my_tbl (fld1, fld2, fld3)
SELECT fld1, fld2, fld3 FROM tbl_2
where tbl_2.id = @idValue;
Or if you're updating, say for example you have a variable @fld2Value:

INSERT INTO my_tbl (fld1, fld2, fld3)
SELECT fld1, @fld2Value, fld3 FROM tbl_2
where tbl_2.id = @idValue;