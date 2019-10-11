Dim cat As ADOX.Catalog
    Set cat = New ADOX.Catalog
    cat.ActiveConnection = Conne
  
  Set Tbl = New ADOX.Table
  With Tbl
    .Name = "tzoke4r"
    Set .ParentCatalog = cat
   .Columns.Append "Code", adVarWChar           'Λογιστικό σχέδιο
   .Columns.Append "Name", adVarWChar           'Ονομασία
   .Columns.Append "Category", adVarWChar       'Kατηγορία
   .Columns.Append "SubCategory", adVarWChar       'Kατηγορία
   .Columns("SubCategory").Properties("Nullable") = True
   .Columns.Append "Kind", adBoolean            '(0=εσόδων-πωλήσεις) , -1=εξόδων-αγορές)
   .Columns.Append "mskk", adVarWChar, 10
   .Columns("mskk").Properties("Nullable") = True
   .Columns.Append "perfpa", adInteger
   .Columns.Append "ekkfpa", adInteger
   .Columns.Append "e3", adInteger
   
   .Columns.Append "TgUniqueField", adInteger
   .Columns("TgUniqueField").Properties("AutoIncrement") = True
  End With
  
  cat.Tables.Append Tbl
  
    'Ορίζουμε κάποια indexes, όπως επίσης και τα primary και foreign keys
  Set idx = New ADOX.Index
  idx.Name = "UniqueField"
  idx.PrimaryKey = True
  idx.Unique = True
  idx.Columns.Append "TgUniqueField"
  Tbl.Indexes.Append idx