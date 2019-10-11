Private Declare Function mciSendString Lib "winmm.dll" Alias "mciSendStringA" (ByVal lpstrCommand As String, ByVal lpstrReturnString As String, ByVal uReturnLength As Long, ByVal hwndCallback As Long) As Long

Private Sub Command1_Click()
Dim fileToPlay As String

fileToPlay = Chr(34) + ("g:\306-dj_vadim_feat_sena-talk_to_me-scratch.mp3") + Chr(34)

Call mciSendString("open " & fileToPlay & " alias customAlias", "", 0, 0)
Call mciSendString("play customAlias", "", 0, 0)

End Sub

Private Sub Command2_Click()
    Call mciSendString("stop customAlias", "", 0, 0)
    Call mciSendString("close customAlias", "", 0, 0)
    
'mciSendString("pause myDevice", "", 0, 0)
'
'
'
'mciSendString("resume myDevice", "", 0, 0)
End Sub


always use 
    Call mciSendString("stop customAlias", "", 0, 0)
    Call mciSendString("close customAlias", "", 0, 0)