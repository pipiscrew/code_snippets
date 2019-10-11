ScaleX(picTemp.Width, vbTwips, vbPixels) 

Debug.Print Printer.ScaleX(2000, vbTwips, vbCentimeters)


always with comma! like ::
MsgBox ScaleX("0,5", vbCentimeters, vbInches)