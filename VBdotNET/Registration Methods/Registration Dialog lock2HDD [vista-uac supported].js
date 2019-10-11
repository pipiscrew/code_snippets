    Public Function GetHDSerial() As String
        Dim disk As New ManagementObject("Win32_LogicalDisk.DeviceID=""C:""")
        Dim diskPropertyA As PropertyData = disk.Properties("VolumeSerialNumber")
        Return diskPropertyA.Value.ToString()
    End Function

    Private Sub frmREG_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim tempSTR = ""
        Dim fREG = ""
        Dim MFact As Integer
        Cursor = System.Windows.Forms.Cursors.WaitCursor

        '>>GET HDD Serial
        Try
            regCODE.Text = Invert(GetHDSerial())
        Catch
            Err.Clear()
            regCODE.Text = "B6E503C8"
        End Try
        '>>GET HDD Serial

        tempSTR = Mid(regCODE.Text & "9876353798732593209812567", 1, 25)
        tempSTR = Replace(tempSTR, "E", "3", , , CompaRemethod.Text)

        MFact = Int(Val(Val(Val(Mid(tempSTR, 1, 1)) + Val(Mid(tempSTR, 12, 1)) + Val(Mid(tempSTR, 24, 1)) + Val(Mid(tempSTR, 2, 1))) / 4))
        fREG = Mid(iSplit(tempSTR, MFact, 0), 1, 5)
        fREG = fREG & "-" & Mid(iSplit(tempSTR, MFact, 1), 1, 5)
        fREG = fREG & "-" & Mid(iSplit(tempSTR, MFact, 2), 1, 5)
        fREG = fREG & "-" & Mid(iSplit(tempSTR, MFact, 3), 1, 5)
        fREG = fREG & "-" & Mid(iSplit(tempSTR, MFact, 4), 1, 5)



        Dim readValue As String = ""

        Try
            readValue = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\XYZProductions", "Toolbar", "")
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Critical, apTitle)
        End Try

        Cursor = System.Windows.Forms.Cursors.Default
        If readValue = fREG Then
            Dim frmMain As New frmSHOPS
            frmMain.Show()
            Me.Close()
        Else
            KryptonTextBox1.Tag = fREG
        End If


    End Sub

    Private Function Invert(ByVal strng As String) As String
        Dim i As Integer
        Dim tmp_txt As String = ""

        i = Len(strng)

        Do Until i = 0

            tmp_txt = tmp_txt & Mid(strng, i, 1)

            i = i - 1
        Loop

        Return tmp_txt

    End Function

    Public Function iSplit(ByVal orig As String, ByVal mFactor As Integer, ByVal Partition As Integer) As String
        Dim tmp_key As String
        Dim tmp_istring(0 To 5) As String

        tmp_key = orig

        tmp_istring(0) = Val(Mid(tmp_key, 1, 5)) * mFactor
        tmp_istring(1) = Val(Mid(tmp_key, 6, 5)) * mFactor
        tmp_istring(2) = Val(Mid(tmp_key, 11, 5)) * mFactor
        tmp_istring(3) = Val(Mid(tmp_key, 16, 5)) * mFactor
        tmp_istring(4) = Val(Mid(tmp_key, 21, 5)) * mFactor

        iSplit = tmp_istring(Partition)

    End Function

    Private Sub KryptonButton2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton2.Click
        Application.Exit()
    End Sub

    Private Sub KryptonButton1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton1.Click
        If KryptonTextBox1.Text = KryptonTextBox1.Tag Then
            Try
                My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\XYZProductions", "Toolbar", KryptonTextBox1.Text)
                MsgBox("Please restart the application", MsgBoxStyle.Information, apTitle)
            Catch ex As Exception
                MsgBox("UAC ERROR - Please disable UAC, make the procedure again" & vbCrLf & vbCrLf & "Activation not completed", MsgBoxStyle.Critical, apTitle)
            End Try

            Application.Exit()
        Else
            Application.Exit()
        End If
    End Sub