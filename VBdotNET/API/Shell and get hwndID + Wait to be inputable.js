        Dim SPY As New Process
        SPY = Process.Start(Application.StartupPath & "\DeDot.exe")
        SPY.WaitForInputIdle(-1)

        Dim i% = 0
	  'ean kai sto test to I ginotane 1
'to bazoyme gia logous validation
        While SPY.MainWindowHandle = 0
            If i > 10 Then Exit Sub

            SPY.Refresh()
            i = +1
        End While

        MsgBox(SPY.MainWindowHandle)

'oti code 8eloyme edw 
'
'
'oti code 8eloyme edw 

        SPY.WaitForExit()
        MsgBox("Df")