    Private Sub buttonCallEmbeddedAssembly_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles buttonCallEmbeddedAssembly.Click
        Dim assembly1 As Assembly
        assembly1 = Assembly.LoadFrom(Application.StartupPath + "\ManagedDll1.dll")
        Dim obj As Object
        obj = assembly1.CreateInstance("ManagedDll1.Class1")
        Dim args(0) As Object
        args(0) = "Hi!"
        obj.GetType().GetMethod("ShowMessage").Invoke(obj, args)
    End Sub
    
    
'@ ManagedDll1
Public Class Class1
    Public Sub ShowMessage(ByVal s As String)
        MessageBox.Show(s)
    End Sub
End Class
