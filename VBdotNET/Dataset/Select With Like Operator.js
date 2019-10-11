        Dim ds As New DataSet

        ds.ReadXml("c:\test.xml", XmlReadMode.ReadSchema)

        Dim dv As New DataView(ds.Tables(0), "KwdikosYlikoy Like '%" & "01" & "%'", "", DataViewRowState.CurrentRows)

        For Each drv As DataRowView In dv
            MsgBox(drv("KwdikosYlikoy"))
        Next


or
'"Column1 = " + TestNumtextBox.Text + "and Column2 Like '%" + VehNumtextBox.Text+ "%'","", 
