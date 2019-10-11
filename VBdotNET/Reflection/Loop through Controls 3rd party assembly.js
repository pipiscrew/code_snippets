        Dim a As [Assembly] = [Assembly].LoadFile("G:\Program Files\RKLauncher\crkAppz\DeObfuscator.exe") 'PipisCrewProviders.dll")
        Dim count%

        For Each t As Type In a.GetTypes

            If t.Name = "" Then
                If count = 9 Then

                    Dim myType As Type = t
                    Dim obj As Object = Activator.CreateInstance(myType)

                    obj.height = 400
                    obj.show()

                    'For i As Integer = obj.Controls.Count - 1 To 0 Step -1
                    '    If obj.Controls(i).name = "lblDescription" Then
                    '        obj.Controls(i).text = "[Strong Name Helper] said : RONGCHAUA rocks!!"
                    '        obj.Controls(i).TextAlign = ContentAlignment.MiddleCenter
                    '    End If

                    '    If obj.Controls(i).name = "btnDecryptAndSave" Then
                    '        obj.Controls(i).performclick()
                    '    End If
                    'Next

                    For i As Integer = obj.Controls.Count - 1 To 0 Step -1
                        obj.controls(i).Enabled = True

                        If obj.Controls(i).name = "GroupBox1" Then
                            Dim o
                            o = obj.Controls(i)

                            'For k = o.controls.count - 1 To 0 Step -1
                            '    o.controls(k).Enabled = True
                            'Next

                            o.controls(0).text = "takis"
                        End If

                    Next

                    obj.dispose()
                End If


                count += 1
            End If
        Next