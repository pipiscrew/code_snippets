        For Each drive As String In IO.Directory.GetLogicalDrives()
            ComboBoxEdit1.Properties.Items.Add(drive)
        Next drive


************************OR***************

Imports System.Runtime.InteropServices

Public Class MediaStructure

    Const DRIVE_CDROM As Integer = 5
    Const DRIVE_FIXED As Integer = 3
    Const DRIVE_NO_ROOT As Integer = 1
    Const DRIVE_REMOTE As Integer = 4
    Const DRIVE_REMOVABLE As Integer = 2

    <DllImport("kernel32")> _
    Private Shared Function GetDriveType(ByVal path As String) As Integer
    End Function


    Private Sub MediaStrucure_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim img$
        Dim inf As System.IO.DirectoryInfo = Nothing

        Dim drives()
        Dim en As System.Collections.IEnumerator
        drives = System.IO.Directory.GetLogicalDrives()
        en = drives.GetEnumerator()

        While en.MoveNext()


            If GetDriveType(en.Current.ToString()) = DRIVE_FIXED Then
                img = "[fixed]"
            ElseIf GetDriveType(en.Current.ToString()) = DRIVE_CDROM Then
                img = "[cd-rom]"
            ElseIf GetDriveType(en.Current.ToString()) = DRIVE_REMOVABLE Then
                img = "[removable]"
            Else
                img = "[-unknown-]"
            End If

            ComboBoxEdit1.Properties.Items.Add(en.Current.ToString & "   " & img)

        End While
    End Sub
