    Private Sub AnalyzeREGfile_And_Addit2listview2(ByVal filepath$)
        Dim tmpList As List(Of RegistryList)

        tmpList = ReadREGfile2Arraylist(filepath)

        If tmpList.Count = 0 Then Exit Sub
        Dim i%

        For i = 0 To tmpList.Count - 1
            Additem2(tmpList(i).RegParent, tmpList(i).RegVariable, tmpList(i).RegValueType, tmpList(i).RegValue)
        Next
    End Sub

#Region " registry READ "

    Public Class RegistryList
        Private s1Parent As String
        Private s2Variable As String
        Private s3ValueType As String
        Private s4Value As String

        Public Sub New(ByVal aParent As String, ByVal b2Variable As String, ByVal c3ValueType$, ByVal d4Value As String)
            s1Parent = aParent
            s2Variable = b2Variable
            s3ValueType = c3ValueType
            s4Value = d4Value
        End Sub

        Public Property RegParent() As String
            Get
                Return s1Parent
            End Get
            Set(ByVal sValue As String)
                s1Parent = sValue
            End Set
        End Property

        Public Property RegVariable() As String
            Get
                Return s2Variable
            End Get
            Set(ByVal sValue As String)
                s2Variable = sValue
            End Set
        End Property

        Public Property RegValueType() As String
            Get
                Return s3ValueType
            End Get
            Set(ByVal sValue As String)
                s3ValueType = sValue
            End Set
        End Property

        Public Property RegValue() As String
            Get
                Return s4Value
            End Get
            Set(ByVal sValue As String)
                s4Value = sValue
            End Set
        End Property

    End Class

    Private Function ReadREGfile2Arraylist(ByVal filepath$) As List(Of RegistryList)
        Dim strLBracket$ = ""
        Dim strRBracket$ = ""
        Dim strBracket$ = ""
        Dim line$ = ""
        Dim strMainKey$ = ""
        Dim VAR$ = ""
        Dim VARvalue$ = ""
        Dim pos1% = 0

        Dim sr As System.IO.StreamReader = Nothing
        Dim Result As New List(Of RegistryList)

        Try
            sr = New System.IO.StreamReader(filepath)

            Dim checkIfIsRegFile As Boolean = False

            Do While sr.Peek() >= 0
                strLBracket = ""
                strRBracket = ""
                strBracket = ""

                line = sr.ReadLine

                If checkIfIsRegFile = False Then
                    If line.ToLower.StartsWith("regedit4") = False AndAlso line.ToLower.StartsWith("windows registry editor version") = False Then
                        Return Result
                    End If

                    checkIfIsRegFile = True
                End If

                If line.Trim = "" Or line.ToLower.StartsWith("regedit4") Or line.ToLower.StartsWith("windows registry editor version") Or line.ToLower.StartsWith(";") Then
                    Continue Do
                End If


                strLBracket = Mid(line, 1, 1)
                strRBracket = Mid(line, Len(line))
                strBracket = strLBracket & strRBracket

                If strBracket = "[]" Then
                    strMainKey = line
                    Result.Add(New RegistryList(strMainKey, "", "", ""))
                    'Debug.Print(strMainKey)
                    Continue Do
                Else
                    pos1 = InStr(line, """=")

                    If Mid(line, 1, 2) = "@=" Then
                        VAR = "@"

                        VARvalue = Mid(line, pos1 + 3)

                        Result.Add(New RegistryList(strMainKey, VAR, IdentifyValueType(VARvalue.ToLower), CleanQuotes(VARvalue)))
                        'Debug.Print(strMainKey & " * " & VAR & " * " & VARvalue)
                    Else

                        If pos1 > 0 Then 'VAR + VALUE
                            VAR = Mid(line, 1, pos1)
                            VARvalue = Mid(line, pos1 + 2)

                            If strRBracket <> "\" Then 'if not continue to next line
                                Result.Add(New RegistryList(strMainKey, CleanQuotes(VAR), IdentifyValueType(VARvalue.ToLower), CleanQuotes(VARvalue)))
                                'Debug.Print(strMainKey & " * " & VAR & " * " & VARvalue)
                            End If
                        Else   'is multiline variable
                            If strRBracket <> "\" Then 'if is end line
                                VARvalue = VARvalue & Mid(line, 2)
                                VARvalue = Replace(VARvalue, "\ ", "")

                                Result.Add(New RegistryList(strMainKey, CleanQuotes(VAR), IdentifyValueType(VARvalue.ToLower), CleanQuotes(VARvalue)))
                                'Debug.Print(strMainKey & " * " & VAR & " * " & VARvalue)
                            Else
                                VARvalue = VARvalue & Mid(line, 2)
                            End If

                        End If
                    End If
                End If

            Loop

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            If Not sr Is Nothing Then
                sr.Close()
            End If
        End Try

        Return Result
    End Function

    Private Function CleanQuotes(ByVal str$) As String
        If str.StartsWith("""") = False Then Return str

        str = Mid(str, 2)
        str = Mid(str, 1, Len(str) - 1)

        Return str
    End Function

    Private Function IdentifyValueType(ByVal valSTR$) As String
        If valSTR.StartsWith("dword:") Then
            Return "dword"
        ElseIf valSTR.StartsWith("hex:") Then
            Return "hex"
        ElseIf valSTR.StartsWith("hex(7):") Then
            Return "reg_multi_sz"
        ElseIf valSTR.StartsWith("hex(2):") Then
            Return "reg_expand_sz"
        Else
            Return "string"
        End If
    End Function

#End Region