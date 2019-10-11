    Public Class FilesInfo
        '***this line
        Implements IComparable(Of FilesInfo)
        '***this line
        
        .
        .
        .
        .
        .
        
        '***this line
        Public Function CompareTo(ByVal other As FilesInfo) As Integer Implements System.IComparable(Of FilesInfo).CompareTo
            '   Return Destination.CompareTo(other.Destination) 'ASC
            Return other.Destination.CompareTo(Destination) 'DESC
        End Function
        '***this line
    End Class