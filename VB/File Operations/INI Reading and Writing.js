'**************************************
' Name: INI Reading and Writing Made Sim
'     ple!
' Description:This code was designed for
'     reading and writing INI files. You put i
'     t in a module called modINI.
' By: Austen Frazier
'
' Inputs:Syntax:
ReadINI("SECTION", "FIELD", filename)
WriteINI("SECTION", "FIELD", "VALUE", filename)
'
' Returns:The value of the field read fr
'     om the INI for ReadINI. For WriteINI, it
'     will return nothing.
'
' Assumes:This is very "newbie" friendly
'     code. Any user, from beginner to advance
'     d user, can use it.
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=61508&lngWId=1
'for details.
'**************************************

Option Explicit
'ModINI.Bas
'INI reading/writing


Public Declare Function WritePrivateProfileString& Lib "kernel32" Alias "WritePrivateProfileStringA" (ByVal AppName$, ByVal KeyName$, ByVal keydefault$, ByVal FileName$)


Public Declare Function GetPrivateProfileString& Lib "kernel32" Alias "GetPrivateProfileStringA" (ByVal AppName$, ByVal KeyName$, ByVal keydefault$, ByVal ReturnedString$, ByVal RSSize&, ByVal FileName$)


Public Sub WriteINI(INISection As String, INIKey As String, INIValue As String, INIFile As String)
    Call WritePrivateProfileString(INISection, INIKey, INIValue, INIFile)
End Sub


Public Function ReadINI(INISection As String, INIKey As String, INIFile As String) As String
    Dim StringBuffer As String
    Dim StringBufferSize As Long
    StringBuffer = Space$(255)
    StringBufferSize = Len(StringBuffer)
    StringBufferSize = GetPrivateProfileString(INISection, INIKey, "", StringBuffer, StringBufferSize, INIFile)


    If StringBufferSize > 0 Then
        ReadINI = Left$(StringBuffer, StringBufferSize)
    Else
        ReadINI = ""
    End If
End Function

'gia DELETE u use WriteINI kai vbnullstring
