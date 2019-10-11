        Dim dsTemp As New DataSet()
        Dim TableRows As DataRow

        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            '---FILES
            dsTemp.Tables.Add("Files")
            dsTemp.Tables(0).Columns.Add("sName")
            dsTemp.Tables(0).Columns.Add("dName")
            dsTemp.Tables(0).Columns.Add("Flags")
            dsTemp.Tables(0).Columns.Add("SectN")
            dsTemp.Tables(0).Columns.Add("SectD")

            Dim i%

            For i = 0 To filelistARRsourcepath.Count - 1
                TableRows = dsTemp.Tables(0).NewRow()
                TableRows(0) = filelistARRsourcepath(i)
                TableRows(1) = filelistARR(i)
                TableRows(2) = filelistARRflags(i)
                TableRows(3) = filelistARRsectioname(i)
                TableRows(4) = filelistARRsectiodscr(i)
                dsTemp.Tables(0).Rows.Add(TableRows)
            Next i
            '---FILES


            '---Registry 
            dsTemp.Tables.Add("Registry")
            dsTemp.Tables(1).Columns.Add("val", System.Type.[GetType]("System.String"))
            Dim myRow As DataRow = dsTemp.Tables(1).NewRow()
            myRow(0) = regTXT.Text
            dsTemp.Tables(1).Rows.Add(myRow)
            '---Registry 


            '---Components
            dsTemp.Tables.Add("Components")
            dsTemp.Tables(2).Columns.Add("Name")
            dsTemp.Tables(2).Columns.Add("Dscr")

            For i = 0 To componentsARRvariable.Count - 1
                TableRows = dsTemp.Tables(2).NewRow()
                TableRows(0) = componentsARRvariable(i)
                TableRows(1) = componentsARRdecr(i)
                dsTemp.Tables(2).Rows.Add(TableRows)
            Next i
            '---Components

            'SAVE DIALOG
            Dim SaveFileDialog1 As New SaveFileDialog
            SaveFileDialog1.OverwritePrompt = True
            SaveFileDialog1.FileName = "NSISHelper.dat"
            SaveFileDialog1.DefaultExt = "dat"
            SaveFileDialog1.Filter = "NSIS Helper Data file (*.dat)|*.dat"
            SaveFileDialog1.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

            Dim result As DialogResult = SaveFileDialog1.ShowDialog()

            If (result = DialogResult.OK) Then
                dsTemp.WriteXml(SaveFileDialog1.FileName)
            End If
            'SAVE DIALOG


<>>>>>>>>> LOAD <<<<<<<<<<<<<<>



        Dim dsTemp As New DataSet()
        Dim i%

        Try
            dsTemp.ReadXml(fl)

            '---FILES
            For i = 0 To dsTemp.Tables(0).Rows.Count - 1
                filelistARRsourcepath.Add(dsTemp.Tables(0).Rows(i).Item(0).ToString)
                filelistARR.Add(dsTemp.Tables(0).Rows(i).Item(1).ToString)
                filelistARRflags.Add(dsTemp.Tables(0).Rows(i).Item(2).ToString)
                filelistARRsectioname.Add(dsTemp.Tables(0).Rows(i).Item(3).ToString)
                filelistARRsectiodscr.Add(dsTemp.Tables(0).Rows(i).Item(4).ToString)
            Next

            For i = 0 To filelistARR.Count - 1
                Additem(filelistARRsourcepath(i), filelistARR(i), filelistARRsectioname(i), filelistARRsectiodscr(i), filelistARRflags(i))
            Next
            '---FILES


            '---Registry 
            regTXT.Text = dsTemp.Tables(1).Rows(0).Item(0).ToString
            '---Registry 


            '---Components
            For i = 0 To dsTemp.Tables(2).Rows.Count - 1
                componentsARRvariable.Add(dsTemp.Tables(2).Rows(i).Item(0).ToString)
                componentsARRdecr.Add(dsTemp.Tables(2).Rows(i).Item(1).ToString)
            Next

            buildComponentsTXT()
            '---Components