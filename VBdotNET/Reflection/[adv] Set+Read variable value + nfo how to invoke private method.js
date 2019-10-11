        Dim a As [Assembly] = [Assembly].LoadFile("D:\a3\BE\BinaryEditor.exe")

        Dim withoutFOR As Type
        withoutFOR = a.GetType("7tSoFETK4JhWGN9rKIC.VJyXdTTjmm4BkuXxGy1", True, True)

        Dim instance As Object
        instance = Activator.CreateInstance(withoutFOR)

        Dim km As MethodInfo

        km = withoutFOR.GetMethod("ebq9CFHlR", BindingFlags.Instance Or BindingFlags.NonPublic)

        Dim FieldInfo1 As FieldInfo
        FieldInfo1 = withoutFOR.GetField("jHwPbg4j4", BindingFlags.Instance Or BindingFlags.NonPublic)                 ' myType.GetField("FldDef1857", BindingFlags.Instance Or BindingFlags.NonPublic)

        FieldInfo1.SetValue(instance, 3)
        
        km.Invoke(instance, Nothing)

        Dim FieldInfo As FieldInfo
        FieldInfo = withoutFOR.GetField("kbgR9HvBXB", BindingFlags.Instance Or BindingFlags.NonPublic)                 ' myType.GetField("FldDef1857", BindingFlags.Instance Or BindingFlags.NonPublic)

        MsgBox(FieldInfo.GetValue(instance))