        '>>>>>>> GET TABLES
        "SELECT tbl_name FROM sqlite_master where type = 'table' ORDER BY name;"

        '>>>>>>> GET TABLE FIELDS
        Dim DbConnection As SQLite.SQLiteConnection = New SQLite.SQLiteConnection(TextBox1.Text)
        DbConnection.Open()

        Dim dt As DataTable
        dt = DbConnection.GetSchema("Columns", New String() {Nothing, Nothing, "favoritestable"})

        'For Each test As DataRow In dt.Rows
        '    MsgBox(DirectCast(test("column_name"), String) + vbLf)
        'Next

        Dim ds As New DataSet

        ds.Tables.Add(dt)

        Grid1.DataSource = ds.Tables(0)