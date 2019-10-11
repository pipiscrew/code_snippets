            Dim myProcess As Process = Nothing
            myProcess = Process.Start("Explorer.exe ", SaveFileDialog1.InitialDirectory)
            myProcess.Close()

or

Shell("explorer " & sMyDown, AppWinStyle.NormalFocus)