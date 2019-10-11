Number formatting, display numbers as strings with different formats, there are two keywords:
** NumberFormat(Number As Double, MinimumIntegers As Int, MaximumFractions As Int)
NumberFormat(12345.6789, 0, 2) = 12,345.68
NumberFormat(1, 3 ,0) = 001
NumberFormat(Value, 3 ,0) variables can be used.
NumberFormat(Value + 10, 3 ,0) arithmetic operations can be used.
NumberFormat((lblscore.Text + 10), 0, 0) if one variable is a string add parentheses.


** NumberFormat2(Number As Double, MinimumIntegers As Int, MaximumFractions As
Int, MinimumFractions As Int, GroupingUsed As Boolean)
NumberFormat2(12345.67, 0, 3, 3, True) = 12,345.670