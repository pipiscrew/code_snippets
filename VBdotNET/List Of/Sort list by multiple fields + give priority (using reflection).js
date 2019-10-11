'source :
'http://www.dnninfo.com/listings/tabid/57/id/110/p/1/sorting-a-generic-list-dynamically-in-vbnet.aspx

    ''' <summary>
    ''' Sort order enumeration
    ''' </summary>
    Public Enum SortOrder
        Ascending
        Descending
    End Enum

    ''' <summary>
    ''' This instance class is used to sort a generic collection of object instances.
    ''' It automatically fetches the type and performs the necessary comparison(s) to sort.
    ''' 
    ''' To use, instantiate this class, set the sort string property, and pass this
    ''' instance to the internal Sort() function of your generic collection.
    ''' 
    ''' Example:
    '''     Dim MyList As List(Of MyClassType) = 'Populate the list somehow
    '''     Dim Sorter As New Sorter(Of MyClassType)
    '''     Sorter.SortString = "Field1 DESC, Field2"
    '''     MyList.Sort(Sorter) 'After this call, the list is sorted
    ''' </summary>
    Public Class Sorter(Of T)
        Implements IComparer(Of T)

        Private _Sort As String

        ''' <summary>
        ''' Instantiate the class.
        ''' </summary>
        Public Sub New()

        End Sub

        ''' <summary>
        ''' Instantiate the class, setting the sort string.
        ''' Example: "LastName DESC, FirstName"
        ''' </summary>
        Public Sub New(ByVal SortString As String)
            _Sort = SortString
        End Sub

        ''' <summary>
        ''' The sort string used to perform the sort. Can sort on multiple fields.
        ''' Use the property names of the class and basic SQL Syntax.
        ''' 
        ''' Example: "LastName DESC, FirstName"
        ''' </summary>
        Public Property SortString() As String
            Get
                If _Sort IsNot Nothing Then
                    Return _Sort.Trim()
                End If

                Return Nothing
            End Get
            Set(ByVal value As String)
                _Sort = value
            End Set
        End Property

        ''' <summary>
        ''' This is an implementation of IComparer(Of T).Compare
        ''' Can sort on multiple fields, or just one.
        ''' </summary>
        Public Function Compare(ByVal x As T, ByVal y As T) As Integer Implements IComparer(Of T).Compare
            If Not String.IsNullOrEmpty(Me.SortString) Then
                Const ERR As String = "The property ""{0}"" does not exist in type ""{1}"""
                Dim Type As Type = GetType(T)
                Dim Comp As Comparer = Comparer.DefaultInvariant
                Dim Info As PropertyInfo

                For Each Expr As String In Me.SortString.Split(","c)
                    Dim Dir As SortOrder = SortOrder.Ascending
                    Dim Field As String

                    Expr = Expr.Trim()

                    If Expr.EndsWith(" DESC") Then
                        Field = Expr.Replace(" DESC", String.Empty).Trim()
                        Dir = SortOrder.Descending
                    Else
                        Field = Expr.Replace(" ASC", String.Empty).Trim()
                    End If

                    Info = Type.GetProperty(Field)

                    If Info Is Nothing Then
                        Throw New MissingFieldException(String.Format(ERR, Field, Type.ToString()))
                    Else
                        Dim Result As Integer = Comp.Compare(Info.GetValue(x, Nothing), Info.GetValue(y, Nothing))

                        If Result <> 0 Then
                            If Dir = SortOrder.Descending Then
                                Return Result * -1
                            Else
                                Return Result
                            End If
                        End If
                    End If
                Next
            End If

            Return 0
        End Function
    End Class
    
'my class

    Public Class FilesInfo
        '***this line
        Implements IComparable(Of FilesInfo)
        '***this line

        Private sFilename As String
        Private sdestFilename As String
        Private sPassword As String

        Public Sub New(ByVal fl$, ByVal pwd$, ByVal destFilename$)
            sFilename = fl
            sPassword = pwd
            sdestFilename = destFilename
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

        Public Property destFilename() As String
            Get
                Return sdestFilename
            End Get
            Set(ByVal sValue As String)
                sdestFilename = sValue
            End Set
        End Property

        '***this line
        Public Function CompareTo(ByVal other As FilesInfo) As Integer Implements System.IComparable(Of FilesInfo).CompareTo
        End Function
        '***this line
    End Class
    
    
'@ code :
Dim lstvClass As New List(Of FilesInfo)
.
.
Dim Sorter As New Sorter(Of FilesInfo)

Sorter.SortString = "Password DESC, destFilename ASC"
lstvClass.Sort(Sorter)