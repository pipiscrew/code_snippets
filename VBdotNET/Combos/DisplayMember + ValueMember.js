        txtNameDayID.DisplayMember = "DefaultTable.name"
        txtNameDayID.ValueMember = "DefaultTable.ID"
        txtNameDayID.DataSource = sqlc.QueryDatabaseDATASET("SELECT id,name FROM xNameDays order by name")
