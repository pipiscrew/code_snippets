        Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\WindowsApplication12.exe")

'working
        'Dim withoutFOR As Type
        'withoutFOR = a.GetType("PipisCrewProviders.ADOnet", True, True)
        
        For Each t As Type In a.GetTypes
            If t.Name = "Form1" Then
                Dim myType As Type = t
                Dim obj As Object = Activator.CreateInstance(myType)

                obj.height = 370 '420
                obj.width = 340
                obj.show()

                For i As Integer = obj.Controls.Count - 1 To 0 Step -1

                    If obj.Controls(i).name = "C1FlexGrid1" Then

                        'obj.Controls(i).text = ">>>>>>>> RONGCHAUA the magician <<<<<<<<" '"[Strong Name Helper] said: RONGCHAUA the magician!"
                        obj.Controls(i).text = ">>> development by RONGCHAUA the magician <<<"
                    End If

                    If obj.Controls(i).name = "txtLog" Then
                        obj.Controls(i).height = 170
                        obj.Controls(i).width = 200
                        obj.Controls(i).ScrollBars = ScrollBars.None
                        'obj.Controls(i).
                    End If

                    If obj.Controls(i).name = "txtPfad" Then
                        obj.Controls(i).width = 200
                        'obj.Controls(i).text = lstv.SelectedItems(0).Text
                        obj.Controls(i).multiline = False
                    End If

                    If obj.Controls(i).name = "btnSendFeedback" Or obj.Controls(i).name = "btnBrowse" Then
                        obj.Controls(i).visible = False
                    End If

                    If obj.Controls(i).name = "btnQuit" Then
                        obj.Controls(i).left = 220
                        obj.Controls(i).top = 82
                    End If

                    If obj.Controls(i).name = "btnCheckUpdates" Then
                        obj.Controls(i).visible = False
                        'obj.Controls(i).left = 220
                        'obj.Controls(i).top = 105
                    End If

                    If obj.Controls(i).name = "btnDecryptAndSave" Then
                        obj.Controls(i).performclick()
                        obj.Controls(i).visible = False
                    End If
                Next

            End If
        Next