
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\TTAdv.exe") ' Application.StartupPath & "\WindowsApplication12.exe")


        Dim withoutFOR As Type
        withoutFOR = a.GetType("Client.SplashScreen2")

        Dim obj
        'obj = Activator.CreateInstance(withoutFOR, True)
        obj = Activator.CreateInstance(withoutFOR, True)

        obj.show()

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        For i As Integer = My.Application.OpenForms.Count - 1 To 0 Step -1
            Debug.Print(My.Application.OpenForms.Item(i).Name)
        Next


        'Dim flex

        'For i As Integer = My.Application.OpenForms.Count - 1 To 0 Step -1

        '    If My.Application.OpenForms.Item(i) IsNot Me Then

        '        'Debug.Print(My.Application.OpenForms.Item(i).Name)
        '        'My.Application.OpenForms.Item(i).Close()
        '        If My.Application.OpenForms.Item(i).Name = "MAinForm" Then
        '            Dim ctl
        '            ' ctl= 

        '            ctl = My.Application.OpenForms.Item(i)
        '            For j As Integer = ctl.Controls.Count - 1 To 0 Step -1
        '                flex = ctl.Controls(j)


        '                MsgBox(flex.GetData(1, 1))
        '                Debug.Print(ctl.Controls(j).Name)
        '            Next

        '        End If

        '    End If

        'Next i
    End Sub