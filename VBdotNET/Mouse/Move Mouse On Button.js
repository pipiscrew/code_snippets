Windows.Forms.Cursor.Position = New System.Drawing.Point(Button2.Location.X + Me.Location.X + 50, Button2.Location.Y + Me.Location.Y + 30)

on tabcontrol.tabpage
Windows.Forms.Cursor.Position = New System.Drawing.Point(Windows.Forms.Cursor.Position.X, TabPage2.Location.Y + (TabControl1.Location.Y + Me.Location.Y) + 10)