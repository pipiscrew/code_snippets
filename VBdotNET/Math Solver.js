prosoxh 8elei Reference @ COM - Microsoft Script Control

 

 

Public Class Evaluator

 

    Dim scriptControl As New MSScriptControl.ScriptControlClass

    Private _Formula As String

    Private _VariablesPreffix As String

    Private _Operators As ArrayList

    Private _CorrectedFormula As String

    Private _FormulaVariables As ArrayList

    Private _ParseCondition As ParseCondition = ParseCondition.RaiseErroForUndefinedVariable

 

    Public ReadOnly Property Formula() As String

        Get

            Return Me._Formula

        End Get

    End Property

 

    Public ReadOnly Property VariablesPreffix() As String

        Get

            Return Me._VariablesPreffix

        End Get

    End Property

 

    Private Sub PreEvaluate(ByVal keyCode As String, ByVal keyValue As String)

        Me._Formula = Me._Formula.Replace(keyCode.ToUpper, keyValue)

    End Sub

 

    Private Sub PreEvaluate(ByVal keyValuesDictionary As Hashtable)

        For Each keyCode As String In keyValuesDictionary.Keys

            Me.PreEvaluate(keyCode, keyValuesDictionary(keyCode))

        Next

    End Sub

 

    Public Function Evaluate(ByVal values As Hashtable) As Double

        Dim tmpFormula As String = Me._Formula

        For Each var As String In Me._FormulaVariables

            Select Case var.ToLower

                Case "abs", "round", "fix", "sin", "exp", "cos", "int", "atn", "tan", "sqr", "sgn", "log"

                Case Else

                    Dim index As Integer = CInt(var.Replace(Me._VariablesPreffix, ""))

                    If Not values(index) Is Nothing Then

                        tmpFormula = tmpFormula.Replace(var, values(index))

                    Else

                        If Me._ParseCondition = ParseCondition.RaiseErroForUndefinedVariable Then

                            Throw New Exception("Undefined variable!" & vbCrLf & "Base formula: " & Me._Formula & vbCrLf & "Corrected formula: " & Me._CorrectedFormula & vbCrLf & "On variable: " & var)

                        Else

                            tmpFormula = tmpFormula.Replace(var, 0)

                        End If

                    End If

            End Select

        Next

        Try

            Return CDbl(scriptControl.Eval(tmpFormula))

        Catch ex As Exception

            scriptControl.Error.Clear()

            Return -1

            'Throw New Exception(tmpFormula, ex)

        End Try

    End Function

 

    Public Sub New(ByVal formula As String, ByVal variablePreffix As String, ByVal parseCondition As ParseCondition, Optional ByVal preEvaluateKeyValuesDictionary As Hashtable = Nothing)

        scriptControl.Language = "vbscript"

        Me._Formula = formula

        Me._VariablesPreffix = variablePreffix

        Me._ParseCondition = parseCondition

        InitializeOperators()

        If Not preEvaluateKeyValuesDictionary Is Nothing Then

            Me.PreEvaluate(preEvaluateKeyValuesDictionary)

        End If

        InitializeFormula()

    End Sub

 

    Private Sub InitializeOperators()

        Me._Operators = New ArrayList

        Me._Operators.Add(CChar("+"))

        Me._Operators.Add(CChar("-"))

        Me._Operators.Add(CChar("/"))

        Me._Operators.Add(CChar("*"))

        Me._Operators.Add(CChar("^"))

        Me._Operators.Add(CChar("("))

        Me._Operators.Add(CChar(")"))

        'Me._Operators.Add(CChar(","))

    End Sub

 

    Private Sub InitializeFormula()

        Me._CorrectedFormula = Me._Formula.Replace(" ", "")

        Me._FormulaVariables = New ArrayList

        Dim arrOperators() As Char

        Dim variables() As String = Me._CorrectedFormula.Split(CType(Me._Operators.ToArray(GetType(Char)), Char()))

        For Each var As String In variables

            var = var.Trim

            If var.Length > 0 AndAlso Not IsNumeric(var) Then

                Me._FormulaVariables.Add(var)

                If Not IsNumeric(var.Replace(Me._VariablesPreffix, "")) Then

                    Select Case var.ToLower

                        Case "abs", "round", "fix", "sin", "exp", "cos", "int", "atn", "tan", "sqr", "sgn", "log"

                        Case Else

                            Throw New Exception("Wrong formula!" & vbCrLf & "Base formula: " & Me._Formula & vbCrLf & "Corrected formula: " & Me._CorrectedFormula & vbCrLf & "On variable: " & var)

                    End Select

                End If

            End If

        Next

    End Sub

 

    Public ReadOnly Property Operators() As ArrayList

        Get

            Return Me._Operators

        End Get

    End Property

 

    Public ReadOnly Property ParseCondition() As ParseCondition

        Get

            Return Me._ParseCondition

        End Get

    End Property

 

End Class

 

Public Enum ParseCondition

    RaiseErroForUndefinedVariable

    DoNotRaiseErroForUndefinedVariable

End Enum

 

 

 

 

 

 

kai sto form run

Dim calculator As New Evaluator("Round((P1+P3)/P2)", "P", ParseCondition.DoNotRaiseErroForUndefinedVariable)

Dim parameters As New Hashtable

parameters.Add(1, 12)

parameters.Add(2, 24)

parameters.Add(3, 6)

Dim value As Double = calculator.Evaluate(parameters)
