	Dim panels(3) As Panel
	For i = 0 To panels.Length - 1
		panels(i).Initialize("panels")
		panels(i).Color = Colors.RGB(Rnd(0, 255), Rnd(0, 255), Rnd(0, 255))
		Dim lbl As Label
		lbl.Initialize("")
		lbl.Text = "I'm Panel: " & i
		lbl.TextSize = 20
		lbl.TextColor = Colors.White
		panels(i).AddView(lbl, 20%x, 40%y, 60%x, 30dip)
		Activity.AddView(panels(i), 100%x, 0, 100%x, 100%y - 60dip) 'add the panel to the layout
		Activity.AddMenuItem("Panel #" & i, "Menu")
	Next