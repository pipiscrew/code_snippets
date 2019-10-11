'--------------------------------H class
Public Class BenchmarksClass

    Private sDate As String
    Private sTaskID As Integer
    Private sR As Integer
    Private sG As Integer
    Private sB As Integer

    Private sPRJ As String
    Private sTask As String
    Private sUser As String

    Public Sub New()
        sDate = ""
        sTaskID = 0
        sR = 0 : sG = 0 : sB = 0
        sPRJ = ""
        sTask = ""
        sUser = ""
    End Sub

    Public Sub New(ByVal benchDate As String, ByVal taskID As Integer, ByVal PRJName$, ByVal TASKName$, ByVal USERName$)
        sDate = benchDate
        sTaskID = taskID
        sPRJ = PRJName
        sTask = TASKName
        sUser = USERName
    End Sub


    Public Property PRJ() As String
        Get
            Return sPRJ
        End Get
        Set(ByVal sValue As String)
            sPRJ = sValue
        End Set
    End Property

    Public Property Task() As String
        Get
            Return sTask
        End Get
        Set(ByVal sValue As String)
            sTask = sValue
        End Set
    End Property

    Public Property User() As String
        Get
            Return sUser
        End Get
        Set(ByVal sValue As String)
            sUser = sValue
        End Set
    End Property


    Public Property benchDate() As String
        Get
            Return sDate
        End Get
        Set(ByVal sValue As String)
            sDate = sValue
        End Set
    End Property

    Public Property TaskID() As Integer
        Get
            Return sTaskID
        End Get
        Set(ByVal iValue As Integer)
            sTaskID = iValue
        End Set
    End Property

    Public Property R() As Integer
        Get
            Return sR
        End Get
        Set(ByVal iValue As Integer)
            sR = iValue
        End Set
    End Property

    Public Property G() As Integer
        Get
            Return sG
        End Get
        Set(ByVal iValue As Integer)
            sG = iValue
        End Set
    End Property

    Public Property B() As Integer
        Get
            Return sB
        End Get
        Set(ByVal iValue As Integer)
            sB = iValue
        End Set
    End Property

End Class


'--------------------------------code fill class
        Dim Benchmarks As New List(Of BenchmarksClass)
        Dim Benchmark As BenchmarksClass
        
        While rd.Read
			Benchmark = New BenchmarksClass
			Benchmark.benchDate = Mid(childRow("BENCHMARK").ToString, 1, pos - 1)
			Benchmark.TaskID = childRow("TASK_ID").ToString
			Benchmark.R = rd("USER_COLOR_R")
			Benchmark.G = rd("USER_COLOR_G")
			Benchmark.B = rd("USER_COLOR_B")
			Benchmark.PRJ = currentRow("PROJECT_NAME").ToString
			Benchmark.Task = childRow("TASK_NAME").ToString
			Benchmark.User = rd("USER_NAM")
			Benchmarks.Add(Benchmark)
		End While
		
		'to sort a 'list of class' one more extra class is needed 
		Benchmarks.Sort(New BenchmarksClassComparer)
		
'-----------------------Sort method Class
'specific sort BenchmarksClass.benchDate A-Z
'source : http://msdn.microsoft.com/en-us/library/234b841s.aspx

Public Class BenchmarksClassComparer
    Implements IComparer(Of BenchmarksClass)
    '^when press enter automatically generate empty proc below

    Public Function Compare1(ByVal x As BenchmarksClass, ByVal y As BenchmarksClass) As Integer Implements System.Collections.Generic.IComparer(Of BenchmarksClass).Compare
        If x Is Nothing Then
            If y Is Nothing Then
                ' If x is Nothing and y is Nothing, they're
                ' equal. 
                Return 0
            Else
                ' If x is Nothing and y is not Nothing, y
                ' is greater. 
                Return -1
            End If
        Else
            ' If x is not Nothing...
            '
            If y Is Nothing Then
                ' ...and y is Nothing, x is greater.
                Return 1
            Else
                ' ...and y is not Nothing, compare the 
                ' lengths of the two strings.
                '
                Dim retval As Integer = _
                    x.benchDate.Length.CompareTo(y.benchDate.Length)

                If retval <> 0 Then
                    ' If the strings are not of equal length,
                    ' the longer string is greater.
                    '
                    Return retval
                Else
                    ' If the strings are of equal length,
                    ' sort them with ordinary string comparison.
                    '
                    Return x.benchDate.CompareTo(y.benchDate)
                End If
            End If
        End If
    End Function
End Class