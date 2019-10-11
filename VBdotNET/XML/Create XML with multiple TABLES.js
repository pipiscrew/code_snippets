
    Private Sub CreateXML()
        Try
            Dim currentTable As New DataSet
            currentTable.Tables.Add("Connections")
            currentTable.Tables(0).Columns.Add("server", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("dbase", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("user", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("pwd", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("win", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("extra", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("complete", Type.GetType("System.String"))
            'currentTable.Tables(0).Rows.Add("")

            currentTable.Tables.Add("Config")
            currentTable.Tables(1).Columns.Add("ID", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("procSQLstatASK", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fielduseVALUEtxt", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("customProceduresSELECT", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("customProceduresINSERT", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("customProceduresDELETE", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("customProceduresUPDATE", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEchar", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEnchar", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEvarchar", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEtext", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEnvarchar", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEntext", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEdecimal", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEnumeric", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEbit", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEbinary", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEvarbinary", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEimage", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEint", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEsmallint", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEtinyint", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEfloat", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEreal", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEmoney", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEsmallmoney", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEdatetime", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEsmalldatetime", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldTypEunknown", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldLastComboTableSearch", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("fieldLastComboProcedureSearch", Type.GetType("System.String"))
            currentTable.Tables(1).Columns.Add("defaultConnection", Type.GetType("System.String"))

            currentTable.Tables(1).Rows.Add("default").Item("procSQLstatASK") = True

            currentTable.WriteXml(appDIR & "config.xml", XmlWriteMode.WriteSchema)

            currentTable.Dispose()


        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub