Public Sub ArrayRemoveItem(ItemArray As Variant, ByVal ItemElement As Long)

'PURPOSE:       Remove an item from an array, then
'               resize the array

'PARAMETERS:    ItemArray: Array, passed by reference, with
'               item to be Removed.  Array must not be fixed

'               ItemElement: Element to Remove
                
'EXAMPLE:
'           dim iCtr as integer
'           Dim sTest() As String
'           ReDim sTest(2) As String
'           sTest(0) = "Hello"
'           sTest(1) = "World"
'           sTest(2) = "!"
'           ArrayRemoveItem sTest, 1
'           for iCtr = 0 to ubound(sTest)
'               Debug.print sTest(ictr)
'           next
'
'           Prints
'
'           "Hello"
'           "!"
'           To the Debug Window

Dim lCtr As Long
Dim lTop As Long
Dim lBottom As Long

If Not IsArray(ItemArray) Then
    Err.Raise 13, , "Type Mismatch"
    Exit Sub
End If

lTop = UBound(ItemArray)
lBottom = LBound(ItemArray)

If ItemElement < lBottom Or ItemElement > lTop Then
    Err.Raise 9, , "Subscript out of Range"
    Exit Sub
End If

For lCtr = ItemElement To lTop - 1
    ItemArray(lCtr) = ItemArray(lCtr + 1)
Next
On Error GoTo ErrorHandler:

ReDim Preserve ItemArray(lBottom To lTop - 1)

Exit Sub
ErrorHandler:
  'An error will occur if array is fixed
    Err.Raise Err.Number, , _
       "You must pass a resizable array to this function"
End Sub