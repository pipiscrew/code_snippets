    '**************************************
    ' Name: URLDecode Function
    ' Description:Decodes a URLEncoded strin
    '     g
    ' By: Markus Diersbock
    '
    ' Inputs:sEncodedURL - Encoded String to
    '     Decode
    '
    ' Returns:Decoded String
    '
    'This code is copyrighted and has
    ' limited warranties.Please see http://w
    '     ww.Planet-Source-Code.com/vb/scripts/Sho
    '     wCode.asp?txtCodeId=44365&lngWId=1
    'for details.
    '**************************************
    
    Public Function URLDecode(sEncodedURL As String) As String
    On Error GoTo Catch
    
    Dim iLoop As Integer
    Dim sRtn As String
    Dim sTmp As String
    
    If Len(sEncodedURL) > 0 Then
    ' Loop through each char
    For iLoop = 1 To Len(sEncodedURL)
    sTmp = Mid(sEncodedURL, iLoop, 1)
    sTmp = Replace(sTmp, "+", " ")
    ' If char is % then get next two chars
    ' and convert from HEX to decimal
    If sTmp = "%" and LEN(sEncodedURL) + 1 > iLoop + 2 Then
    sTmp = Mid(sEncodedURL, iLoop + 1, 2)
    sTmp = Chr(CDec("&H" & sTmp))
    ' IncRement loop by 2
    iLoop = iLoop + 2
    End If
    sRtn = sRtn & sTmp
    Next iLoop
    URLDecode = sRtn
    End If
    Finally:
    Exit Function
    Catch:
    URLDecode = ""
    Resume Finally
    End Function
