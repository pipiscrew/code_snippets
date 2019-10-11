'http://www.vbforums.com/archive/index.php/t-514847.html

Dim sUni As String
sUni = GetUnicodeText(Me.hWnd)
Clipboard.Clear
SetUnicodeText Me.hWnd, sUni


' here are the declarations & 2 functions
' Clipboard functions:
Private Declare Function OpenClipboard Lib "USER32" (ByVal hWnd As Long) As Long
Private Declare Function CloseClipboard Lib "USER32" () As Long
Private Declare Function GetClipboardData Lib "USER32" (ByVal wFormat As Long) As Long
Private Declare Function SetClipboardData Lib "USER32" (ByVal wFormat As Long, ByVal hMem As Long) As Long
Private Declare Function IsClipboardFormatAvailable Lib "USER32" (ByVal wFormat As Long) As Long

' Memory functions:
Private Declare Function GlobalAlloc Lib "kernel32" (ByVal wFlags As Long, ByVal dwBytes As Long) As Long
Private Declare Function GlobalLock Lib "kernel32" (ByVal hMem As Long) As Long
Private Declare Function GlobalSize Lib "kernel32" (ByVal hMem As Long) As Long
Private Declare Function GlobalUnlock Lib "kernel32" (ByVal hMem As Long) As Long
Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (lpvDest As Any, lpvSource As Any, ByVal cbCopy As Long)
Private Const CF_UNICODETEXT = 13
Private Const GMEM_DDESHARE As Long = &H2000

Public Function GetUnicodeText(hWnd As Long) As String

' Returns a byte array containing binary data on the clipboard for
' format lFormatID:
Dim hMem As Long, lSize As Long, lPtr As Long
Dim sReturn As String

If OpenClipboard(hWnd) Then

If IsClipboardFormatAvailable(CF_UNICODETEXT) = 0 Then Exit Function

hMem = GetClipboardData(CF_UNICODETEXT)
' If success:
If (hMem <> 0) Then
' Get the size of this memory block:
lSize = GlobalSize(hMem)
' Get a pointer to the memory:
lPtr = GlobalLock(hMem)
If (lSize > 0) Then
' Resize the byte array to hold the data:
sReturn = String$(lSize \ 2 + 1, 0)
' Copy from the pointer into the array:
CopyMemory ByVal StrPtr(sReturn), ByVal lPtr, lSize
End If
' Unlock the memory block:
GlobalUnlock hMem
' Success:
GetUnicodeText = sReturn
' Don't free the memory - it belongs to the clipboard.
End If

CloseClipboard
End If

End Function

Public Function SetUnicodeText(hWnd As Long, sUniText As String) As Boolean
' Puts the binary data contained in bData() onto the clipboard under
' format lFormatID:
Dim lSize As Long
Dim lPtr As Long
Dim hMem As Long

' Determine the size of the binary data to write:
If OpenClipboard(hWnd) Then
lSize = LenB(sUniText) + 2
' Generate global memory to hold this:
hMem = GlobalAlloc(GMEM_DDESHARE, lSize)
If (hMem <> 0) Then
' Get pointer to the memory block:
lPtr = GlobalLock(hMem)
' Copy the data into the memory block:
CopyMemory ByVal lPtr, ByVal StrPtr(sUniText), lSize - 2
' Unlock the memory block.
GlobalUnlock hMem

' Now set the clipboard data:
If (SetClipboardData(CF_UNICODETEXT, hMem) <> 0) Then
' Success:
SetUnicodeText = True
End If
End If
' We don't free the memory because the clipboard takes
' care of that now.
CloseClipboard
End If
End Function

--

nickline, if using the above code, I see a potential issue you may want to avoid. Recommend modifying my sample code to below or rework the IF ELSE statements to ensure CloseClipboard is called.
' Change this line
If IsClipboardFormatAvailable(CF_UNICODETEXT) = 0 Then Exit Function

' to read this way
If IsClipboardFormatAvailable(CF_UNICODETEXT) = 0 Then 
CloseClipboard
Exit Function
End If