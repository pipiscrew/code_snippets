If you need to use a temporary work file in your program then you can make a couple of windows calls to manage the whole thing for you. The danger in using fixed work file name is that more than one version of your program could be running the same process at the same time and finding unique file name every time and making sure they get cleaned up from your disk drive afterwards is just an additional task that you do not need. So, place the following declarations in a module:

Public Declare Function GetTempFileName Lib "kernel32" Alias "GetTempFileNameA" (ByVal lpszPath As String, ByVal lpPrefixString As String, ByVal wUnique As Long, ByVal lpTempFileName As String) As Long

Public Declare Function GetTempPath Lib "kernel32" Alias "GetTempPathA" (ByVal nBufferLength As Long, ByVal lpBuffer As String) As Long

You can use the API viewer that comes with VB to copy and paste these declarations into your code or you could make use of the excellent Type Library available from The Mandlebrotset (Check out our External Links Page).

Then you can create a temporary file in a sub as below

Private Sub WorkOnTempFile()
   Dim PathString As String, FileName As String
    Dim RetLength As Long, RetValue As Long
    Dim PathLength As Long
    Dim FileNum As Integer

    PathLength = 250   'A suitably large size - could be larger
   PathString = Space$(PathLength)
    FileName = Space$(PathLength + 64)
    ' A bit bigger - just a point, these must be Strings and not Variants

    RetLength = GetTempPath(PathLength, PathString)
    If RetLength > 0 Then
        'the returned value is the length of the Path to the temporary directory
        'not including the null terminating character
        PathString = Left$(PathString, RetLength)
    Else
        'Some error message to say things went wrong here
        'then bug out ?
   End If
   RetValue = GetTempFileName(PathString, "tmp", 0, FileName)
   If RetValue = 0 Then
       'There was a problem so … as above?
   End If
   'In this case the return value does not help with the file name length
   'so we have to trim off the null termination character used in C, C++ etc.
   RetLength = InStr(FileName, vbNullChar) - 1
   FileName = Left$(FileName, RetLength)
   FileNum = FreeFile
   Open FileName For Output As #FileNum
   'and then do what you need to do

   Close #FileNum

End Sub

