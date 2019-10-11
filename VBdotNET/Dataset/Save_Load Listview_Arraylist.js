'**SAVE
    Private Sub KryptonButton15_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton15.Click
        If scriptTXT.Text.Trim.Length = 0 Then MsgBox("Please set setup pages defaults!", MsgBoxStyle.Exclamation, apTitle) : Exit Sub
        If filelistARR.Count = 0 Then MsgBox("Please add files!", MsgBoxStyle.Exclamation, apTitle) : Exit Sub

        Dim fl$ = ""

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


            '---Icons
            dsTemp.Tables.Add("Icons")
            dsTemp.Tables(3).Columns.Add("Name")
            dsTemp.Tables(3).Columns.Add("File")

            For i = 0 To lstv2.Items.Count - 1
                TableRows = dsTemp.Tables(3).NewRow()
                TableRows(0) = lstv2.Items(i).Text
                TableRows(1) = lstv2.Items(i).SubItems(1).Text
                dsTemp.Tables(3).Rows.Add(TableRows)
            Next i
            '---Icons


            '---Execution
            dsTemp.Tables.Add("Execution")
            dsTemp.Tables(4).Columns.Add("Type")
            dsTemp.Tables(4).Columns.Add("File")
            dsTemp.Tables(4).Columns.Add("Param")

            For i = 0 To lstv3.Items.Count - 1
                TableRows = dsTemp.Tables(4).NewRow()
                TableRows(0) = lstv3.Items(i).Text
                TableRows(1) = lstv3.Items(i).SubItems(1).Text
                TableRows(2) = lstv3.Items(i).SubItems(2).Text
                dsTemp.Tables(4).Rows.Add(TableRows)
            Next i
            '---Execution

            '---PRJ Details
            dsTemp.Tables.Add("PRJ")
            dsTemp.Tables(5).Columns.Add("Product")
            dsTemp.Tables(5).Columns.Add("Version")
            dsTemp.Tables(5).Columns.Add("Publisher")
            dsTemp.Tables(5).Columns.Add("URL")
            dsTemp.Tables(5).Columns.Add("FolderConst")
            dsTemp.Tables(5).Columns.Add("Folder")
            dsTemp.Tables(5).Columns.Add("InstTXT")
            dsTemp.Tables(5).Columns.Add("InstBMP")
            dsTemp.Tables(5).Columns.Add("Output")

            TableRows = dsTemp.Tables(5).NewRow()
            TableRows(0) = prjPref.appName
            TableRows(1) = prjPref.appVersion
            TableRows(2) = prjPref.appPublisher
            TableRows(3) = prjPref.appURL
            TableRows(4) = prjPref.appFolderConst
            TableRows(5) = prjPref.appFolder
            TableRows(6) = prjPref.appInstTXT
            TableRows(7) = prjPref.appBitmap
            TableRows(8) = prjPref.appInstOutput
            dsTemp.Tables(5).Rows.Add(TableRows)
            '---PRJ Details


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

        Catch ex As Exception
            MsgBox("Error when saving", MsgBoxStyle.Critical, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub
    

'**LOAD
    Private Sub KryptonButton16_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton16.Click
        Dim newORnot As Boolean = False

        If Not prjPref.appName Is Nothing Then newORnot = True
        If filelistARR.Count > 0 Then newORnot = True

        If newORnot Then
            If MsgBox("Project already exist!" & vbCrLf & vbCrLf & "Load new ?", MsgBoxStyle.Exclamation + MsgBoxStyle.YesNo, apTitle) = MsgBoxResult.No Then Exit Sub
        End If

        Dim fl$ = ""

        fl = OpenDialog("NSISHelper.dat", "dat", "NSIS Helper Data file (*.dat)|*.dat")

        If IO.File.Exists(fl) = False Then Exit Sub

        Cursor = System.Windows.Forms.Cursors.WaitCursor

        ClearALL()

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


            '---Icons
            For i = 0 To dsTemp.Tables(3).Rows.Count - 1
                AdditemShortcut(dsTemp.Tables(3).Rows(i).Item(0).ToString, dsTemp.Tables(3).Rows(i).Item(1).ToString)
            Next
            '---Icons


            '--Execution
            For i = 0 To dsTemp.Tables(4).Rows.Count - 1
                Additem4execute(dsTemp.Tables(4).Rows(i).Item(0).ToString, dsTemp.Tables(4).Rows(i).Item(1).ToString, dsTemp.Tables(4).Rows(i).Item(2).ToString)
            Next
            '--Execution


            '--Project Details
            prjPref.appName = dsTemp.Tables(5).Rows(0).Item(0)
            prjPref.appVersion = dsTemp.Tables(5).Rows(0).Item(1)
            prjPref.appPublisher = dsTemp.Tables(5).Rows(0).Item(2)
            prjPref.appURL = dsTemp.Tables(5).Rows(0).Item(3)
            prjPref.appFolderConst = dsTemp.Tables(5).Rows(0).Item(4)
            prjPref.appFolder = dsTemp.Tables(5).Rows(0).Item(5)
            prjPref.appInstTXT = dsTemp.Tables(5).Rows(0).Item(6)
            prjPref.appBitmap = dsTemp.Tables(5).Rows(0).Item(7)
            prjPref.appInstOutput = dsTemp.Tables(5).Rows(0).Item(8)
            '--Project Details

        Catch ex As Exception
            MsgBox("Error when reading", MsgBoxStyle.Critical, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub