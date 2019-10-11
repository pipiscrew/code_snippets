        Dim SaveFileDialog1 As New SaveFileDialog

        SaveFileDialog1.OverwritePrompt = True
        'SaveFileDialog1.FileName = tr.SelectedNode.Text & ".vb"
        SaveFileDialog1.DefaultExt = "vb"
        SaveFileDialog1.Filter = "JPEG Image|*.jpg|GIF Image|*.gif|PNG Image|*.png|Icon Image|*.ico|EMF Image|*.emf|WMF Image|*.wmf|Bitmap Image|*.bmp"
        SaveFileDialog1.Title = "Save an Image File"
        SaveFileDialog1.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

        SaveFileDialog1.ShowDialog()

        If SaveFileDialog1.FileName <> "" Then
            Select Case SaveFileDialog1.FilterIndex
                Case 1
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Jpeg)
                Case 2
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Gif)
                Case 3
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Png)
                Case 4
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Icon)
                Case 5
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Emf)
                Case 6
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Wmf)
                Case 7
                    picDest.Image.Save(SaveFileDialog1.FileName, System.Drawing.Imaging.ImageFormat.Bmp)
            End Select
        End If