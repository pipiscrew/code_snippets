Private Declare Function mciExecute Lib "winmm.dll" (ByVal lpstrCommand As String) As Long

Private Sub Form_Load()
MIDIFile = "c:\a.mid"

Call mciExecute("Open " & MIDIFile)

Call mciExecute("Play c:\a.mid")

End Sub


Private Sub Form_Unload(Cancel As Integer)

Call mciExecute("Stop c:\a.mid") 'may not support the stop

Call mciExecute("Close c:\a.mid")

End Sub