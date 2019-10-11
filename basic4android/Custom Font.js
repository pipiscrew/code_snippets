Dim Sonda As Typeface
Sonda = Typeface.LoadFromAssets("wurm.ttf")
Dim dialog As CustomDialog
Dim lb As Label
lb.Initialize(dialog)
lb.Typeface = Sonda
lb.TextSize = 16
lb.Text = "This is my text what I write for B4A forum." _
&CRLF& "Ho Ho Ho Ho" _
&CRLF& CRLF& _
"Today is a beautiful day here in Croatia :)"

dialog.AddView(lb, 0dip, 0dip, 100%x, 100%y)
dialog.Show("My Title", "OK", "Cancel", "No", LoadBitmap(File.DirAssets, "nfo.png"))