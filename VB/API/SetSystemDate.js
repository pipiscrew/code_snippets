Private Declare Function SetSystemTime Lib "kernel32" _
   (lpSystemTime As SYSTEMTIME) As Long
   
Private Type SYSTEMTIME
  wYear         As Integer
  wMonth        As Integer
  wDayOfWeek    As Integer
  wDay          As Integer
  wHour         As Integer
  wMinute       As Integer
  wSecond       As Integer
  wMilliseconds As Integer
End Type

Public Declare Sub GetSystemTime Lib "kernel32" (lpSystemTime As SYSTEMTIME)
'
Function SetSysDt(dtSet As Date)

Screen.MousePointer = vbArrowHourglass

    Dim CurTm As SYSTEMTIME
    
    
    GetSystemTime CurTm
    
    CurTm.wDay = Day(dtSet)
    CurTm.wMonth = Month(dtSet)
    CurTm.wYear = Year(dtSet)
    CurTm.wDayOfWeek = Weekday(dtSet)
    
    SetSystemTime CurTm
    
Screen.MousePointer = 0
End Function

