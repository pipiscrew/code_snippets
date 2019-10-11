'http://msdn.microsoft.com/en-us/library/chsc1tx6.aspx

    '===========CALL A METHOD
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        CallByName(Me, "takis", CallType.Method, Nothing)
        CallByName(Me, "TakisParam", CallType.Method, "makis", True)
    End Sub

    'must be public
    Public Sub Takis()
        MsgBox("takis")
    End Sub

    'must be public
    Public Sub TakisParam(ByVal str$, ByVal bl As Boolean)
        MsgBox(str & " " & bl)
    End Sub


    '===========MANIPULATE CTL
    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        'Set a property.
        CallByName(TextBox1, "Text", CallType.Set, "dynamic")

        'Retrieve the value of a property.
        MsgBox(CallByName(TextBox1, "Text", CallType.Get))

        'Call a method.
        CallByName(TextBox1, "Hide", CallType.Method)

    End Sub


    '===========OBJECT
    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        TestCallByName2()
    End Sub

    Public Sub TestCallByName2()
        Dim col As New Collection()

        'Store the string "Item One" in a collection by 
        'calling the Add method.
        CallByName(col, "Add", CallType.Method, "Item One")

        'Retrieve the first entry from the collection using the 
        'Item property and display it using MsgBox().
        MsgBox(CallByName(col, "Item", CallType.Get, 1))
    End Sub