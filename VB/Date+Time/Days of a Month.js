Private Function TotalMonthDays(m As Integer, yr As Integer) As Integer 
    Select Case m
    Case 1, 3, 5, 7, 8, 10, 12: TotalMonthDays = 31
    Case 2
    Select Case LeapYear(yr)
    Case 1 'leap year
    TotalMonthDays = 29
    Case 0 'Non leap year
    TotalMonthDays = 28 
    End Select
    Case 4, 6, 9, 11: TotalMonthDays = 30
    End Select
    End Function
    Private Function LeapYear(yr As Integer) As Integer
    '=======================================
    '     ==
    'Find if the yr is leap or not
    'Return value 1 = Leap Year
    'Return value 0 = not Leap Year
    '=======================================
    '     ==
    Select Case yr Mod 4
    Case 0 'Divide 4
    Select Case yr Mod 100
    Case 0 'is century
    Select Case yr Mod 400
    Case 0: LeapYear = 1
    Case Else: LeapYear = 0
    End Select
    Case Else 'is not century
    LeapYear = 1
    End Select
    Case Else 'not Divide 4
    LeapYear = 0
    End Select
    End Function

'h aplaaaaaaa
MsgBox DateSerial(Year(Now), Month(Now) + 1, 1) - 1