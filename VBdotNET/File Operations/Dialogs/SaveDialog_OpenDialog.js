        'SaveFileDialog1.CreatePrompt = True 'Ask if user want to create the file ~LOL~
        SaveFileDialog1.OverwritePrompt = True
        SaveFileDialog1.FileName = tr.SelectedNode.Text & ".vb"
        SaveFileDialog1.DefaultExt = "vb"
        SaveFileDialog1.Filter = "VB Class File (*.vb)|*.vb"
        SaveFileDialog1.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

        Dim result As DialogResult = SaveFileDialog1.ShowDialog()

        If (result = DialogResult.OK) Then
            Dim sw As System.IO.StreamWriter = New System.IO.StreamWriter(SaveFileDialog1.FileName)
            sw.Write(tmpHEADER & tmpDeclarations & vbCrLf & tmpProperties & vbCrLf & "End Class")
            sw.Close()
        End If