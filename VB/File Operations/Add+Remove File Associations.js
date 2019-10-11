it add an file association
fext- extension(without point) eg:"mp3"
extid- description of fext eg:"compressed audio"
extanm- path of exe eg:"c:\xyz.exe"
extico-path of icon eg:"c:\abc.ico"
rem_fa(fext As String) As Boolean
it removes a file association
fext- extension(without point) eg:"mp3"
'
' Returns:true if successful
else
false
'
' Assumes:THIS IS MY FIRST SUBMISSION, S
'     O IF I MAKE ANY MISTAKES, PLEASE FORGIVE
'     ME FOR THAT
i know that this isnt pure vb but i found it simpler To use rather than api and hence wanted to share
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=64181&lngWId=1
'for details.
'**************************************



Public Function mak_fa(fext As String, extid As String, extanm As String, extico As String) As Boolean
    On Error Goto erh
    mak_fa = True
    Dim o As Object
    Set o = CreateObject("wscript.shell")
    o.regwrite "HKCR\." + fext + "\", extid, "REG_SZ"
    o.regwrite "HKCR\." + fext + "\DefaultIcon\", extico, "REG_SZ"
    o.regwrite "HKCR\." + fext + "\Shell\Open\Command\", extanm + " %1", "REG_SZ"
    Exit Function
    erh:
    mak_fa = False
End Function


Public Function rem_fa(fext As String) As Boolean
    On Error Goto erh
    rem_fa = True
    Dim o As Object
    Set o = CreateObject("wscript.shell")
    o.regdelete "HKCR\." + fext
    Exit Function
    erh:
    rem_fa = False
End Function
