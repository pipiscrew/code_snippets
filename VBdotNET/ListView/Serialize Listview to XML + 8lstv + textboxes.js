
    Public Sub SaveOptions()
        Dim ds As New DataSet
        Dim dt As DataTable
        Dim i As Integer
        Dim x As Integer
        Dim k As Integer
        Dim listV As ListView = Nothing
        Dim TableName$ = ""
        Dim newRow As DataRow

        Try

            For k = 1 To 8
                Select Case k
                    Case 1
                        TableName = "Files"
                        listV = lstv
                    Case 2
                        TableName = "Registry"
                        listV = lstv2
                    Case 3
                        TableName = "InstallRun"
                        listV = lstv3
                    Case 4
                        TableName = "InstallDelete"
                        listV = lstv7
                    Case 5
                        TableName = "UninstallRun"
                        listV = lstv4
                    Case 6
                        TableName = "UninstallDelRegistry"
                        listV = lstv6
                    Case 7
                        TableName = "CreateShortcut"
                        listV = lstv5
                    Case 8
                        TableName = "AssociateEXT"
                        listV = lstv8
                End Select

                dt = ds.Tables.Add(TableName)

                For i = 0 To listV.Columns.Count - 1
                    dt.Columns.Add("Col" & i.ToString, Type.GetType("System.String"))
                Next



                For i = 0 To listV.Items.Count - 1
                    newRow = dt.NewRow

                    newRow(0) = listV.Items(i).Text
                    For x = 1 To listV.Columns.Count - 1 'UBound(DRows)
                        newRow(x) = listV.Items(i).SubItems(x).Text
                    Next

                    dt.Rows.Add(newRow)
                Next i

            Next k

            '**Save NON listview data
            dt = ds.Tables.Add("Miscellaneous")
            For i = 0 To 13
                dt.Columns.Add("Col" & i.ToString, Type.GetType("System.String"))
            Next

            newRow = dt.NewRow
            newRow(0) = txtAppName.Text
            newRow(1) = txtBottomTEXT.Text
            newRow(2) = txtBottomURL.Text
            newRow(3) = txtAppDir.Text
            newRow(4) = chkAppDir.Checked
            newRow(5) = txtOutPut.Text
            newRow(6) = cmbLNG.Text
            newRow(7) = txtLNG.Text
            newRow(8) = txtAppPWD.Text
            newRow(9) = txtREADME.Text
            newRow(10) = txtLIC.Text
            newRow(11) = txtBMP.Text
            newRow(12) = txtICO.Text
            newRow(13) = txtUNIico.Text

            dt.Rows.Add(newRow)
            '**Save NON listview data

            ds.WriteXml("c:\test.txt")
        Catch ex As System.Exception
            MsgBox(ex.ToString)
        Finally
            If Not ds Is Nothing Then
                ds.Clear()
                ds.Dispose()
            End If
        End Try
    End Sub

    Public Sub ReloadOptions()
        Dim ds As New DataSet
        Dim dt As DataTable
        Dim dr As DataRow
        Dim i As Integer
        Dim j As Integer
        Dim k As Integer
        Dim listV As ListView = Nothing
        Dim TableName$ = ""

        Try
            ds.ReadXml("c:\test.txt")

            For k = 1 To 8
                Select Case k
                    Case 1
                        TableName = "Files"
                        listV = lstv
                    Case 2
                        TableName = "Registry"
                        listV = lstv2
                    Case 3
                        TableName = "InstallRun"
                        listV = lstv3
                    Case 4
                        TableName = "InstallDelete"
                        listV = lstv7
                    Case 5
                        TableName = "UninstallRun"
                        listV = lstv4
                    Case 6
                        TableName = "UninstallDelRegistry"
                        listV = lstv6
                    Case 7
                        TableName = "CreateShortcut"
                        listV = lstv5
                    Case 8
                        TableName = "AssociateEXT"
                        listV = lstv8
                End Select

                dt = ds.Tables(TableName)


                listV.Items.Clear()

                If Not dt Is Nothing Then
                    For i = 0 To dt.Rows.Count - 1
                        dr = dt.Rows(i)

                        listV.Items.Add(dr(0))

                        For j = 1 To dt.Columns.Count - 1
                            listV.Items(i).SubItems.Add(dr(j))
                        Next
                    Next
                End If

            Next k

            '**Load NON listview data
            dt = ds.Tables("Miscellaneous")

            If Not dt Is Nothing Then
                For i = 0 To dt.Rows.Count - 1
                    dr = dt.Rows(i)

                    txtAppName.Text = dr(0)
                    txtBottomTEXT.Text = dr(1)
                    txtBottomURL.Text = dr(2)
                    txtAppDir.Text = dr(3)
                    chkAppDir.Checked = dr(4)
                    txtOutPut.Text = dr(5)
                    cmbLNG.Text = dr(6)
                    txtLNG.Text = dr(7)
                    txtAppPWD.Text = dr(8)
                    txtREADME.Text = dr(9)
                    txtLIC.Text = dr(10)
                    txtBMP.Text = dr(11)
                    txtICO.Text = dr(12)
                    txtUNIico.Text = dr(13)
                Next i
            End If
            '**Load NON listview data

        Catch ex As System.Exception
            MsgBox(ex.ToString)
        Finally
            If Not ds Is Nothing Then
                ds.Clear()
                ds.Dispose()
            End If
        End Try
    End Sub

    Private Sub Button47_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button47.Click
        SaveOptions()
    End Sub

    Private Sub Button48_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button48.Click
        ReloadOptions()

        '**Restore listview icons!
        Dim i%
        Dim ic As Icon

        For i = 0 To lstv.Items.Count - 1
            If IO.Path.GetExtension(lstv.Items(i).Text) = "" Then
                lstv.Items(i).ImageIndex = 0
            Else
                ic = Icon.ExtractAssociatedIcon(lstv.Items(i).Text)
                ImageList1.Images.Add(ic)
                lstv.Items(i).ImageIndex = ImageList1.Images.Count - 1
            End If
            
        Next

        For i = 0 To lstv2.Items.Count - 1
            lstv2.Items(i).ImageIndex = 0
        Next

        For i = 0 To lstv3.Items.Count - 1
            lstv3.Items(i).ImageIndex = 1
        Next

        For i = 0 To lstv7.Items.Count - 1
            lstv7.Items(i).ImageIndex = 3
        Next

        For i = 0 To lstv4.Items.Count - 1
            lstv4.Items(i).ImageIndex = 2
        Next

        For i = 0 To lstv6.Items.Count - 1
            lstv6.Items(i).ImageIndex = 0
        Next

        For i = 0 To lstv5.Items.Count - 1
            lstv5.Items(i).ImageIndex = 4
        Next

        For i = 0 To lstv8.Items.Count - 1
            lstv8.Items(i).ImageIndex = 4
        Next
        '**Restore listview icons!
    End Sub