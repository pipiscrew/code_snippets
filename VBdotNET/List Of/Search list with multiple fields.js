'source
'http://social.msdn.microsoft.com/Forums/en-US/vbgeneral/thread/bad5193a-3bf1-4675-8a05-625f46f9c158

Public Class FoundItemsPredicate

    'Private _key As Guid
    Private _DECposition As Long

    'Public Sub New(ByVal key As Guid)
    '    _key = key
    'End Sub

    Public Sub New(ByVal decPOS As Long)
        _DECposition = decPOS
    End Sub

    'Public Function CompareKeys(ByVal obj As FoundItems) As Boolean

    '    Return (_key = obj.Key)

    'End Function

    Public Function CompareDECposition(ByVal obj As FoundItems) As Boolean

        Return (_DECposition = obj.DECposition)

    End Function

End Class


'>>>>>>>code @ form
Dim FoundItemCollection As New List(Of FoundItems)
.
. 'add items
.
Dim comparer As New FoundItemsPredicate(byteArrReaderStart)
Dim obj As FoundItems = FoundItemCollection.Find(AddressOf comparer.CompareDECposition)

If obj IsNot Nothing Then
    Continue For
End If



'my class
Public Class FoundItems

    Private m_ValAfter As String
    Private m_ValBefore As String
    Private m_Unicode As Boolean
    Private m_SearchedFor As String
    Private m_DECposition As Long
    Private m_STR As String

    Public Property STR() As String
        Get
            Return m_STR
        End Get
        Set(ByVal value As String)
            m_STR = value
        End Set
    End Property

    Public Property DECposition() As Long
        Get
            Return m_DECposition
        End Get
        Set(ByVal value As Long)
            m_DECposition = value
        End Set
    End Property

    Public Property SearchedFor() As String
        Get
            Return m_SearchedFor
        End Get
        Set(ByVal value As String)
            m_SearchedFor = value
        End Set
    End Property

    Public Property Unicode() As Boolean
        Get
            Return m_Unicode
        End Get
        Set(ByVal value As Boolean)
            m_Unicode = value
        End Set
    End Property

    Public Property ValBefore() As String
        Get
            Return m_ValBefore
        End Get
        Set(ByVal value As String)
            m_ValBefore = value
        End Set
    End Property

    Public Property ValAfter() As String
        Get
            Return m_ValAfter
        End Get
        Set(ByVal value As String)
            m_ValAfter = value
        End Set
    End Property


End Class





'original article
Dim objectList As List(Of MyBusinessObject) = GetObjects()
 
' Find by key
Dim key as Guid = <the key you want to search for>
Dim comparer As New MyBusinessObjectPredicate(key)
Dim obj As MyBusinessObject = objectList.Find(AddressOf comparer.CompareKeys)
If obj IsNot Nothing Then
    ' Do something with the object
End If
 
' Find by name
Dim name as String = <the name you want to search for>
Dim comparer As New MyBusinessObjectPredicate(name)
Dim obj As MyBusinessObject= objectList.Find(AddressOf comparer.CompareNames)
If field IsNot Nothing Then
    ' Do something with the object
End If
 
' Custom Predicate for List(Of MyBusinessObject).Find
Private Class MyBusinessObjectPredicate
    Private _key As Guid
    Private _name As String
    Public Sub New(ByVal key As Guid)
        _key = key
    End Sub
    Public Sub New(ByVal name As String)
        _name = name
    End Sub
    Public Function CompareKeys(ByVal obj As MyBusinessObject) As Boolean
        Return (_key = obj.Key)
    End Function
    Public Function CompareNames(ByVal obj As MyBusinessObject) As Boolean
        Return (_key = obj.Name)
    End Function
End Class