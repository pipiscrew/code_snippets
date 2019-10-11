        Try
            Dim connection As New SqlClient.SqlConnection(ConnSTR)
            Dim command As New SqlClient.SqlCommand("select CUSTOMER_ID from [CUSTOMERS] where LOGINDB = '" & txtUser.Text.Trim & "'", connection)

            command.Connection.Open()
            LoginClientID = command.ExecuteScalar()


            If LoginClientID Is Nothing Then Throw New ArgumentException("Login success, but not found in CUSTOMERS")

            command.Dispose()
            connection.Dispose()
            Success = True
        Catch ex As Exception
            Cursor = System.Windows.Forms.Cursors.Default
            Success = False

            If ex.Message = "Login success, but not found in CUSTOMERS" Then
                MsgBox("?????? ???????, ?? ????????????? ????????", MsgBoxStyle.Exclamation, apTitle)
            Else
                MsgBox("?? ???????????? ????? ?????? ? ??????????? ??????? ?????????!", MsgBoxStyle.Critical, apTitle)
            End If

        End Try