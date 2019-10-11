//http://www.basic4ppc.com/forum/basic4android-updates-questions/8305-corners-around-label.html#post46618

Dim cd As ColorDrawable
cd.Initialze(Colors.Green, 5dip)
Button1.Background = cd

///////////////////////////////////////

Dim cd As ColorDrawable
cd.Initialize(Colors.Green, 5dip)


Dim lbl As Label
lbl.Initialize("cellPRD") 'need this to create an event 
lbl.Background = cd 'rounded corner
lbl.Text =productName
lbl.Gravity = Gravity.CENTER
lbl.Color  = Colors.Transparent 'backcolor
lbl.TextSize = 16
lbl.TextColor = Colors.Gray
'lbl.Color= Colors.White
lbl.Tag = rc
'---store information to tag

'------------------add to scrollview panel
TablePRD.AddView(lbl, 105dip, rowHeightPRD  * recPosition, imgDimensionPRD, imgDimensionPRD)
