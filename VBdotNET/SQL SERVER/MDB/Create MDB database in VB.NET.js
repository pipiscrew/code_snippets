Sub CreateNewDatabase(dbPath As String)
   Dim dbCatalog As New ADOX.Catalog()
   dbCatalog.Create ("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & dbPath )
End Sub