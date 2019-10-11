Screen.MousePointer = 11

Combo1.Clear

Set rsBack = New ADODB.Recordset

rsBack.Open "exec sp_databases", Conne, adOpenStatic, adLockOptimistic
 
Do Until rsBack.EOF
    Combo1.AddItem rsBack(0) & " -- [DBase Size : " & rsBack(1) & "kb]"
    rsBack.MoveNext
Loop

Screen.MousePointer = 0
Combo1.SetFocus


'-OR-


Public Shared Function GetDatabaseNames() As List(Of String)
    Dim connString As String
    Dim databaseNames As New List(Of String)

    ' Be sure to replace this with your connection string.
    connString = "Data Source=.\sqlexpress;Integrated Security=True"

    If Not String.IsNullOrWhiteSpace(connString) Then
        Using cn As SqlConnection = New SqlConnection(connString)
            ' Open the connection
            cn.Open()

            Using cmd As SqlCommand = New SqlCommand()
                cmd.Connection = cn
                cmd.CommandType = CommandType.StoredProcedure
                cmd.CommandText = "sp_databases"

                Using myReader As SqlDataReader = cmd.ExecuteReader()
                    While (myReader.Read())
                        databaseNames.Add(myReader.GetString(0))
                    End While
                End Using
            End Using
        End Using
    End If

    Return databaseNames
End Function

'Bind to combo
DatabaseComboBox.DataSource = databaseNames