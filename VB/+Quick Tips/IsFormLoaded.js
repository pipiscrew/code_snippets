Public Function IsFormLoaded(FormToCheck As Form) As Integer
'Briskei ean h forma einai fortwmenh.. FormToCheck = Form.Name
    Dim Y As Integer
    For Y = 0 To Forms.Count - 1
        If Forms(Y) Is FormToCheck Then
            IsFormLoaded = True
            Exit Function
        End If
    Next
    IsFormLoaded = False
End Function