        Dim SPY As New Process
        SPY = Process.Start(Application.StartupPath & "\Netsparker.exe")
        SPY.WaitForInputIdle(-1)

        Dim i% = 0
        While SPY.MainWindowHandle = 0
            If i > 10 Then Exit Sub

            SPY.Refresh()
            i = +1
        End While