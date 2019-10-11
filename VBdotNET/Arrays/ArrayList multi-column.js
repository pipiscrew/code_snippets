
    Public Class XNAMES
        Dim _variableName As String
        Dim _variableValue As String

        Sub New(ByVal variableName As String, ByVal variableValue As String)
            _variableName = variableName
            _variableValue = variableValue
        End Sub

        Public ReadOnly Property variableName() As String
            Get
                Return _variableName
            End Get
        End Property

        Public ReadOnly Property variableValue() As String
            Get
                Return _variableValue
            End Get
        End Property
    End Class


    Dim arrayListInfo As New ArrayList()

    Public Sub AddNewVariable(ByVal varName$, ByVal varValue$)
        arrayListInfo.Add(New XNAMES(varName, varValue))
    End Sub

    Public Sub ShowArr()

        Dim i
        For i = 0 To arrayListInfo.Count - 1
            MsgBox(arrayListInfo.Item(i).variableName() & vbCrLf & arrayListInfo.Item(i).variableValue())
        Next i
    End Sub
