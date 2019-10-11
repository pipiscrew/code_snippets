            Dim dsStore As New DataSet()
            dsStore.ReadXml("dbase.xml")

                'ama 8eloyme na bgaloyme kapoia kolwna , alla den prepei na einai sto where parakatw!
                'dsStore.Tables(0).Columns.Remove("custName")

            Dim dtbCust As DataTable = dsStore.Tables(1)
            Dim dtvCust As New DataView(dtbCust)

            dtvCust.RowFilter = "name = '" & ListBox1.SelectedItem.ToString & "'"
            dtvCust.Sort = "Name"

            'idallws ama einai sto where, ftiaxnoyme ena datatable kai thn bgazoyme meta! ~LOL~
                'Dim dt As DataTable
            'dt = dtvCust.ToTable

            'dt.Columns.RemoveAt(0)
            'frmOrders.DataGrid1.DataSource = dt ' dtvCust


            frmOrders.DataGrid1.DataSource = dtvCust