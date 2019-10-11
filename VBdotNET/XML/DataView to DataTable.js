            Dim dsStore As New DataSet()
            dsStore.ReadXml(Application.StartupPath & "\dbase.xml")

            Dim dtvCust As DataView
            dtvCust = dsStore.Tables(0).DefaultView

            dtvCust.RowFilter = "isfolder = '1' and parentfolder='0'"
            dtvCust.Sort = "favid"
            
            Dim dt As DataTable
            dt = dtvCust.ToTable