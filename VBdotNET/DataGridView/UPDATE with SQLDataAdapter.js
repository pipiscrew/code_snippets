        Dim dt As New DataTable
        Dim dRow As DataRow
        Dim x%
        Dim i%

        Dim adapter As SqlDataAdapter
        adapter = sqlC.GetAdapter("select rec_id,APP_TYPE,a1,a2,a3,a4,a5,a6,a7,b1,b2,b3,b4,b5,b6,b7,a1comment,a2comment,a3comment,a4comment,a5comment,a6comment,a7comment,b1comment,b2comment,b3comment,b4comment,b5comment,b6comment,b7comment,OBJECTIVE,R3SULT from [CTABLE]")

        Dim objCommandBuilder As New SqlCommandBuilder(adapter)

        'Set the MissingSchemaAction property to AddWithKey because Fill will not cause
        'primary key & unique key information to be retrieved unless AddWithKey is specified.
        'otherwise if table contains primary key an error throw!
        adapter.MissingSchemaAction = MissingSchemaAction.AddWithKey

        adapter.Fill(dt) 'just to know FillSchema only exists

        For i = 0 To dg.Rows.Count - 1 Step 2

            dRow = dt.Rows.Find(dg.Rows(i).Cells(0).Value)

            If dRow Is Nothing Then
                MsgBox("ERROR - Record not found in DBASE!" & vbCrLf & vbCrLf & _
                "RECID : " & dg.Rows(i).Cells(0).Value.ToString & vbCrLf & _
                "DATE : " & dg.Rows(i).Cells(1).Value.ToString & vbCrLf & _
                "HOSPITAL : " & dg.Rows(i).Cells(3).Value.ToString & vbCrLf & _
                "DOCTOR : " & dg.Rows(i).Cells(4).Value.ToString, MsgBoxStyle.Critical, "[DBASE ERROR]")

                Continue For
            End If

            If dg.Rows(i).Cells(6).Value <> "" & dRow.Item("APP_TYPE") Then
                dRow.Item("APP_TYPE") = dg.Rows(i).Cells(6).Value
            End If

            '***********************checkboxes 1
            If dg.Rows(i).Cells(7).Value <> dRow.Item("a1") Then
                dRow.Item("a1") = dg.Rows(i).Cells(7).Value
            End If

            If dg.Rows(i).Cells(9).Value <> dRow.Item("a2") Then
                dRow.Item("a2") = dg.Rows(i).Cells(9).Value
            End If

        Next

        x = adapter.Update(dt)
        MsgBox(x & " updated")
        
'sources:
'http://asp.dotnetheaven.com/howto/doc/adoplus/UpdateDataFromDB.aspx
'http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlcommandbuilder.aspx
'http://support.microsoft.com/kb/301248
'http://support.microsoft.com/kb/308507
'http://msdn.microsoft.com/en-us/library/aa325460%28VS.71%29.aspx
'http://dotnetcoderoom.wordpress.com/2008/08/05/update-dataset-data-back-to-database/
'http://geek-goddess-bonnie.blogspot.com/2009/09/dataaccess-part-i.html
'http://www.digitalsupporttech.com/mskb/308/308507_How_To_Update_a_SQL_Server_Database_by_Using_the_SqlDataAdapter_Object_in_Visual_C__.NET.htm
