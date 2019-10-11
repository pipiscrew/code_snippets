Format(8, "mmmm") 'doesnt work on win7!

'use :

'call
ConvertMonth(Val("03"))


Private Function ConvertMonth(tmpint As String) As String
    Select Case Trim(tmpint)
        Case "1"
            ConvertMonth = "Ιανουάριος"
        Case "2"
            ConvertMonth = "Φεβρουάριος"
        Case "3"
            ConvertMonth = "Μάρτιος"
        Case "4"
            ConvertMonth = "Απρίλιος"
        Case "5"
            ConvertMonth = "Μάιος"
        Case "6"
            ConvertMonth = "Ιούνιος"
        Case "7"
            ConvertMonth = "Ιούλιος"
        Case "8"
            ConvertMonth = "Αύγουστος"
        Case "9"
            ConvertMonth = "Σεπτέμβριος"
        Case "10"
            ConvertMonth = "Οκτώβριος"
        Case "11"
            ConvertMonth = "Νοέμβριος"
        Case "12"
            ConvertMonth = "Δεκέμβριος"
    End Select
End Function