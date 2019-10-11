#Region " Create a Form from a String "

    Public Shared Sub CreateForm(ByVal FormName As String, ByVal Module_Reference As String, ByVal ParentForm As Form, ByVal ShowDialog As Boolean, ByVal ExamID As Object)
        Try

            Dim extAssembly As System.Reflection.Assembly = _
            System.Reflection.Assembly.Load(Module_Reference)

            Dim frm As String
            frm = Module_Reference + "." + FormName
            Dim extForm As Form = extAssembly.CreateInstance(frm, True)

            Cursor.Current = Cursors.WaitCursor

            If ShowDialog = False Then

                extForm.MdiParent = ParentForm.ActiveForm
                extForm.Show()
            Else
                extForm.ShowDialog()
            End If


            If ExamID > 0 Then

                Dim assembly_type As Type
                Dim method1 As System.Reflection.MethodInfo
                Dim method2 As System.Reflection.MethodInfo

                assembly_type = extAssembly.GetType(frm)


                method1 = assembly_type.GetMethod("SelectExam")
                Dim prm2(0) As Object
                prm2(0) = ExamID
                method1.Invoke(extForm, prm2)


                method2 = assembly_type.GetMethod("FillFormFromClass")
                Dim prm3() As Object
                prm3 = Nothing
                method2.Invoke(extForm, prm3)


            End If


            Cursor.Current = Cursors.Default


        Catch ex As System.Exception
            'TMS_Data.TMS_MESSAGE.DisplayMessage(51, ex.Source + ":" + ex.Message, 0, 2)
        End Try

    End Sub

#End Region