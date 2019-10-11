'REQ extra lib 
'http://www.basic4ppc.com/android/help/dialogs.html#colordialog_show
'http://www.basic4ppc.com/forum/additional-libraries-official-updates/6776-dialogs-library.html#post39303

'user custom InputBox
'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/14738-custom-input-box-editbox-code-module.html#post83479

	Dim password As String 
	
	password= General.ExecuteScalar("select password from settings where TgUniqueField = 1")

	'when record not exists
	If password = Null Then password=""

	If password.Length >0 Then 
		Dim askPass As InputDialog
		askPass.InputType=askPass.INPUT_TYPE_TEXT
		askPass.PasswordMode=True 
		
		Dim ret As Int
		ret = askPass.Show("Κωδικός Ασφαλείας :","administator","Επιβεβαίωση","Ακύρωση","", Null)	
		
		If ret = -1 Then 
			If askPass.Input.ToLowerCase <> password.ToLowerCase Then
				ToastMessageShow("Λάθος κωδικός ασφαλείας",False)
				Return
			End If 
		End If 
	End If 
	
	StartActivity("actSettings")