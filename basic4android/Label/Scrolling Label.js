//http://www.basic4ppc.com/forum/basic4android-updates-questions/8831-scrolling-labels.html#post49199

Sub Process_Globals
	Type ScrollingLabel (lbl As Label, Canvas As Canvas, Bitmap As Bitmap, _ 
		SrcRect As Rect, DestRect As Rect)
	Dim Gap As Int
	Gap = 50dip
End Sub

Sub StartScrolling (lbl As Label, txt As String) As ScrollingLabel
	Dim SL As ScrollingLabel
	SL.Initialize
	SL.lbl = lbl
	SL.Canvas.Initialize(lbl)
	Dim width As Int
	width = SL.Canvas.MeasureStringWidth(txt, lbl.Typeface, lbl.TextSize)
	Dim b As Bitmap
	b.InitializeMutable(width + Gap + lbl.Width, lbl.Height)
	Dim c As Canvas
	c.Initialize2(b)
	c.DrawText(txt, 0dip, b.Height / 2, lbl.Typeface, lbl.TextSize, lbl.TextColor, "LEFT")
	c.DrawText(txt, width + Gap, b.Height / 2, lbl.Typeface, lbl.TextSize, lbl.TextColor, "LEFT")
	SL.SrcRect.Initialize(0, 0, lbl.Width, lbl.Height)
	SL.DestRect.Initialize(0, 0, lbl.Width, lbl.Height)
	SL.Bitmap = b
	SL.Canvas.DrawBitmap(SL.Bitmap, SL.SrcRect, SL.DestRect)
	SL.lbl.Invalidate
	Return SL
End Sub

Sub TimerTick (Labels As List)
	For i = 0 To Labels.Size - 1
		Dim SL As ScrollingLabel
		SL = Labels.Get(i)
		SL.SrcRect.Left = SL.SrcRect.Left + 1dip
		SL.SrcRect.Right = SL.SrcRect.Left + SL.lbl.Width
		If SL.SrcRect.Right > SL.Bitmap.Width Then
			SL.SrcRect.Left = 0
			SL.SrcRect.Right = SL.SrcRect.Left + SL.lbl.Width
		End If
		
		SL.Canvas.DrawRect(SL.DestRect, Colors.Transparent, True, 0)
		SL.Canvas.DrawBitmap(SL.Bitmap, SL.SrcRect, SL.DestRect)
		SL.lbl.Invalidate
	Next
End Sub