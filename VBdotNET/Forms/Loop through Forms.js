        For i As Integer = My.Application.OpenForms.Count - 1 To 0 Step -1
            If My.Application.OpenForms.Item(i) IsNot Me Then
                My.Application.OpenForms.Item(i).Close()
            End If
        Next i
        
        'OR
		
		'working when 'Application Framework' is disabled
		For Each f As Form In System.Windows.Forms.Application.OpenForms
			MessageBox.Show(f.Text)
		Next
