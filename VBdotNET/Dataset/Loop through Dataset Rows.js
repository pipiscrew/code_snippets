            For i = 0 To ds.Tables(0).Rows.Count - 1
                fixQuote = "" & ds.Tables(0).Rows(i).Item("title").ToString
                ds.Tables(0).Rows(i).Item("dbID") = SQLc.ExecuteSQLScalar("insert into favoritestable (favname,favURL,parentFolder,isFolder) values('" & QuoteMod(fixQuote) & "','" & ds.Tables(0).Rows(i).Item("url") & "'," & ds.Tables(0).Rows(i).Item("parent") & "," & IIf(ds.Tables(0).Rows(i).Item("type") = 2, 1, 0) & ");select max(favid) from favoritestable")
            Next