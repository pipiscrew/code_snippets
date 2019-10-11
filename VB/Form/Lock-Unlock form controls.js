'**************************************
' Name: Lock/Unlock form controls
' Description:Subs for locking and unloc
'     king the controls on a form. Useful for 
'     when lengthy procedures are run and you 
'     want to temporarily block input.
' By: Sudif
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=61602&lngWId=1
'for details.
'**************************************



Public Sub Lock_ctls( _
    Frm As Form)
    Dim Ctl As Control


    For Each Ctl In Frm.Controls
        On Error Goto TryLocked
        ' Try Enabled.
        Ctl.Enabled = False
        Goto NextCtl
        ' If error, try Locked.
        TryLocked:
        On Error Goto NextCtl
        Ctl.Locked = True
    NextCtl:
    On Error Goto 0
Next Ctl
End Sub


Public Sub Unlock_ctls( _
    Frm As Form)
    Dim Ctl As Control


    For Each Ctl In Frm.Controls
        On Error Goto TryLocked
        ' Try Enabled.
        Ctl.Enabled = True
        Goto NextCtl
        ' If error, try Locked.
        TryLocked:
        On Error Goto NextCtl
        Ctl.Locked = False
    NextCtl:
    On Error Goto 0
Next Ctl
End Sub
