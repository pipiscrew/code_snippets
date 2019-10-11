'http://msdn.microsoft.com/en-us/library/ms996467.aspx
    Dim sortColumn% = -1

    Private Sub lstv_ColumnClick(ByVal sender As Object, ByVal e As System.Windows.Forms.ColumnClickEventArgs) Handles lstv.ColumnClick
        ' Determine whether the column is the same as the last column clicked.
        If e.Column <> sortColumn Then
            ' Set the sort column to the new column.
            sortColumn = e.Column
            ' Set the sort order to ascending by default.
            lstv.Sorting = SortOrder.Ascending
        Else
            ' Determine what the last sort order was and change it.
            If lstv.Sorting = SortOrder.Ascending Then
                lstv.Sorting = SortOrder.Descending
            Else
                lstv.Sorting = SortOrder.Ascending
            End If
        End If
        ' Call the sort method to manually sort.
        'lstv.Sort() 'dex xreiazetai of course! ms den 3erei
        ' Set the ListViewItemSorter property to a new ListViewItemComparer
        ' object.
        lstv.ListViewItemSorter = New ListViewItemComparer(e.Column, lstv.Sorting)


    End Sub

#Region " LSTV SORTING CLASS "
    Class ListViewItemComparer
        Implements IComparer
        Private col As Integer
        Private order As SortOrder

        Public Sub New()
            col = 0
            order = SortOrder.Ascending
        End Sub

        Public Sub New(ByVal column As Integer, ByVal order As SortOrder)
            col = column
            Me.order = order
        End Sub

        Public Function Compare(ByVal x As Object, ByVal y As Object) As Integer _
                            Implements System.Collections.IComparer.Compare
            Dim returnVal As Integer = -1
            returnVal = [String].Compare(CType(x,  _
                            ListViewItem).SubItems(col).Text, _
                            CType(y, ListViewItem).SubItems(col).Text)
            ' Determine whether the sort order is descending.
            If order = SortOrder.Descending Then
                ' Invert the value returned by String.Compare.
                returnVal *= -1
            End If

            Return returnVal
        End Function
    End Class
#End Region

'for date support replace^ the compare sub with:
'Visual Basic 
    Public Function Compare(ByVal x As Object, ByVal y As Object) As 
                Integer Implements System.Collections.IComparer.Compare
        Dim returnVal As Integer
        ' Determine whether the type being compared is a date type.
        Try
            ' Parse the two objects passed as a parameter as a DateTime.
            Dim firstDate As System.DateTime = DateTime.Parse(CType(x, _
                                    ListViewItem).SubItems(col).Text)
            Dim secondDate As System.DateTime = DateTime.Parse(CType(y, _ 
                                      ListViewItem).SubItems(col).Text)
            ' Compare the two dates.
            returnVal = DateTime.Compare(firstDate, secondDate)
            ' If neither compared object has a valid date format, 
            ' compare as a string.
        Catch
            ' Compare the two items as a string.
            returnVal = [String].Compare(CType(x, _ 
                              ListViewItem).SubItems(col).Text, CType(y,ListViewItem).SubItems(col).Text)
        End Try
        
        ' Determine whether the sort order is descending.
        If order = SortOrder.Descending Then
            ' Invert the value returned by String.Compare.
            returnVal *= -1
        End If
        Return returnVal
    End Function
