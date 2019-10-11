        txtPriority.DataSource = sqlc.QueryDatabaseDATASET("select * from xPriority order by name")
        txtPriority.DisplayMember = "name"
        txtPriority.ValueMember = "id"
        txtPriority.DisplayLayout.Bands(0).Columns(0).Hidden = True
        txtPriority.DisplayLayout.Bands(0).ColHeadersVisible = False
        txtPriority.DisplayLayout.AutoFitStyle = Infragistics.Win.UltraWinGrid.AutoFitStyle.ExtendLastColumn
