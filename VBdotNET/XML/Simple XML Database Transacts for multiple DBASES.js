    Private Sub FillList()
        Dim dsStore As New DataSet()
        dsStore.ReadXml(appDIR & "config.xml")

        ComboBox1.Items.Clear()
        ComboBox1.Items.AddRange(New Object() {""})

        For Each row In dsStore.Tables("Connections").Rows
            ComboBox1.Items.Add(row("server"))
        Next

        TextBox1.Text = ""
        TextBox2.Text = ""
        TextBox3.Text = ""
        TextBox4.Text = ""
        TextBox5.Text = ""
        TextBox6.Text = ""
        CheckBox1.Checked = False
        ComboBox1.SelectedIndex = 0

        If ComboBox1.Items.Count > 1 Then
            Button4.Visible = True
        Else
            Button4.Visible = False
        End If

        dsStore.Dispose()
    End Sub


    Private Sub ReadRecord()
                Dim dsStore As New DataSet()
                dsStore.ReadXml(appDIR & "config.xml")

                Dim dr As DataRow()
                dr = dsStore.Tables(0).Select("server = '" & ComboBox1.Text & "'")

                If dr.Length = 0 Then Exit Try '>>>>>>>> No found

                TextBox1.Text = "" & dr(0)("Server")
                TextBox2.Text = "" & dr(0)("dbase")
                TextBox3.Text = "" & dr(0)("user")
                TextBox4.Text = "" & dr(0)("pwd")
                CheckBox1.Checked = "" & dr(0)("win")
                TextBox5.Text = "" & dr(0)("extra")
                TextBox6.Text = "" & dr(0)("complete")

                dsStore.Dispose()
    End Sub



    Private Sub SAVEorUPDATE()
        Try

            Dim dsStore As New DataSet()
            dsStore.ReadXml(appDIR & "config.xml")

            Dim dr2 As DataRow()
            dr2 = dsStore.Tables(0).Select("server = '" & TextBox1.Text & "'")

            If dr2.GetUpperBound(0) = -1 Then 'ADD NEW
                Dim dr As DataRow
                dr = dsStore.Tables(0).NewRow

                dr.Item("server") = TextBox1.Text.Trim
                dr.Item("dbase") = TextBox2.Text.Trim
                dr.Item("user") = TextBox3.Text.Trim
                dr.Item("pwd") = TextBox4.Text.Trim
                dr.Item("win") = CheckBox1.Checked
                dr.Item("extra") = TextBox5.Text.Trim
                dr.Item("complete") = TextBox6.Text.Trim

                dsStore.Tables(0).Rows.Add(dr)
            Else                                'UPDATE

                If MsgBox("Do you want to update profile : " & vbCrLf & vbCrLf & TextBox1.Text & vbCrLf & vbCrLf & " ??", MsgBoxStyle.YesNo + MsgBoxStyle.Information, apTitle) = MsgBoxResult.No Then Exit Try

                dr2(0)("Server") = TextBox1.Text
                dr2(0)("dbase") = TextBox2.Text
                dr2(0)("user") = TextBox3.Text
                dr2(0)("pwd") = TextBox4.Text
                dr2(0)("win") = CheckBox1.Checked
                dr2(0)("extra") = TextBox5.Text
                dr2(0)("complete") = TextBox6.Text
            End If

            dsStore.WriteXml(appDIR & "config.xml", XmlWriteMode.WriteSchema)

            dsStore.Dispose()

            ComboBox1.Tag = TextBox1.Text
            ListConnectionFiles()

            ComboBox1.SelectedIndex = ComboBox1.FindStringExact(ComboBox1.Tag)

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try

    End Sub


    Private Sub Delete()
        Try
            If ComboBox1.SelectedIndex > 0 Then

                Dim dsStore As New DataSet()
                dsStore.ReadXml(appDIR & "config.xml")

                Dim dv As DataView
                dv = dsStore.Tables(0).DefaultView

                dv.RowFilter = "server='" + TextBox1.Text + "'"
                'dv.Sort = "categoryID";
                dv.Delete(0)
                dv.RowFilter = ""

                dsStore.WriteXml(appDIR & "config.xml", XmlWriteMode.WriteSchema)

                dv.Dispose()
                dsStore.Dispose()

                ListConnectionFiles()

            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub