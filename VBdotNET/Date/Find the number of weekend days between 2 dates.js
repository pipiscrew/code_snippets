'http://www.experts-exchange.com/Programming/Languages/.NET/Visual_Basic.NET/Q_21415112.html

Function BusinessDateDiff(ByVal startDate As Date, ByVal endDate As Date,
 Optional ByVal saturdayIsHoliday As Boolean = True) As Integer
    Dim incr As Integer

    ' incr can be +1 or -1
    If startDate < endDate Then incr = 1 Else incr = -1

    Do Until startDate = endDate
        ' skip to previous or next day
        startDate = startDate.AddDays(incr)
        If startDate.DayOfWeek <> DayOfWeek.Sunday AndAlso _
            (startDate.DayOfWeek <> DayOfWeek.Saturday Or Not
saturdayIsHoliday) Then
            ' if it's a weekday add/subtract one to the result
            BusinessDateDiff += incr
        End If
    Loop
    ' when the loop is exited the function name contains the correct
result
End Function