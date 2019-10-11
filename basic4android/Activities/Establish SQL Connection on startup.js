Sub Activity_Create(FirstTime As Boolean)
	If FirstTime Then 
	    If File.Exists(File.DirAssets , "animanet.db") Then 
			File.Copy(File.DirAssets , "animanet.db",File.DirDefaultExternal, "animanet.db")
			General.SQL1.Initialize(File.DirDefaultExternal , "animanet.db", False)
			General.SQL1.ExecNonQuery("PRAGMA foreign_keys = ON")
		Else
			Msgbox("Couldnt find database file",General.APPTITTLE)
		End If 
	End If 
	
Activity.LoadLayout("languageswitch")

CreateGUI
End Sub