    Private Sub CreateModelsTABLE(ByVal cName$)
        Try
            Dim conn As SqlCeConnection = Nothing
            conn = New SqlCeConnection("Data Source = " & Application.StartupPath & "\" & cName & ".sdf")
            conn.Open()

            Dim cmd As SqlCeCommand = conn.CreateCommand()

            Dim CreateModels$

            CreateModels = "CREATE TABLE [Models] (                                " & _
            "        [ModelCode] [nvarchar] (10) NULL ,   " & _
            "        [ModelName] [nvarchar] (250) NULL ,   " & _
            "        [mPlatos] [nvarchar] (10) NULL ,   " & _
            "        [mYcos] [nvarchar] (10) NULL ," & _
            "        [MgPlatos] [nvarchar] (10) NULL ,    " & _
            "        [MgYcos] [nvarchar] (10) NULL ,      " & _
            "        [TexnPlhr] [nvarchar] (250) NULL ,     " & _
            "        [ModelType] [int] NULL)"

            cmd.CommandText = CreateModels

            cmd.ExecuteNonQuery()

            cmd.Dispose()
            conn.Dispose()

            MsgBox("Models table created!", MsgBoxStyle.Information)
        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
    End Sub