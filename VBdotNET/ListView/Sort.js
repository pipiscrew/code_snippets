source :: http://support.microsoft.com/kb/319399

-1-
Paste the following code into the class for the form:
Private lvwColumnSorter As ListViewColumnSorter

-2-
Paste the following code into the constructor of the form, after the call to the InitializeComponent method:
' Create an instance of a ListView column sorter and assign it 
' to the ListView control.
lvwColumnSorter = New ListViewColumnSorter()
Me.ListView1.ListViewItemSorter = lvwColumnSorter

-3-
Paste the following code into the ColumnClick event for the ListView:
' Determine if the clicked column is already the column that is 
' being sorted.
If (e.Column = lvwColumnSorter.SortColumn) Then
    ' Reverse the current sort direction for this column.
    If (lvwColumnSorter.Order = SortOrder.Ascending) Then
        lvwColumnSorter.Order = SortOrder.Descending
    Else
        lvwColumnSorter.Order = SortOrder.Ascending
    End If
Else
    ' Set the column number that is to be sorted; default to ascending.
    lvwColumnSorter.SortColumn = e.Column
    lvwColumnSorter.Order = SortOrder.Ascending
End If

' Perform the sort with these new sort options.
Me.ListView1.Sort()


-4 Class-
Imports System.Collections
Imports System.Windows.Forms

Public Class ListViewColumnSorter
    Implements System.Collections.IComparer

    Private ColumnToSort As Integer
    Private OrderOfSort As SortOrder
    Private ObjectCompare As CaseInsensitiveComparer

    Public Sub New()
        ' Initialize the column to '0'.
        ColumnToSort = 0

        ' Initialize the sort order to 'none'.
        OrderOfSort = SortOrder.None

        ' Initialize the CaseInsensitiveComparer object.
        ObjectCompare = New CaseInsensitiveComparer()
    End Sub

    Public Function Compare(ByVal x As Object, ByVal y As Object) As Integer Implements IComparer.Compare
        Dim compareResult As Integer
        Dim listviewX As ListViewItem
        Dim listviewY As ListViewItem

        ' Cast the objects to be compared to ListViewItem objects.
        listviewX = CType(x, ListViewItem)
        listviewY = CType(y, ListViewItem)

        ' Compare the two items.
        compareResult = ObjectCompare.Compare(listviewX.SubItems(ColumnToSort).Text, listviewY.SubItems(ColumnToSort).Text)

        ' Calculate the correct return value based on the object 
        ' comparison.
        If (OrderOfSort = SortOrder.Ascending) Then
            ' Ascending sort is selected, return typical result of 
            ' compare operation.
            Return compareResult
        ElseIf (OrderOfSort = SortOrder.Descending) Then
            ' Descending sort is selected, return negative result of 
            ' compare operation.
            Return (-compareResult)
        Else
            ' Return '0' to indicate that they are equal.
            Return 0
        End If
    End Function

    Public Property SortColumn() As Integer
        Set(ByVal Value As Integer)
            ColumnToSort = Value
        End Set

        Get
            Return ColumnToSort
        End Get
    End Property

    Public Property Order() As SortOrder
        Set(ByVal Value As SortOrder)
            OrderOfSort = Value
        End Set

        Get
            Return OrderOfSort
        End Get
    End Property
End Class


prosoxh oyte ayth h CLASS sortarei date column h monh lysh einai sto SQL STATEMENT :
na kanoyme convert to date as 2009/03/25
convert(varchar(20),CUSTOMER_ORDER_DETAILS.DATEREC,111)

opote ola einai ok!