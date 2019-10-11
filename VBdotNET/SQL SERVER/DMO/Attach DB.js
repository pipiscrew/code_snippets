    Private Sub Attach()
        Try
            'antigrafoyme ta mdf/ldf sto standar path toy MSDE folder
            System.IO.File.Copy(Application.StartupPath & "\Extras\TMS_Data.mdf", "C:\Program Files\Microsoft SQL Server\MSSQL\Data\TMS_Data.mdf", False)
            System.IO.File.Copy(Application.StartupPath & "\Extras\TMS_Data.ldf", "C:\Program Files\Microsoft SQL Server\MSSQL\Data\TMS_Data.ldf", False)

            MsgBox("MDF/LDF copied")

            Dim res As Boolean = False
            res = AttachDatabase("TMS", "C:\Program Files\Microsoft SQL Server\MSSQL\Data\TMS_Data.mdf", "C:\Program Files\Microsoft SQL Server\MSSQL\Data\TMS_Data.ldf")

            If res = False Then
                MsgBox("DB Attach failed!")
                Exit Sub
            Else
                MsgBox("true ")
            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub


    Private Function AttachDatabase(ByVal DatabaseName As String, ByVal MDFFileName As String, ByVal LOGFileName As String) As Boolean
        Try
            Dim connectionString As String = " server=" & serverName & ";" & IIf(User.Length > 0, "user id=" & User & "; password=" & Pass & ";", "integrated security=true;") ' user id=sa; password=medical;"
            Dim connection As New SqlClient.SqlConnection(connectionString)
            Dim sqlString As String = "EXEC sp_attach_db @dbname=N'" & DatabaseName & "',"
            sqlString &= "@filename1 = N'" & MDFFileName & "',"
            sqlString &= "@filename2 = N'" & LOGFileName & "'"
            Dim command As New SqlClient.SqlCommand(sqlString, connection)

            Try
                command.Connection.Open()
                command.ExecuteScalar()
                command.Connection.Close()
            Catch ex As Exception
                MsgBox(ex.ToString)
                Return False
            Finally
                If command.Connection.State = ConnectionState.Open Then
                    command.Connection.Close()
                End If
            End Try
            Return True

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Function