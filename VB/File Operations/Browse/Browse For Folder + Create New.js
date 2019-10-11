'**************************************
' Name: BrowseFolder Module
' Description:For those that like to cre
'     ate objects on the fly and avoid extra c
'     ontrols, this shell interface module pro
'     vides easy access to the BrowseForFolder
'     dialog with drop down list support for c
'     onstants and all system folders. It even
'     creates them with their corresponding de
'     sktop.ini file and proper icon if not pr
'     esent already. Windows handles the NewFo
'     lder errors and error handling is includ
'     ed to rule out invalid paths.
' By: D.W.
'
' Assumes:Copy and paste code into notep
'     ad and save as Browse.bas then run. Samp
'     le code is in the Sub Main() procedure.
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=60460&lngWId=1
'for details.
'**************************************

Attribute VB_Name = "Browse"
Option Explicit
Private Const BIF_EDITBOX = &H10
Private Const BIF_NEWDIALOGSTYLE = &H40


Public Enum ShellSpecialFolderConstants
    ssfALTSTARTUP = 29
    ssfAPPDATA = 26
    ssfBITBUCKET = 10
    ssfCOMMONALTSTARTUP = 30
    ssfCOMMONAPPDATA = 35
    ssfCOMMONDESKTOPDIR = 25
    ssfCOMMONFAVORITES = 31
    ssfCOMMONPROGRAMS = 23
    ssfCOMMONSTARTMENU = 22
    ssfCOMMONSTARTUP = 24
    ssfCONTROLS = 3
    ssfCOOKIES = 33
    ssfDESKTOP = 0
    ssfDESKTOPDIRECTORY = 16
    ssfDRIVES = 17
    ssfFAVORITES = 6
    ssfFONTS = 20
    ssfHISTORY = 34
    ssfINTERNETCACHE = 32
    ssfLOCALAPPDATA = 28
    ssfMYPICTURES = 39
    ssfNETHOOD = 19
    ssfNETWORK = 18
    ssfPERSONAL = 5
    ssfPRINTERS = 4
    ssfPRINTHOOD = 27
    ssfPROFILE = 40
    ssfPROGRAMFILES = 38
    ssfPROGRAMFILESx86 = 48
    ssfPROGRAMS = 2
    ssfRECENT = 8
    ssfSENDTO = 9
    ssfSTARTMENU = 11
    ssfSTARTUP = 7
    ssfSYSTEM = 37
    ssfSYSTEMx86 = 41
    ssfTEMPLATES = 21
    ssfWINDOWS = 36
End Enum


Public Function BrowseFolder(Optional OpenAt As ShellSpecialFolderConstants) As String
    Dim ShellApplication As Object
    Dim Folder As Object
    Set ShellApplication = CreateObject("Shell.Application")
    On Error Resume Next
    Set Folder = ShellApplication.BrowseForFolder(0, "Select Folder...", BIF_EDITBOX Or BIF_NEWDIALOGSTYLE, CInt(OpenAt))
    BrowseFolder = Folder.Items.Item.Path
    On Error Goto 0


    If Left(BrowseFolder, 2) = "::" Or InStr(1, BrowseFolder, "\") = 0 Then
        BrowseFolder = vbNullString
    End If
End Function


Sub Main()
    Dim Msg As String
    'backspace the ( HERE and retype it to s
    '     ee the autocomplete list
    ' |
    ' |
    Msg = BrowseFolder(ssfPROFILE)
    If Msg <> vbNullString Then MsgBox Msg
End Sub
