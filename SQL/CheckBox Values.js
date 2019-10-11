otan to bazoyme ston SQL
RsS.ArrADD 17, "@Aaleretour_18", asBoolean, asInput, IIf(Check1.Value, "1", "0")

kai otan to pernoyme
If MSHFl2.TextMatrix(prev2, 29) = "True" Then Check1.Value = 0 Else Check1.Value = 1

dhladh

VB
gia na einai TRUE
 Check1.Value = 0
kai FALSE
Check1.Value = 1