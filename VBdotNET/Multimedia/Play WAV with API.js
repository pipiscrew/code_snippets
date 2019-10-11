    'Private Declare Auto Function sndPlaySound Lib "winmm.dll" (ByVal lpszSound As String, ByVal fuSound As Int32) As Boolean
    Declare Function PlaySound Lib "winmm.dll" Alias "PlaySoundA" (ByVal strSoundFileName As String, ByVal hModule As Long, ByVal lngOptions As Long) As Long

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        PlaySound("C:\a3\Tanya Stephens - It's a pity.wav", IntPtr.Zero, &H8)
        'sndPlaySound("C:\a3\Tanya Stephens - It's a pity.wav", &H8)
    End Sub





Actually I wonder why your sndPlaySound declaration works. 8=]

Anyway, try this ones (modified and a bit improved):

~
Friend Declare Auto Function sndPlaySound Lib "winmm.dll" ( _
<MarshalAs(UnmanagedType.LPTStr), [In]()> ByVal lpszSound As
String, _
ByVal fuSound As sndPlaySoundFlag _
) As Boolean

Friend Declare Auto Function PlaySound Lib "winmm.dll" ( _
<MarshalAs(UnmanagedType.LPTStr), [In]()> ByVal pszSound As
String, _
ByVal hmod As IntPtr, _
ByVal fdwSound As PlaySoundFlag _
) As Boolean

<Flags()> Friend Enum sndPlaySoundFlag
Async = &H1
[Loop] = &H8
Memory = &H4
NoDefault = &H2
NoStop = &H10
Sync = &H0
End Enum

<Flags()> Friend Enum PlaySoundFlag
Application = &H80
[Alias] = &H10000
AliasID = &H110000
Async = &H1
FileName = &H20000
[Loop] = &H8
Memory = &H4
NoDefault = &H2
NoStop = &H10
NoWait = &H2000
Purge = &H40
Resource = &H40004
Sync = &H0
End Enum
~