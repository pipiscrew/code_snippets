Dim a As [Assembly] = [Assembly].LoadFile("C:\Documents and Settings\Admin\Desktop\Providers\PipisCrewProviders\bin\Release\PipisCrewProviders.dll")


        ''get params + return
        ''Dim withoutFOR As Type
        ''withoutFOR = a.GetType("Devv.Core.Utils.GeoIpUtil", True, True)
        ''Dim instance As Object
        ''instance = Activator.CreateInstance(withoutFOR)

        ''Dim mymethod1 As MethodInfo = withoutFOR.GetMethod("LoadCountryDatabase")
        ''Dim param As ParameterInfo() = mymethod1.GetParameters()
        ''Dim ReturnParam As ParameterInfo = mymethod1.ReturnParameter

        ''MsgBox(ReturnParam.ParameterType.ToString)

        ''For Each par In param
        ''    MsgBox(par.Name & " as " & par.ParameterType.ToString)
        ''Next
        
        
        

        For Each typ In a.GetTypes


            For Each meth In typ.GetMethods
                Debug.Print(meth.Name)
                If meth.DeclaringType.FullName.Contains("System.") = False Then
                    'Debug.Print(meth.Name)

                    'arZ47EiWS
                    Dim mymethod1 As MethodInfo = typ.GetMethod(meth.Name)
                    Dim param As ParameterInfo() = mymethod1.GetParameters()
                    Dim ReturnParam As ParameterInfo = mymethod1.ReturnParameter

                    Dim tmp$ = typ.Name & "." & meth.Name

                    For Each par In param
                        tmp = tmp & par.Name & " as " & par.ParameterType.ToString
                        'MsgBox(par.Name & " as " & par.ParameterType.ToString)
                    Next

                    'if parameter exist 
                    If tmp <> typ.Name & "." & meth.Name Then
                        tmp = tmp.Replace(typ.Name & "." & meth.Name, typ.Name & "." & meth.Name & " (")
                        tmp = tmp & ")"
                    End If

                    tmp = tmp & " as " & ReturnParam.ParameterType.ToString

                    Debug.Print(tmp)
                    'MsgBox(ReturnParam.ParameterType.ToString)

                    'Debug.Print(par.Name & " as " & par.ParameterType.ToString)
                    'MsgBox(par.Name & " as " & par.ParameterType.ToString)
                    'meth = meth
                End If

            Next

            'Dim myType As Type = typ
            'Dim mymethod As MethodInfo = myType.GetMethod("LoadCountryDatabase")

        Next