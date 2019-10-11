        Dim a As [Assembly] = [Assembly].LoadFile("C:\!patching\DayView Net Setup\Global Assembly Cache Folder\DayView.Net\1.0.3033.18298_0806199B4EE84056\DayView.Net.dll")

        'DayView.Net.kGen.KeyGen
        'kGen = is shared class
        'Keygen is shared method

        For Each t As Type In a.GetTypes
            If t.Name = "kGen" Then
                Dim kk As Int16 = 1

                Dim mymethod As MethodInfo = t.GetMethod("KeyGen")
                Dim returnValue As Object = mymethod.Invoke(Nothing, New Object() {"veteran", "A16N_DayView", kk})
                MsgBox(returnValue)

            End If
        Next