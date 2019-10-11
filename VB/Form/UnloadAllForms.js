'// this sub unloads all forms in a program before exiting.
'//
'// NOTE: if calling from the Form_Unload event in the MAIN form
'//       use: UnloadAllForms(Me.Name)
'//    or else if calling form another sub
'//       use: UnloadAllForms()
'//    this prevents the routine from trying to unload a form that
'//    is already in the process of unloading itself.

Public Sub UnloadAllForms(Optional form_name As String = "")
Dim Form As Form

'// unload each form in the program and free its resources
    For Each Form In Forms
        If Form.Name <> form_name Then
            Unload Form
            Set Form = Nothing
        End If
    Next Form
End Sub