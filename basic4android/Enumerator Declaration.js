Sub Process_Globals
    Dim HC As HttpClient
    'Activity is expected to set URL
    Dim URL As String
    Dim Target As OutputStream
    Dim JobStatus As Int
    Dim STATUS_NONE, STATUS_WORKING, STATUS_DONE As Int
    STATUS_NONE = 0
    STATUS_WORKING = 1
    STATUS_DONE = 2
    Dim DoneSuccessfully As Boolean
    Dim Notification1 As Notification
End Sub