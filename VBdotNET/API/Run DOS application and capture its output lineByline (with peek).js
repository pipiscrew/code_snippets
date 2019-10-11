       Dim info As ProcessStartInfo = New ProcessStartInfo

        'info.WorkingDirectory = "C:\Program Files\Babel"
        info.FileName = "C:\Program Files\Babel\babel.exe"
        info.Arguments = """" & SOURCEfilepath & """ " & arg
        info.CreateNoWindow = True
        info.UseShellExecute = False
        info.RedirectStandardOutput = True
        info.RedirectStandardError = True


        Dim p As Process = Process.Start(info)

        Dim buffSize As Integer = 4096
        Dim buffData(buffSize) As Byte
        Dim bytesRead As Integer = 0

        Do
            Application.DoEvents()
            Array.Clear(buffData, 0, buffData.Length)
            bytesRead = p.StandardOutput.BaseStream.Read(buffData, 0, buffSize)

            If bytesRead = 0 Then Exit Do

            Dim message As String = System.Text.Encoding.ASCII.GetString(buffData, 0, buffData.Length)
            'MsgBox(message)
            txtResults.Text = txtResults.Text & message & vbCrLf
            txtResults.SelectionStart = Len(txtResults.Text)
            txtResults.ScrollToCaret()
        Loop

        p.WaitForExit()