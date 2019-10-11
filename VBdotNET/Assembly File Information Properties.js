    Public ReadOnly Property AssemblyCompany As String
        Get
            Dim customAttributes As Object() = Assembly.GetExecutingAssembly.GetCustomAttributes(GetType(AssemblyCompanyAttribute), False)
            If (customAttributes.Length = 0) Then
                Return ""
            End If
            Return DirectCast(customAttributes(0), AssemblyCompanyAttribute).Company
        End Get
    End Property

    Public ReadOnly Property AssemblyCopyright As String
        Get
            Dim customAttributes As Object() = Assembly.GetExecutingAssembly.GetCustomAttributes(GetType(AssemblyCopyrightAttribute), False)
            If (customAttributes.Length = 0) Then
                Return ""
            End If
            Return DirectCast(customAttributes(0), AssemblyCopyrightAttribute).Copyright
        End Get
    End Property

    Public ReadOnly Property AssemblyDescription As String
        Get
            Dim customAttributes As Object() = Assembly.GetExecutingAssembly.GetCustomAttributes(GetType(AssemblyDescriptionAttribute), False)
            If (customAttributes.Length = 0) Then
                Return ""
            End If
            Return DirectCast(customAttributes(0), AssemblyDescriptionAttribute).Description
        End Get
    End Property

    Public ReadOnly Property AssemblyProduct As String
        Get
            Dim customAttributes As Object() = Assembly.GetExecutingAssembly.GetCustomAttributes(GetType(AssemblyProductAttribute), False)
            If (customAttributes.Length = 0) Then
                Return ""
            End If
            Return DirectCast(customAttributes(0), AssemblyProductAttribute).Product
        End Get
    End Property

    Public Shared ReadOnly Property AssemblyTitle As String
        Get
            Dim customAttributes As Object() = Assembly.GetExecutingAssembly.GetCustomAttributes(GetType(AssemblyTitleAttribute), False)
            If (customAttributes.Length > 0) Then
                Dim attribute As AssemblyTitleAttribute = DirectCast(customAttributes(0), AssemblyTitleAttribute)
                If (attribute.Title <> "") Then
                    Return attribute.Title
                End If
            End If
            Return Path.GetFileNameWithoutExtension(Assembly.GetExecutingAssembly.CodeBase)
        End Get
    End Property

    Public ReadOnly Property AssemblyVersion As String
        Get
            Return Assembly.GetExecutingAssembly.GetName.Version.ToString
        End Get
    End Property
