        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            Dim ds As New DataSet1 'to dataset poy exei th 'morfh' twn results ths procedure mas

            Dim objConn As SqlConnection = New SqlConnection()
            Dim sqlco As SqlCommand = New SqlCommand()
            Dim sqlAD As SqlDataAdapter = New SqlDataAdapter()
            Dim sqlSET As DataSet = New DataSet

            objConn.ConnectionString = ConneSTR
            objConn.Open()

            sqlco.CommandText = "ListALLStocksByDate '" & DateTimePicker1.Value.Year & DateTimePicker1.Value.Month & DateTimePicker1.Value.Day & "','" & DateTimePicker2.Value.Year & DateTimePicker2.Value.Month & DateTimePicker2.Value.Day & "'"
            sqlco.Connection = objConn

            sqlAD.SelectCommand = sqlco
            sqlAD.Fill(ds, "DataTable1")

            If ds.Tables(0).Rows.Count = 0 Then
                objConn.Dispose()
                sqlco.Dispose()
                sqlAD.Dispose()
                sqlSET.Dispose()
                MsgBox("??? ???????? ???????? ??? ??? ??????????? ??? ?????????", MsgBoxStyle.Information, apTitle)
                Exit Try
            End If


            '>>>generic forma gia to CRYSTAL REPORT VIEWER (apla allazoyme to report name)
            Dim frm As New ReportForm

            Dim crReportDocument As New CrystalReport1() 'apla einai mesa sto solution
                                                         'exei property 'copy to output folder'                                                                                                                                                                                                                                                                                                                           

            crReportDocument.SetDataSource(ds.Tables(0))
            frm.CrystalReportViewer1.ReportSource = crReportDocument
            frm.CrystalReportViewer1.DisplayGroupTree = False

            '>>SET dates 
            Dim objText2 As CrystalDecisions.CrystalReports.Engine.TextObject = _
               crReportDocument.ReportDefinition.Sections(1).ReportObjects("txtdate1")
            objText2.Text = DateTimePicker1.Value

            Dim objText3 As CrystalDecisions.CrystalReports.Engine.TextObject = _
               crReportDocument.ReportDefinition.Sections(1).ReportObjects("txtdate2")
            objText3.Text = DateTimePicker2.Value
            '>>SET dates

            With frm.CrystalReportViewer1
                .ShowRefreshButton = False
                .ShowPrintButton = False
                .ShowExportButton = False
                .ShowGroupTreeButton = False
                .ShowZoomButton = False
                .ShowTextSearchButton = False
                .ShowPageNavigateButtons = False
                .ShowGotoPageButton = False
                .ShowCloseButton = False
            End With

            frm.CrystalReportViewer1.Zoom(100)

            frm.ShowDialog()
            frm.Dispose()
            '>>>generic forma gia to CRYSTAL REPORT VIEWER

            objConn.Dispose()
            sqlco.Dispose()
            sqlAD.Dispose()
            sqlSET.Dispose()

        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try