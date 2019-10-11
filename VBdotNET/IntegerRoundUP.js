Integer 
Dim MyNumber As Integer
MyNumber = Int(99.8)   ' Returns 99.
MyNumber = Fix(99.8)   ' Returns 99.

MyNumber = Int(-99.8)  ' Returns -100.
MyNumber = Fix(-99.8)  ' Returns -99.

MyNumber = Int(-99.2)  ' Returns -100.
MyNumber = Fix(-99.2)  ' Returns -99.


or if we have 11.5 fix(11.5) returns 11 (no 12)