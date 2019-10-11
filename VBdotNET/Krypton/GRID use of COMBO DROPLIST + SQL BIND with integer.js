'krypton v4.20

'**fill procedure 
        Dim dt As DataTable = New DataTable

        ' Dim sr As SqlClient.SqlDataReader
        '  sr = sqlC.GetDATAREADER("select rec_id,NAME_DAY as [ΗΜΕΡΑ],HOSPITAL as [ΝΟΣΟΚΟΜΕΙΟ],DOCTOR as [ΙΑΤΡΟΣ],DOCTOR_STATUS as [ΚΑΤ ΙΑΤΡΟΥ],APP_TYPE as [ΕΙΔΟΣ ΕΠΙΣΚΕΨΗΣ],a1 as [a1],a2 as [a2],a3 as [a3],a4 as [a4],a5 as [a5],b1 as [b1],b2 as [b2],b3 as [b3],b4 as [b4],b5 as [b5] from [CTABLE]")

        '  dt.Load(sr)
        dt = sqlC.GetDATATABLE("select rec_id,NAME_DAY as [ΗΜΕΡΑ],HOSPITAL as [ΝΟΣΟΚΟΜΕΙΟ],DOCTOR as [ΙΑΤΡΟΣ],DOCTOR_STATUS as [ΚΑΤ ΙΑΤΡΟΥ],APP_TYPE as [ΕΙΔΟΣ ΕΠΙΣΚΕΨΗΣ],a1 as [a1],a2 as [a2],a3 as [a3],a4 as [a4],a5 as [a5],b1 as [b1],b2 as [b2],b3 as [b3],b4 as [b4],b5 as [b5] from [CTABLE]")
        
        'this no needed if you store the combobox value as text, in current situation stored as integer (in DB) so
		'loop through all rows and replace the integer with text (text already exist @ kryptoncombobox.items)
        For Each dataR As DataRow In dt.Rows
            If dataR.Item(4) = 0 Then
                dataR.Item(4) = ("ΥΠΑΡΧΩΝ")
            Else
                dataR.Item(4) = ("ΝΕΟΣ")
            End If

            If dataR.Item(5) = 0 Then
                dataR.Item(5) = ("ΕΠΙΣΚΕΨΗ")
            ElseIf dataR.Item(5) = 1 Then
                dataR.Item(5) = ("ΧΕΙΡΟΥΡΓΕΙΟ")
            ElseIf dataR.Item(5) = 2 Then
                dataR.Item(5) = ("ΠΑΡΟΥΣΙΑΣΗ")
            End If

        Next

		'assign DataProperty for each column in datagridview (columns already added from GUI)
        dg.Columns(0).DataPropertyName = "rec_id"
        dg.Columns(1).DataPropertyName = "ΗΜΕΡΑ"
        dg.Columns(2).DataPropertyName = "ΝΟΣΟΚΟΜΕΙΟ"
        dg.Columns(3).DataPropertyName = "ΙΑΤΡΟΣ"
        dg.Columns(4).DataPropertyName = "ΚΑΤ ΙΑΤΡΟΥ"
        dg.Columns(5).DataPropertyName = "ΕΙΔΟΣ ΕΠΙΣΚΕΨΗΣ"
        dg.Columns(6).DataPropertyName = "a1"
        dg.Columns(7).DataPropertyName = "a2"
        dg.Columns(8).DataPropertyName = "a3"
        dg.Columns(9).DataPropertyName = "a4"
        dg.Columns(10).DataPropertyName = "a5"
        dg.Columns(11).DataPropertyName = "b1"
        dg.Columns(12).DataPropertyName = "b2"
        dg.Columns(13).DataPropertyName = "b3"
        dg.Columns(14).DataPropertyName = "b4"
        dg.Columns(15).DataPropertyName = "b5"
        
        'WARNING! this do all the job, tell to datagridview dont generate new columns! and of course use the DataProperty bind on existing cols!
        dg.AutoGenerateColumns = False

		'give datatable to datagridview!
        dg.DataSource = dt
        


'**save procedure 
        'Try
        Dim sql As String
        Dim da As SqlDataAdapter
        Dim dt As DataTable
        Dim x As Integer

        ' Setup SQL (This is the original table where the data was retrieved when grid was filled, it will also be the table updated)
        'sql = Me.Tag '"select * from " & MainForm.tr.SelectedNode.Text.Substring(0, MainForm.tr.SelectedNode.Text.LastIndexOf("[") - 1)

        ' Setup DataAdapter
        da = New SqlDataAdapter("select rec_id,NAME_DAY as [ΗΜΕΡΑ],HOSPITAL as [ΝΟΣΟΚΟΜΕΙΟ],DOCTOR as [ΙΑΤΡΟΣ],DOCTOR_STATUS as [ΚΑΤ ΙΑΤΡΟΥ],APP_TYPE as [ΕΙΔΟΣ ΕΠΙΣΚΕΨΗΣ],a1 as [a1],a2 as [a2],a3 as [a3],a4 as [a4],a5 as [a5],b1 as [b1],b2 as [b2],b3 as [b3],b4 as [b4],b5 as [b5] from [CTABLE]", "data source=MANIAXDREAMHOME\SQLEXPRESS;initial catalog=AlexM;integrated security=SSPI")

        ' Create a command builder (this is needed for the update to work)
        Dim cb As New SqlCommandBuilder(da)

        ' Get Current Data from datagrid

        dt = dg.DataSource


        For Each dataR As DataRow In dt.Rows
            If dataR.Item(4) = ("ΥΠΑΡΧΩΝ") Then
                dataR.Item(4) = 0
            Else
                dataR.Item(4) = 1
            End If

            If dataR.Item(5) = ("ΕΠΙΣΚΕΨΗ") Then
                dataR.Item(5) = 0
            ElseIf dataR.Item(5) = ("ΧΕΙΡΟΥΡΓΕΙΟ") Then
                dataR.Item(5) = 1
            ElseIf dataR.Item(5) = ("ΠΑΡΟΥΣΙΑΣΗ") Then
                dataR.Item(5) = 2
            End If

        Next

        ' Update Table through DataAdapter
        x = da.Update(dt)

        MsgBox(x & " records updated.", MsgBoxStyle.Information)
        'Catch
        '    MsgBox("ERROR: " & Err.Description, MsgBoxStyle.Critical, "error!")
        'End Try