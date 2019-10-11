'This code example does not work well with large wave files. This 'code is actually meant for short wave files, such as opening 'sounds for your program. ONLY FOR WAV

Private Declare Function sndPlaySound Lib "winmm.dll" Alias "sndPlaySoundA" (ByVal lpszSoundName As String, ByVal uFlags As Long) As Long

Const SND_ASYNC = &H1
Const SND_LOOP = &H8
Const SND_NODEFAULT = &H2
Const SND_SYNC = &H0
Const SND_NOSTOP = &H10
Const SND_MEMORY = &H4

Private Sub Command1_Click()
sndPlaySound App.Path & "\ding.wav", SND_LOOP
End Sub


