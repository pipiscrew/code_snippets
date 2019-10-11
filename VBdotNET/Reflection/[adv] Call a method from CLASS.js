Imports System.Reflection

        ' Use the file name to load the assembly into the current 
        ' application domain.
        Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\PipisCrewProviders.dll")

        Dim withoutFOR As Type
        withoutFOR = a.GetType("GeoIPUtil")

        For Each t As Type In a.GetTypes
            If t.Name = "GeoIPUtil" Then
                Dim myType As Type = t
                Dim mymethod As MethodInfo = myType.GetMethod("LoadCountryDatabase")
                Dim obj As Object = Activator.CreateInstance(myType)

                mymethod.Invoke(obj, Nothing, Nothing, New Object() {"c:\GeoIP.dat"}, Nothing)

                '1-First method 
                'when call overloaded methods, we have to specify the parameters type(s)
                mymethod = myType.GetMethod("LookupCountryCode", New Type() {GetType(String)}) 'New Type() {GetType(Short), GetType(Short)}

                '2-Second method
                Dim result As Object
                result = mymethod.Invoke(obj, Nothing, Nothing, New Object() {"77.49.66.229"}, Nothing)

                MsgBox(result.ToString())
            End If
        Next


------------------------------------------------------


without for :

        Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\Devv.Core.Utils.dll")

        Dim withoutFOR As Type
        withoutFOR = a.GetType("Devv.Core.Utils.GeoIpUtil", True, True)
        Dim mymethod2 As MethodInfo = withoutFOR.GetMethod("LoadCountryDatabase")

        Dim instance As Object
        instance = Activator.CreateInstance(withoutFOR)

        mymethod2.Invoke(instance, Nothing, Nothing, New Object() {Application.StartupPath & "\GeoIP.dat"}, Nothing)

        MsgBox("Load database", MsgBoxStyle.Information)
        '1-First method 
        'when call overloaded methods, we have to specify the parameters type(s)
        mymethod2 = withoutFOR.GetMethod("LookupCountryCode", New Type() {GetType(String)}) 'New Type() {GetType(Short), GetType(Short)}

        MsgBox("Query Class for IP [217.116.23.132]")
        '2-Second method
        Dim result2 As Object
        result2 = mymethod2.Invoke(instance, Nothing, Nothing, New Object() {"217.116.23.132"}, Nothing)

        MsgBox(result2.ToString())
