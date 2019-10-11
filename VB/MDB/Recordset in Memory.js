    Dim arrFields As Variant

    Set rs = New ADODB.Recordset

    'Grabar el array de nombre de campos del recordset
    arrFields = Array("Codigo", "Apellidos", "Nombres", "Direccion", "Edad", "Estado")

    'crear un recordset in-memory
    With rs.Fields
        .Append "Codigo", adVarChar, 20, adFldRowID
        .Append "Apellidos", adVarChar, 100, adFldUpdatable + adFldIsNullable
        .Append "Nombres", adVarChar, 100, adFldUpdatable + adFldIsNullable
        .Append "Direccion", adVarChar, 100, adFldUpdatable + adFldIsNullable
        .Append "Edad", adInteger, , adFldUpdatable
        .Append "Estado", adInteger, , adFldUpdatable
    End With

    rs.Open , , adOpenStatic, adLockOptimistic

    'Llenar el recordset y mover al primer registro
    rs.AddNew arrFields, Array("A123", "Toro Recalde", "Oliver Hernando", "calle abc", 28, 1)
    rs.AddNew arrFields, Array("B224", "Barahona Davila", "Hernan Xavier", "calle xyz", 35, 1)
    rs.Update
    rs.MoveFirst
    
    List1.Clear
    rs.MoveFirst
    Do While Not rs.EOF
        List1.AddItem rs!codigo & vbTab & rs!Apellidos & vbTab & rs!nombres & vbTab & rs!direccion & vbTab & rs!edad & vbTab & rs!estado
        rs.MoveNext
    Loop
    Set rs = Nothing