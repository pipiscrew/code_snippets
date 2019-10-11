'PUT BELOW DECLARATIONS IN A .BAS MODULE

Option Explicit

Private Declare Function FindWindow Lib "user32" Alias _
   "FindWindowA" (ByVal lpClassName As String, _
   ByVal lpWindowName As String) As Long

Private Declare Function FindWindowEx Lib "user32" Alias _
  "FindWindowExA" (ByVal hWnd1 As Long, ByVal hWnd2 As Long, _
   ByVal lpsz1 As String, ByVal lpsz2 As String) As Long
   
Public Declare Function SetTimer& Lib "user32" _
  (ByVal hwnd&, ByVal nIDEvent&, ByVal uElapse&, ByVal _
   lpTimerFunc&)

Private Declare Function KillTimer& Lib "user32" _
  (ByVal hwnd&, ByVal nIDEvent&)

Private Declare Function SendMessage Lib "user32" Alias _
    "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
    ByVal wParam As Long, lParam As Any) As Long

Const EM_SETPASSWORDCHAR = &HCC
Public Const NV_INPUTBOX As Long = &H5000&

'PUT THIS SUB IN A .BAS MODULE

Public Sub TimerProc(ByVal hwnd&, ByVal uMsg&, _
   ByVal idEvent&, ByVal dwTime&)

    Dim EditHwnd As Long

' CHANGE APP.TITLE TO YOUR INPUT BOX TITLE.

    EditHwnd = FindWindowEx(FindWindow("#32770", App.Title), _
       0, "Edit", "")

    Call SendMessage(EditHwnd, EM_SETPASSWORDCHAR, Asc("*"), 0)
    KillTimer hwnd, idEvent
End Sub

'THIS IS HOW TO USE THE CODE FROM WITHIN A FORM

Private Sub Command1_Click()
  Dim ret As String
  SetTimer hwnd, NV_INPUTBOX, 10, AddressOf TimerProc
  ret = InputBox("Enter Password")
End Sub