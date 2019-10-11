'also @ http://msdn.microsoft.com/en-us/library/ms171728%28VS.80%29.aspx
Imports System.Threading


Dim t As Thread

RDDParser.MakeRequest einai h sub mesa sthn classh 'h kapoy alloy
t = New Thread(AddressOf RDDParser.MakeRequest)
t.Start()




ftiaxnoyme ena Callback toy event
    
            Delegate Sub RDDParser_ServerResponceCallback(ByVal URLresult As String)

    Private Sub RDDParser_ServerResponce(ByVal URLresult As String) Handles RDDParser.ServerResponce
        If Me.List2.InvokeRequired Then
            Dim d As New RDDParser_ServerResponceCallback(AddressOf RDDParser_ServerResponce)
            Me.Invoke(d, New Object() {URLresult})
        Else

            Dim tmp$, pos1%

            tmp = URLresult
            pos1 = InStr(tmp, "you have requested")

            List2.Items.Add(AdvSplt(tmp, "href=""", """>", pos1))
        End If
    End Sub