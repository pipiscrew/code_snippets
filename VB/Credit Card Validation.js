The validation function is reproduced below. The function returns a variant array - a technique we had been getting keen on but will not port directly to VB.NET. The first element of the array gives us a simple check on success or failure and (one or more) subsequent elements can provide additional data. The use of variants should make porting this code to VBscript to sit behind an ASP (Active Server Page) very straightforward. [source :: http://www.adit.co.uk/html/credit_card.html]

Public Function CheckDigits(NumberToCheck As Variant) As Variant
   Dim CharLoop As Integer, NumberLength As Integer
   Dim WorkInt As Integer, CheckSum As Integer
    Dim CharString As Variant, NumberOnly As Variant
    Dim ValidNumber As Boolean
    Dim ErrorInfo As Variant
    ReDim RetVar(1) As Variant

    On Error GoTo CheckDigitsErr

    ValidNumber = False
   'first Remove any space or tab characters
     For CharLoop = 1 To Len(NumberToCheck)
       CharString = Mid(NumberToCheck, CharLoop, 1)
       Select Case CharString
           Case "0" To "9"
               NumberOnly = NumberOnly & CharString
           Case Else
                If Asc(CharString) <> 32 And Asc(CharString) <> 9 Then
                    ErrorInfo = "Non Numeric Characters Found"
               End If
       End Select
   Next CharLoop
    NumberLength = Len(NumberOnly)
    If NumberLength > 0 Then
        For CharLoop = NumberLength To 1 Step -1
            CharString = Mid(NumberOnly, CharLoop, 1)
           WorkInt = (1 + ((NumberLength - CharLoop) Mod 2)) * CInt(CharString)
           If WorkInt >= 10 Then
               CheckSum = CheckSum + WorkInt + 1
            Else
                CheckSum = CheckSum + WorkInt
            End If
        Next CharLoop
        ValidNumber = (CheckSum Mod 10) = 0
    Else
        ErrorInfo = "No Number Supplied"
    End If
    RetVar(0) = ValidNumber
    RetVar(1) = ErrorInfo
    CheckDigits = RetVar()
    Exit Function
CheckDigitsErr:
    Resume Next
End Function

