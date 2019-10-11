    Public Sub Main(ByVal CmdArgs() As String)
        Dim i As Integer

        For i = 0 To UBound(CmdArgs)
            MsgBox(CmdArgs(i))
        Next i

        Form1.Show()
    End Sub


'h otan eisai se forma


For Each arg As String In Environment.GetCommandLineArgs()
MsgBox(arg)
Next arg


modded
        For Each arg As String In Environment.GetCommandLineArgs()
            If arg.EndsWith(".exe").ToString.ToLower = False Then
                MsgBox(arg)
            End If
        Next arg
        
        
'or

        Dim i%
        For i = 0 To My.Application.CommandLineArgs.Count - 1
            If i = 0 Then
                downloadPath = My.Application.CommandLineArgs(i).ToString()
                chkFG.Checked = True
                autoEnabled = True
            ElseIf i = 1 Then
                txtFG.Text = My.Application.CommandLineArgs(i).ToString()
            End If
        Next
        
        
'faster
        If My.Application.CommandLineArgs.Count > 0 Then
            MsgBox(My.Application.CommandLineArgs(0).ToString())
        End If