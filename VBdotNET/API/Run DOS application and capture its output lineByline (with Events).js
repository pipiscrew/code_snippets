
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim info As ProcessStartInfo = New ProcessStartInfo

        'info.WorkingDirectory = "C:\Program Files\Babel"
        info.FileName = "C:\Program Files\Babel\babel.exe"
        info.UseShellExecute = False
        info.RedirectStandardOutput = True
        info.RedirectStandardError = True


        Dim p As Process = Process.Start(info)

        AddHandler p.OutputDataReceived, AddressOf p_OutputDataReceived
        AddHandler p.ErrorDataReceived, AddressOf p_ErrorDataReceived

        p.BeginOutputReadLine()
        p.BeginErrorReadLine()
        p.WaitForExit()

        MsgBox("a")
    End Sub

    Private Sub p_OutputDataReceived(ByVal sender As Object, ByVal e As DataReceivedEventArgs)
        Debug.Print("Received from standard out: " & e.Data)
    End Sub

    Private Sub p_ErrorDataReceived(ByVal sender As Object, ByVal e As DataReceivedEventArgs)
        Console.WriteLine("Received from standard error: " & e.Data)
    End Sub
    
    
    '---------------------------------------------------------
    'use with thread :
    
    
    Private Function ExecuteInternal(ByVal BABELfilepath$, ByVal SOURCEfilepath$, ByVal arg$, ByVal fileNO%) As Boolean
        Dim th As New Threading.Thread(AddressOf DoFile)
        th.Start("""" & SOURCEfilepath & """ " & arg)
    End Function

    Private Sub DoFile(ByVal arg$)

        Dim info As ProcessStartInfo = New ProcessStartInfo

        info.WorkingDirectory = "C:\Program Files\Babel"
        info.FileName = "C:\Program Files\Babel\babel.exe"
        info.Arguments = arg '"""" & SOURCEfilepath & """ " & arg
        info.CreateNoWindow = True
        info.UseShellExecute = False
        info.RedirectStandardOutput = True
        info.RedirectStandardError = True


        Dim p As Process = Process.Start(info)

        AddHandler p.OutputDataReceived, AddressOf p_OutputDataReceived
        ' AddHandler p.ErrorDataReceived, AddressOf p_ErrorDataReceived

        p.BeginOutputReadLine()
        p.BeginErrorReadLine()
        p.WaitForExit()
    End Sub

    Delegate Sub p_OutputDataReceivedCallBack(ByVal sender As Object, ByVal e As DataReceivedEventArgs)

    Private Sub p_OutputDataReceived(ByVal sender As Object, ByVal e As DataReceivedEventArgs)
        If Me.txtResults.InvokeRequired Then
            Dim d As New p_OutputDataReceivedCallBack(AddressOf p_OutputDataReceived)
            Me.Invoke(d, New Object() {sender, e})
        Else
            txtResults.Text = txtResults.Text & e.Data & vbCrLf
        End If
    End Sub