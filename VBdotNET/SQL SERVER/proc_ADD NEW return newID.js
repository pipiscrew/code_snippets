        Dim objConn As SqlConnection = New SqlConnection()
        Dim res%
        objConn.ConnectionString = "data source=MANIAXPORTABLE\SQLEXPRESS;initial catalog=test;persist security info=False;user id=ss;password=1234;workstation id=MANIAXPORTABLE;packet size=4096"
        objConn.Open()

        Dim sqlco As SqlCommand = New SqlCommand()

        sqlco.Connection = objConn
        sqlco.CommandText = "CustomersADD"
        sqlco.CommandType = CommandType.StoredProcedure
        sqlco.Parameters.Clear()
        sqlco.Parameters.Add("@custID", SqlDbType.Int)
        sqlco.Parameters.Add("@custName", SqlDbType.NVarChar)
        sqlco.Parameters.Add("@cutTel", SqlDbType.NVarChar)

        sqlco.Parameters("@custID").Direction = ParameterDirection.Output
        sqlco.Parameters("@custName").Value = "test"
        sqlco.Parameters("@cutTel").Value = "3434"


        sqlco.ExecuteNonQuery()
        res = System.Convert.ToInt32(sqlco.Parameters("@custID").Value.ToString())
        MsgBox(res)
        objConn.Close()
        objConn.Dispose()
        
        
        
*********PROCEDURE***********
set ANSI_NULLS ON
set QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[CustomersADD]
    @custID int output,
    @custName nvarchar(30),
    @cutTel  nvarchar(10) as



SET NOCOUNT ON

INSERT INTO Customers ([custName],[custTel])
    VALUES (@custName,@cutTel)
SET @custID=SCOPE_IDENTITY()
SET NOCOUNT OFF