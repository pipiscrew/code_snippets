Declare Function MessageBeep Lib "user32" (ByVal wType As Long) As Long
The function's one argument identifies the sound to play. The sound is usually identified using the constants shown here:
Public Const MB_ICONASTERISK = &H40&
Public Const MB_ICONEXCLAMATION = &H30&
Public Const MB_ICONQUESTION = &H20&
Public Const MB_ICONHAND = &H10&

MessageBeep (MB_ICONQUESTION)
reply = MsgBox("Delete file - are you sure?", vbYesNoCancel, "Delete file?")
