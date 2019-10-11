Public Enum colConvertType
    colRGBtoVB = 0
    colRGBtoHTML = 1
    colVBtoRGB = 2
    colVBtoHTML = 3
    colHTMLtoRGB = 4
    colHTMLtoVB = 5
End Enum


Function convertColor(convert As colConvertType, ParamArray strColor()) As String


    Select Case convert
        Case colRGBtoHTML
        convertColor = Left("00" & Hex(strColor(0)), 2)
        convertColor = Left("00" & convertColor & Hex(strColor(1)), 2)
        convertColor = Left("00" & convertColor & Hex(strColor(2)), 2)
        Case colRGBtoVB
        convertColor = RGB(strColor(0), strColor(1), strColor(2))
        Case colVBtoRGB
        convertColor = Right("000000" & Hex(strColor(0)), 6)
        r = CByte("&h" & Mid(convertColor, 5, 2))
        g = CByte("&h" & Mid(convertColor, 3, 2))
        b = CByte("&h" & Mid(convertColor, 1, 2))
        convertColor = r & "," & g & "," & b
        Case colVBtoHTML
        convertColor = Right("000000" & Hex(strColor(0)), 6)
        r = Mid(convertColor, 5, 2)
        g = Mid(convertColor, 3, 2)
        b = Mid(convertColor, 1, 2)
        convertColor = r & g & b
        Case colHTMLtoRGB
        convertColor = Right("000000" & Hex(strColor(0)), 6)
        r = CByte("&h" & Mid(convertColor, 1, 2))
        g = CByte("&h" & Mid(convertColor, 3, 2))
        b = CByte("&h" & Mid(convertColor, 5, 2))
        convertColor = r & "," & g & "," & b
        Case colHTMLtoVB
        convertColor = Right("000000" & Hex(strColor(0)), 6)
        r = CByte("&h" & Mid(convertColor, 1, 2))
        g = CByte("&h" & Mid(convertColor, 3, 2))
        b = CByte("&h" & Mid(convertColor, 5, 2))
        convertColor = RGB(r, g, b)
    End Select
End Function