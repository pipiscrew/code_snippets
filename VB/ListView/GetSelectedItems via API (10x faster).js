'source
'http://vbnet.mvps.org/index.html?code/comctl/lvgetnextitem.htm

'API Listview Get Selected Items
Private Const LVM_FIRST As Long = &H1000
Private Const LVM_GETNEXTITEM  As Long = (LVM_FIRST + 12)
Private Const LVM_GETSELECTEDCOUNT As Long = (LVM_FIRST + 50)
Private Declare Function SendMessage Lib "user32" _
   Alias "SendMessageA" _
  (ByVal hwnd As Long, _
   ByVal wMsg As Long, _
   ByVal wParam As Long, _
   lParam As Any) As Long
'API Listview Get Selected Items

Private Sub Command1_Click()

   Const LVNI_SELECTED = &H2
   Dim nSelected() As Long
   Dim index As Long
   Dim numSelected As Long
   Dim cnt As Long
   

   numSelected = ListView_GetSelectedCount(ListView1.hwnd)

   If numSelected <> 0 Then
   
      ReDim nSelected(0 To numSelected - 1)
      
      Do
      
         index = ListView_GetNextItem(ListView1.hwnd, index, LVNI_SELECTED)
         
         If index > -1 Then
            nSelected(cnt) = index
           cnt = cnt + 1
         End If
      
      Loop Until index = -1
   
     'debug only: print results to the list
      For cnt = 0 To numSelected - 1
         Debug.Print nSelected(cnt)
      Next
      
   End If

End Sub

Private Function ListView_GetNextItem(hwnd As Long, _
                                      index As Long, _
                                      flags As Long) As Long

   ListView_GetNextItem = SendMessage(hwnd, _
                                      LVM_GETNEXTITEM, _
                                      index, _
                                      ByVal flags)

End Function


Private Function ListView_GetSelectedCount(hwnd As Long) As Long

   ListView_GetSelectedCount = SendMessage(hwnd, _
                                           LVM_GETSELECTEDCOUNT, _
                                           0&, _
                                           ByVal 0&)

End Function
