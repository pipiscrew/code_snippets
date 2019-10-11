AddHandler oRestore.PercentComplete, AddressOf oRestore_PercentComplete

oRestore = einai to object
oRestore.PercentComplete = einai to event tou object


oRestore_PercentComplete = h procedure poy ekteleitai otan ginetai raise to event

ex.
AddHandler DownloadedVideos.ListBox.MouseDoubleClick, AddressOf DownloadedVideos_MouseDoubleClick




        RemoveHandler GridView1.FocusedRowChanged, AddressOf GridView1_FocusedRowChanged

        GridControl1.DataSource = sqlc.QueryDatabaseDATASET("select ContactName as [ΕΠΙΒΑΤΗΣ],Country as [ΑΠΟ],'Piraeus' as [ΠΡΟΣ],phone as [ΤΗΛΕΦΩΝΟ] from customers where ContactName = '2' order by ContactName") '"select * from customers")
        GridControl1.DataMember = "DefaultTable"

        AddHandler GridView1.FocusedRowChanged, AddressOf GridView1_FocusedRowChanged