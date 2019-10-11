'class hold data
    Public Class RegistryList
        Private s1Parent As String
        Private s2Variable As String
        Private s3Value As String

        Public Sub New(ByVal aParent As String, ByVal b2Variable As String, ByVal c3Value As String)
            s1Parent = aParent
            s2Variable = b2Variable
            s3Value = c3Value
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

        Public Property RegValue() As String
            Get
                Return s3Value
            End Get
            Set(ByVal sValue As String)
                s3Value = sValue
            End Set
        End Property

    End Class
    
'add on the fly
Private Function ReadREGfile2Arraylist(ByVal filepath$) As List(Of RegistryList)
	Dim Result As New List(Of RegistryList)

    Try
    	Result.Add(New RegistryList(strMainKey, "", ""))
    Catch
    End try 
    
	Return Result
End Function 

'loop through items
Dim tmpList As List(Of RegistryList)

tmpList = ReadREGfile2Arraylist(filepath)

If tmpList.Count = 0 Then Exit Sub
Dim i%

For i = 0 To tmpList.Count - 1
    Additem2(tmpList(i).RegParent, tmpList(i).RegVariable, tmpList(i).RegValue)
Next