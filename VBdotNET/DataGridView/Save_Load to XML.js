
    Private Sub LoadXML()
        If IO.File.Exists(Application.StartupPath & "\dictionary.xml") Then
            Try
                Dim dsd As New DataSet
                dsd.ReadXml(Application.StartupPath & "\dictionary.xml", XmlReadMode.ReadSchema)

                For Each row As DataRow In dsd.Tables(0).Rows
                    dg.Rows.Add(New Object() {row.Item(0).ToString, row.Item(1).ToString, row.Item(2).ToString})
                Next

                dsd.Dispose()
            Catch
            End Try
        End If
    End Sub

    Private Sub SaveXML()
        Try
            Dim dsd As New DataSet

            dsd.Tables.Add("PipisCrewTranslator")

            Dim col1Item As DataColumn = New DataColumn("Before", Type.GetType("System.String"))
            col1Item.ColumnMapping = MappingType.Element

            Dim col2Item As DataColumn = New DataColumn("To", Type.GetType("System.String"))
            col1Item.ColumnMapping = MappingType.Element

            Dim col3Item As DataColumn = New DataColumn("TTS", Type.GetType("System.String"))
            col1Item.ColumnMapping = MappingType.Element

            dsd.Tables(0).Columns.Add(col1Item)
            dsd.Tables(0).Columns.Add(col2Item)
            dsd.Tables(0).Columns.Add(col3Item)

            For Each row As DataGridViewRow In dg.Rows
                dsd.Tables(0).Rows.Add(New Object() {row.Cells(0).Value, row.Cells(1).Value, row.Cells(2).Value})
            Next

            dsd.Tables(0).WriteXml(Application.StartupPath & "\dictionary.xml", XmlWriteMode.WriteSchema)

            dsd.Dispose()
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub