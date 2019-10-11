Private Sub Timer1_Timer()
If Timer1.Tag = "" Then Label1(8).ForeColor = &HFFFF00: Timer1.Tag = "1"
If Timer1.Tag = "3" Then Timer1.Enabled = False: Label1(8).ForeColor = &H0&: Timer1.Tag = ""
If Timer1.Tag = "2" Then Label1(8).ForeColor = &HFF&: Timer1.Tag = "3"
If Timer1.Tag = "1" Then Label1(8).ForeColor = &HFFFF00: Timer1.Tag = "2"
End Sub

time1.interval = 200
time1.enable = false

kai 2labels
