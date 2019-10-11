
Sub Turn2Greek(Buffer() As Byte)
	Dim i As Int
	Dim k As Int 
	Dim str As String 
	For i = 0 To Buffer.Length-1
		k = Bit.And(Buffer(i), 0xFF) 'convert byte to int
		
		If (k >=193 AND k <=217) OR (k>=225 AND k <= 249) Then  'GREEK Α-Ω OR GREEK α-ω
			str= str & Chr(k+720)
		Else
			Select k
			Case 220:
				k=940
			Case 221:
				k=941
			Case 252:
				k=972
			Case 223:
				k=943
			Case 253:
				k=973
			Case 254:
				k=974
			Case 222:
				k=942
			Case 162:
				k=902
			Case 184:
				k=904
			Case 188:
				k=908
			Case 186:
				k=906
			Case 190:
				k=910
			Case 185:
				k=905
			End Select 
			
			str= str & Chr(k)
		End If 
	Next 
	
	Return str 
End Sub 