original:
        Private Function GetHexColor(colorObj as System.Drawing.Color) as String
               return "#" & Hex(colorObj.R) & Hex(colorObj.G) & Hex(colorObj.B)
        End function


alla trwei skalwma me to 0 opote:

    Private Function GetHexColor(ByVal colorObj As System.Drawing.Color) As String
        Return "#" & IIf(colorObj.R = 0, "00", Hex(colorObj.R)) & IIf(colorObj.G = 0, "00", Hex(colorObj.G)) & IIf(colorObj.B = 0, "00", Hex(colorObj.B))
    End Function







OR


Convert a RGB color to System.Drawing.Color:
Dim col As System.Drawing.Color = System.Drawing.ColorTranslator.FromHtml("#FFCC66")

 

Convert a System.Drawing.Color to RGB string:
Dim sHtmlColor As String = System.Drawing.ColorTranslator.ToHtml(col)


OR from ARGB (also for RGB override)
DbiSchedule1.TitleBackColorMiddle = Color.FromArgb(0, 0, 0)


'-- Set Pen color from RGB
Dim oPen As System.Drawing.Pen = New System.Drawing.Pen(Color.FromArgb(Benchmarks(i).R, Benchmarks(i).G, Benchmarks(i).B))