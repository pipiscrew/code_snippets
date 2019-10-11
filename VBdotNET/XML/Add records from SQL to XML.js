    Private Sub KryptonButton1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton1.Click
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            If IO.File.Exists(apPath & "dbase.xml") = False Then
                CreateXML()
            Else
                If MsgBox("Favorites DBASE exist and will be deleted" & vbCrLf & "Continue ?", MsgBoxStyle.Information + MsgBoxStyle.YesNo) = MsgBoxResult.No Then Exit Sub
                IO.File.Delete(apPath & "dbase.xml")
            End If

            Dim dsStore As New DataSet()
            dsStore.ReadXml(apPath & "\dbase.xml")

            tr.Nodes.Clear()

            '>>>>>>>>>>> ADD FOLDERS + URLs
            SQLd = New SQLiteClass("Data Source=c:\places.sqlite;Version=3;")
            Dim ds As DataSet

            ds = SQLd.GetDATASET("select moz_bookmarks.id,moz_bookmarks.type,moz_bookmarks.parent, moz_bookmarks.title,moz_places.url from moz_bookmarks left join moz_places on moz_places.id = moz_bookmarks.fk ")

            SQLc.ExecuteSQLScalar("delete from favoritestable")

            Dim i%
            ds.Tables(0).Columns.Add("dbID", GetType(String))

            For i = 0 To ds.Tables(0).Rows.Count - 1
                Dim dr As DataRow
                dr = dsStore.Tables(0).NewRow

                dr.Item("favID") = ds.Tables(0).Rows(i).Item("id").ToString
                dr.Item("favName") = ds.Tables(0).Rows(i).Item("title").ToString
                dr.Item("favURL") = ds.Tables(0).Rows(i).Item("url")
                dr.Item("parentFolder") = ds.Tables(0).Rows(i).Item("parent")
                dr.Item("isFolder") = IIf(ds.Tables(0).Rows(i).Item("type") = 2, 1, 0)
                dr.Item("favApp") = "Firefox"

                dsStore.Tables(0).Rows.Add(dr)
            Next

            ds.Dispose()

            dsStore.WriteXml(apPath & "\dbase.xml", XmlWriteMode.WriteSchema)

            dsStore.Dispose()
            '>>>>>>>>>>> ADD FOLDERS + URLs

            MsgBox("Imported!" & vbCrLf & vbCrLf & "Please press 'Fill Tree'", MsgBoxStyle.Information, apTitle)
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub
    
    
    Private Sub CreateXML()
        Try
            Dim currentTable As New DataSet
            currentTable.Tables.Add("Favorites")
            currentTable.Tables(0).Columns.Add("favID", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("favName", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("favURL", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("parentFolder", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("isFolder", Type.GetType("System.String"))
            currentTable.Tables(0).Columns.Add("favApp", Type.GetType("System.String"))
            currentTable.Tables(0).Namespace = ("veteran")

            currentTable.WriteXml(Application.StartupPath & "\dbase.xml", XmlWriteMode.WriteSchema)

            currentTable.Dispose()

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub