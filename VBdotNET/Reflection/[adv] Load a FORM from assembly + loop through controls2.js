    Private Sub Button6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button6.Click
        Dim a As [Assembly] = [Assembly].LoadFile("C:\Documents and Settings\Admin\Desktop\StrongName Helper\v0998beta\WindowsApplication1\bin\Debug\KDT\KDT.exe")

        Dim j%
        For Each t As Type In a.GetTypes

            If t.Name = "" Then
                j += 1
                If j > 5 Then
                    '"" Then
                    ' Debug.Print(t.Name)
                    Dim myType As Type = t
                    Dim obj As Object = Activator.CreateInstance(myType)

                    obj.height = 370 '420
                    obj.width = 340
                    obj.show()

                    Dim ctl As Object
                    Dim tabPage As Object
                    ctl = obj.Controls("TabControl1")
                    tabPage = ctl.Controls("TabPage1")
                    ctl = tabPage.Controls("GroupBox1")
                    ctl = ctl.Controls("Text_File")
                    ctl.text = "sdfsd"

                    ctl = tabPage.Controls("GroupBox5")
                    ctl = ctl.Controls("CMD_GO")

                    ctl.performclick()
                    'obj.TabControl1.TabPage1.GroupBox1.text = "makis"
                    'For i As Integer = obj.Controls.Count - 1 To 0 Step -1
                    '    If obj.Controls(i).name = "TabControl1" Then
                    '        Dim tabOBJ = obj.Controls(i)

                    '        For k As Integer = tabOBJ.Controls.Count - 1 To 0 Step -1
                    '            If tabOBJ.Controls(k).name = "TabPage1" Then
                    '                Dim tabPAGE = tabOBJ.Controls(k)

                    '                For l As Integer = tabPAGE.Controls.Count - 1 To 0 Step -1
                    '                    If tabPAGE.Controls(l).name = "GroupBox1" Then
                    '                        Dim groupbox1 = tabPAGE.Controls(l)

                    '                        For h As Integer = groupbox1.Controls.Count - 1 To 0 Step -1
                    '                            'Debug.Print(groupbox1.Controls(h).name)
                    '                            If groupbox1.Controls(h).name = "Text_File" Then
                    '                                groupbox1.Controls(h).text = "takis!"
                    '                            End If
                    '                        Next

                    '                    End If
                    '                Next

                    '                'Dim tabPAGE = tabOBJ.Controls(k)

                    '                'For l As Integer = tabPAGE.Controls.Count - 1 To 0 Step -1
                    '                '    If tabPAGE.Controls(l).name = "GroupBox1" Then
                    '                '        Dim groupbox1 = tabPAGE.Controls(l)

                    '                '        For h As Integer = groupbox1.Controls.Count - 1 To 0 Step -1

                    '                '            Debug.Print(groupbox1.Controls(k).name)

                    '            End If
                    '        Next
                    '    End If

                    'Next

                    Exit For
                End If
            End If
        Next
    End Sub