'**************************************
' Name: NitroSort
' Description:Sort Arrays at lightning s
'     peeds!
I guess you could say this is the sequal To
the TurboSort routine I recently uploaded.
One of the comments pointed out that the CopyMemory API was about as fast as VB could swap strings, but the sort algorythm (BubbleSort) was poor and that the QuickSort algorythm was much faster.After some searching on the mothership, I found
out how the QuickSearch algorythm worked and
viola, here it is. This truely is fast. Here are
the tests results.
My system is a P233 With 128MB of RAM. I generated
an array of 10,000 rows. Each row contained 100
random characters ranging from A-Z.
I performed three tests. Here are the times In
milliseconds.
BubbleSort QuickSort
Test 1131,195.3398.438
Test 2131,351.6421.875
Test 3130,882.8390.625
Whew!
' By: Brian Cidern
'
' Assumes:Create a standard EXE and thro
'     w in Command1. Paste the rest, buckle yo
'     ur seatbelt and fly!!!
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=24342&lngWId=1
'for details.
'**************************************

Option Explicit


Private Declare Sub CopyMemory _
    Lib "kernel32" _
    Alias "RtlMoveMemory" ( _
    lpDest As Any, _
    lpSource As Any, _
    ByVal cbCopy As Long _
    )


Private Sub Command1_Click()
    ' Sort an array with CopyMemory()
    Dim i As Integer
    Dim str_Unsorted As String, str_Sorted As String
    ' Populate some sample data
    Dim vArray(25) As String
    vArray(0) = "EFGHIJKLMNOPQRSTUVWXYZABCD"
    vArray(1) = "RSTUVWXYZABCDEFGHIJKLMNOPQ"
    vArray(2) = "PQRSTUVWXYZABCDEFGHIJKLMNO"
    vArray(3) = "DEFGHIJKLMNOPQRSTUVWXYZABC"
    vArray(4) = "IJKLMNOPQRSTUVWXYZABCDEFGH"
    vArray(5) = "ZABCDEFGHIJKLMNOPQRSTUVWXY"
    vArray(6) = "HIJKLMNOPQRSTUVWXYZABCDEFG"
    vArray(7) = "LMNOPQRSTUVWXYZABCDEFGHIJK"
    vArray(8) = "STUVWXYZABCDEFGHIJKLMNOPQR"
    vArray(9) = "TUVWXYZABCDEFGHIJKLMNOPQRS"
    vArray(10) = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    vArray(11) = "CDEFGHIJKLMNOPQRSTUVWXYZAB"
    vArray(12) = "VWXYZABCDEFGHIJKLMNOPQRSTU"
    vArray(13) = "MNOPQRSTUVWXYZABCDEFGHIJKL"
    vArray(14) = "FGHIJKLMNOPQRSTUVWXYZABCDE"
    vArray(15) = "JKLMNOPQRSTUVWXYZABCDEFGHI"
    vArray(16) = "YZABCDEFGHIJKLMNOPQRSTUVWX"
    vArray(17) = "XYZABCDEFGHIJKLMNOPQRSTUVW"
    vArray(18) = "OPQRSTUVWXYZABCDEFGHIJKLMN"
    vArray(19) = "BCDEFGHIJKLMNOPQRSTUVWXYZA"
    vArray(20) = "GHIJKLMNOPQRSTUVWXYZABCDEF"
    vArray(21) = "KLMNOPQRSTUVWXYZABCDEFGHIJ"
    vArray(22) = "NOPQRSTUVWXYZABCDEFGHIJKLM"
    vArray(23) = "WXYZABCDEFGHIJKLMNOPQRSTUV"
    vArray(24) = "QRSTUVWXYZABCDEFGHIJKLMNOP"
    vArray(25) = "UVWXYZABCDEFGHIJKLMNOPQRST"
    ' Here's the unsorted array


    For i = 0 To UBound(vArray)
        str_Unsorted = str_Unsorted & vArray(i) & vbCrLf
    Next i
    MsgBox str_Unsorted
    QuickSortMe vArray
    ' Here's the sorted array


    For i = 0 To UBound(vArray)
        str_Sorted = str_Sorted & vArray(i) & vbCrLf
    Next i
    MsgBox str_Sorted
End Sub


Sub BubbleSortMe(varArray() As String)
    Dim i As Long, j As Long
    Dim l_Count As Long
    Dim l_Hold As Long
    ' Typical sorting routine
    l_Count = UBound(varArray)


    For i = 0 To l_Count


        For j = i + 1 To l_Count


            If varArray(i) > varArray(j) Then
                ' Here's the juice!
                SwapStrings varArray(i), varArray(j)
            End If
        Next
    Next
End Sub


Sub QuickSortMe(varArray() As String, Optional l_First As Long = -1, Optional l_Last As Long = -1)
    Dim l_Low As Long
    Dim l_Middle As Long
    Dim l_High As Long
    Dim v_Test As Variant


    If l_First = -1 Then
        l_First = LBound(varArray)
    End If


    If l_Last = -1 Then
        l_Last = UBound(varArray)
    End If


    If l_First < l_Last Then
        l_Middle = (l_First + l_Last) / 2
        v_Test = varArray(l_Middle)
        l_Low = l_First
        l_High = l_Last


        Do


            While varArray(l_Low) < v_Test
                l_Low = l_Low + 1
            Wend


            While varArray(l_High) > v_Test
                l_High = l_High - 1
            Wend


            If (l_Low <= l_High) Then
                SwapStrings varArray(l_Low), varArray(l_High)
                l_Low = l_Low + 1
                l_High = l_High - 1
            End If
        Loop While (l_Low <= l_High)


        If l_First < l_High Then
            QuickSortMe varArray, l_First, l_High
        End If


        If l_Low < l_Last Then
            QuickSortMe varArray, l_Low, l_Last
        End If
    End If
End Sub


Sub SwapStrings(pbString1 As String, pbString2 As String)
    Dim l_Hold As Long
    CopyMemory l_Hold, ByVal VarPtr(pbString1), 4
    CopyMemory ByVal VarPtr(pbString1), ByVal VarPtr(pbString2), 4
    CopyMemory ByVal VarPtr(pbString2), l_Hold, 4
End Sub
