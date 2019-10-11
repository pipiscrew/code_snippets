Private Sub btnRead_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnRead.Click
	Dim CMD As New Threading.Thread(AddressOf GETCMD)
	CMD.Start()
End Sub

Private Sub GETCMD()
	Dim CMDprocess As New Process
	Dim StartInfo As New System.Diagnostics.ProcessStartInfo
	
	StartInfo.FileName = "cmd" 'starts cmd window
   'StartInfo.CreateNoWindow = True
	StartInfo.RedirectStandardInput = True
	StartInfo.RedirectStandardOutput = True
	StartInfo.UseShellExecute = False 'required to redirect
	
	CMDprocess.StartInfo = StartInfo
	CMDprocess.Start()
	
	Dim SR As System.IO.StreamReader = CMDprocess.StandardOutput
	Dim SW As System.IO.StreamWriter = CMDprocess.StandardInput
	
	SW.WriteLine(txtCommand.Text) 'the command you wish to run.....
	SW.WriteLine("exit") 'exits command prompt window
	txtResults.Text = SR.ReadToEnd 'returns results of the command window
	SW.Close()
	SR.Close()
End Sub 