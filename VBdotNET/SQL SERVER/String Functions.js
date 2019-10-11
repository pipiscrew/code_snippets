Manipulating strings is a common task in T-SQL. Below are a few of SQL’s built-in functions that make dealing with strings easier.

LEN – determines the length of a string value.
Syntax:  LEN ( string_expression )

LEFT – returns the specified number of characters from the left side of the string value.
Syntax:  LEFT ( character_expression, integer_expression )

RIGHT – returns the specified number of characters from the right side of the string value.
Syntax:  RIGHT ( character_expression, integer_expression )

SUBSTRING – returns the specified number of characters from the middle of the string value.
Syntax:  SUBSTRING ( expression, start, length )

REPLACE – replaces characters in the string
Syntax:  REPLACE ( string_expression, string_pattern, string_replacement)

STUFF – inserts characters in the string
Syntax:  STUFF ( character_expression, start, length, character_expression )

T-SQL Code Sample

DECLARE @testString VARCHAR(20)
SET @testString = 'Big Bang Theory'

SELECT LEN(@testString) AS _Length,
    LEFT(@testString,3) AS _Left,
    RIGHT(@testString,6) AS _Right,
    SUBSTRING(@testString,5,4) AS _Substring,
    REPLACE(@testString,'Bang', 'Bazinga') AS _Replace,
    STUFF(@testString,5,0,'Big ') AS _Stuff