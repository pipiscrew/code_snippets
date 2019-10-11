	If txtDESCR.Text.Length = 0 Then 
		Msgbox("Παρακαλώ εισάγετε 'Περιγραφή'",General.APPTITTLE)
		Return 
	Else
		Dim res As Int
		res= Msgbox2("Επιθυμείτε ενημέρωση εγγραφής ;",General.APPTITTLE ,"Ναί","Ακύρωση","Όχι",null)
		
		If res <> DialogResponse.POSITIVE Then 
			Return 
		End If 
	End If 