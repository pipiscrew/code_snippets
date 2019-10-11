Imports System.Data.SqlClient
Public Class Group2Shapes
    Private da As SqlDataAdapter
    Private con As SqlConnection
    Private builder As SqlCommandBuilder
    Private ds As New DataSet()

    Private WithEvents thisCurrencyManager As CurrencyManager


    Private Sub Button1_Click_1(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Me.BindingContext(ds.Tables(0)).EndCurrentEdit()

        da.Update(ds.Tables(0))
    End Sub

    Private Sub Group2Shapes_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        con = New SqlConnection("data source=(local);initial catalog=Biblionet;integrated security=SSPI")

        da = New SqlDataAdapter("SELECT * FROM atest", con)

        builder = New SqlCommandBuilder(da)

        da.Fill(ds)

        Me.TextBox1.DataBindings.Add("Text", ds.Tables(0), "tname")

        thisCurrencyManager = CType(BindingContext(ds.Tables(0)), CurrencyManager)
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        If thisCurrencyManager.Position = thisCurrencyManager.Count - 1 Then
            MessageBox.Show("You're at end of the records")
        Else
            thisCurrencyManager.Position += 1
            Me.BindingContext(ds.Tables(0)).EndCurrentEdit()
            da.Update(ds.Tables(0))
        End If
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

        If thisCurrencyManager.Position = thisCurrencyManager.Count - 1 Then
            MessageBox.Show("You're at end of the records")
        Else
            thisCurrencyManager.Position -= 1
            Me.BindingContext(ds.Tables(0)).EndCurrentEdit()
            da.Update(ds.Tables(0))
        End If
    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        thisCurrencyManager.RemoveAt(thisCurrencyManager.Position)
        da.Update(ds.Tables(0))
    End Sub
End Class