'source
'http://tatief.wordpress.com/2008/12/29/%CE%B1%CE%BB%CE%B3%CF%8C%CF%81%CE%B9%CE%B8%CE%BC%CE%BF%CF%82-%CF%84%CE%BF%CF%85-%CE%B1%CF%86%CE%BC-%CE%AD%CE%BB%CE%B5%CE%B3%CF%87%CE%BF%CF%82-%CE%BF%CF%81%CE%B8%CF%8C%CF%84%CE%B7%CF%84%CE%B1%CF%82/

Function CheckAFM(VatNo As String) As Boolean
Dim RetVal, TotalVal, i, IsNumber, NumToStr

RetVal = False
If Len(VatNo) = 9 And Val(VatNo) <> 0 Then
NumToStr = LTrim(Str(Val(VatNo)))
IsNumber = (String(9 - Len(NumToStr), "0") + NumToStr = VatNo)

If IsNumber Then
TotalVal = 0
For i = 8 To 1 Step -1
TotalVal = TotalVal + Val(Mid(VatNo, i, 1)) * 2 ^ (9 - i)
Next
RetVal = (((TotalVal Mod 11) Mod 10) = Val(Right(VatNo, 1)))
End If
End If
CheckAFM = RetVal
End Function


'author said :
'Αυτόν τον αλγόριθμο παλαιότερα χρειάστηκα δύο χρόνια για να τον αποκωδικοποιήσω 'και ενώ πανηγύριζα για το κατόρθωμά μου, μετά από περίπου 3 χρόνια το υπουργείο 'οικονομικών αποφάσισε να δώσει η ίδια τον αλγόριθμο στην δημοσιότητα!!






'in vbnet 
'String(9 - Len(NumToStr), "0") 

'^^is not valid

'so the same can be done with :

's = New String("x"c, 10)