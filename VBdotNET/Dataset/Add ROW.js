                    Dim row As DataRow
                    row = ds.Tables(0).NewRow

                    row("favname") = curreFolderName
                    row("parentFolder") = 2
                    row("isFolder") = 1
                    ds.Tables(0).Rows.Add(row)