'source
'http://dotnetslackers.com/community/blogs/simoneb/archive/2007/06/20/how-to-sort-a-generic-list_3c00_t_3e00_.aspx

'**when we want to have sort only for 1field
    Public Class FilesInfo
    	'***this line
        Implements IComparable(Of FilesInfo)
        '***this line

        Private sFilename As String
        Private sPassword As String

        Public Sub New(ByVal fl$, ByVal pwd$)
            sFilename = fl
            sPassword = pwd
        End Sub

        Public Property Filename() As String
            Get
                Return sFilename
            End Get
            Set(ByVal sValue As String)
                sFilename = sValue
            End Set
        End Property

        Public Property Password() As String
            Get
                Return sPassword
            End Get
            Set(ByVal sValue As String)
                sPassword = sValue
            End Set
        End Property

		'***this lines
        Public Function CompareTo(ByVal other As FilesInfo) As Integer Implements System.IComparable(Of FilesInfo).CompareTo
			'setting this here, sorting by default with Password field
			Return Password.CompareTo(other.Password)
        End Function
        '***this lines
    End Class
    
'example
Dim lstvClass As New List(Of FilesInfo)
.
.
.
.
'then sort by password comparer with
lstvClass.Sort()



    
'**if we want to have more 1sort field option
'but never with this way can sort Filename,Password
'always sort with 1field
    Public Class FilesInfo
    	'***this lines
        Implements IComparable(Of FilesInfo)
        
        '1st sort option
        Public Shared PasswordComparison As Comparison(Of FilesInfo) = AddressOf PasswordComparisonSort

        Private Shared Function PasswordComparisonSort(ByVal p1 As FilesInfo, ByVal p2 As FilesInfo) As Integer
            Return p1.sPassword.CompareTo(p2.Password)
        End Function
        
        '2nd sort option
        Public Shared FilenameComparison As Comparison(Of FilesInfo) = AddressOf FilenameComparisonSort

        Private Shared Function FilenameComparisonSort(ByVal p1 As FilesInfo, ByVal p2 As FilesInfo) As Integer
            Return p1.sFilename.CompareTo(p2.sFilename)
        End Function
        '***this lines
        

        Private sFilename As String
        Private sPassword As String

        Public Sub New(ByVal fl$, ByVal pwd$)
            sFilename = fl
            sPassword = pwd
        End Sub

        Public Property Filename() As String
            Get
                Return sFilename
            End Get
            Set(ByVal sValue As String)
                sFilename = sValue
            End Set
        End Property

        Public Property Password() As String
            Get
                Return sPassword
            End Get
            Set(ByVal sValue As String)
                sPassword = sValue
            End Set
        End Property

		'***this lines
        Public Function CompareTo(ByVal other As FilesInfo) As Integer Implements System.IComparable(Of FilesInfo).CompareTo
        	'also we can have a default (aka when calling .Sort()
        	'here enter only when called from .Sort()
        	Return Password.CompareTo(other.Password)
        End Function
        '***this lines
    End Class


'example
Dim lstvClass As New List(Of FilesInfo)
.
.
.
.
'then sort by password comparer with
lstvClass.Sort(FilesInfo.PasswordComparison)

if we want to sort by other col we have to create the
proper
-Comparison
-ComparisonSort
procs