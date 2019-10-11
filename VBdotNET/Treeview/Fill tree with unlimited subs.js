    Private Function FillTREE() As Integer
        Dim dt As DataTable
        Dim maxID%
        Dim newNODE As New TreeNode
        Dim trMini As TreeNode()
        Dim TotalCodes%

        dt = sqlC.DataTable("select nodeid,nodename,parentnode,isfolder from codes")

        '>>ADD ROOT named CODES
        newNODE = New TreeNode
        newNODE.Text = "Codes"
        newNODE.ImageIndex = 0
        newNODE.SelectedImageIndex = 1
        newNODE.Name = "0"
        TR.Nodes.Add(newNODE)
        '>>ADD ROOT named CODES

        Try
            maxID = sqlC.ExecuteSQLScalar("select max(nodeid) from codes") ' where isfolder=true")
        Catch ex As Exception
            Return 0
        End Try

        If maxID = 0 Then Return 0

        Dim filterResult() As DataRow

        For i = 0 To maxID

            filterResult = dt.Select("[parentnode] = " & i, "isfolder DESC ,nodename ASC")


            For Each currentRow As DataRow In filterResult

                If currentRow("isfolder") = True Then
                    'folders 

                    If currentRow("parentnode") = 0 Then
                        newNODE = New TreeNode
                        newNODE.Tag = currentRow("nodeid")
                        newNODE.Text = currentRow("nodename")
                        newNODE.ImageIndex = 0
                        newNODE.SelectedImageIndex = 1
                        newNODE.Name = currentRow("nodeid") 'aka KEY for MS

                        trMini = TR.Nodes.Find(currentRow("parentnode"), True)

                        trMini(0).Nodes.Add(newNODE)
                    Else
                        newNODE = New TreeNode
                        newNODE.Tag = currentRow("nodeid")
                        newNODE.Text = currentRow("nodename")
                        newNODE.ImageIndex = 0
                        newNODE.SelectedImageIndex = 1
                        newNODE.Name = currentRow("nodeid")

                        trMini = TR.Nodes.Find(currentRow("parentnode"), True)

                        trMini(0).Nodes.Add(newNODE)
                    End If

                Else
                    'codes
                    TotalCodes += 1

                    newNODE = New TreeNode
                    newNODE.Name = currentRow("nodeid")
                    newNODE.Text = currentRow("nodename")
                    newNODE.ImageIndex = 2
                    newNODE.SelectedImageIndex = 2

                    trMini = TR.Nodes.Find(currentRow("parentnode"), True)

                    trMini(0).Nodes.Add(newNODE)
                End If


            Next


        Next i

        dt.Dispose()
        filterResult = Nothing

        TR.Nodes(0).Expand()

        Return (TotalCodes)
    End Function