        Dim sourceFileName As String = (Path.GetDirectoryName(Me.txtTargetPath.Text) & "\PDV.DLL")
        File.Copy(sourceFileName, (sourceFileName & ".bak"))
        Dim stream As New FileStream(sourceFileName, FileMode.Open)
        stream.Seek(&H9C00, SeekOrigin.Begin)
        stream.WriteByte(&HC3)
        stream.Close()


tonyweb smartdraw 