    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim tmp() As Byte

        sqlc.File2Byte("c:\SQLCeClass.zip", tmp)


        sqlc.AddParameter("@tt", tmp, SqlDbType.Binary, ParameterDirection.Input)

        sqlc.ExecuteParameter("insert into mytable (attachment) values (@tt)")

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        Dim rd As SqlServerCe.SqlCeDataReader
        Dim tmp() As Byte

        rd = sqlc.GetDATAREADER("select * from mytable")

        rd.Read()

        tmp = rd(0)

        sqlc.Byte2File("c:\test.rar", tmp)
    End Sub
    
    
    
    '>>>>>>>IN CLASS
    
    Public Sub File2Byte(ByVal imagePath As String, ByRef ByteArr() As Byte)
        Try
            ReDim ByteArr(0)

            Dim FileStreamObject As New System.IO.FileStream(imagePath, IO.FileMode.Open, IO.FileAccess.Read)
            ReDim ByteArr(CType(FileStreamObject.Length() - 1, Integer)) 'As Byte
            FileStreamObject.Read(ByteArr, 0, ByteArr.Length)
            FileStreamObject.Close()

        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
    End Sub

    Public Sub Byte2File(ByVal imagePath As String, ByVal ByteArr() As Byte)
        Try
            Dim FileStreamObject As New System.IO.FileStream(imagePath, IO.FileMode.Create, IO.FileAccess.Write)
            FileStreamObject.Write(ByteArr, 0, ByteArr.Length)
            FileStreamObject.Close()
        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
    End Sub