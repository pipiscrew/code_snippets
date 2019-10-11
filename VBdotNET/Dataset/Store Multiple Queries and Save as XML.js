
    Private Sub KryptonButton1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton1.Click
        Try
            IO.File.Delete(Application.StartupPath & "\thyraePPC.xml")

            Dim i%, j%
            Dim tmpThyraeMDB$ = ""
            Dim tmpDS As DataSet
            ds = New DataSet

            For i = 0 To List1.Items.Count - 1
                If List1.GetItemChecked(i) Then
                    tmpThyraeMDB = Application.StartupPath & "\_" & List1.Items(i).ToString & "\thyrae.th"
                    If IO.File.Exists(tmpThyraeMDB) Then
                        conne = conneWithoutFilename & tmpThyraeMDB
                        tmpDS = sqlc.QueryDatabaseDATASET("select KwdikosYlikoy ,OnomaYlikoy from storage order by  KwdikosYlikoy")

                        tmpDS.Tables(0).Columns.Add("Company", GetType(String))

                        For j = 0 To tmpDS.Tables(0).Rows.Count - 1
                            tmpDS.Tables(0).Rows(j).Item("Company") = List1.Items(i).ToString
                        Next

                        ds.Merge(tmpDS)
                    Else
                        MsgBox("?? ?????? " & tmpThyraeMDB & " ??? ???????!" & vbCrLf & vbCrLf & "? ???????????? ?? ????????? ????? ????? ??? ???????", MsgBoxStyle.Exclamation, apTitle)
                    End If
                End If
            Next

            ds.WriteXml(Application.StartupPath & "\thyraePPC.xml", XmlWriteMode.WriteSchema)
            ds.Dispose()
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub