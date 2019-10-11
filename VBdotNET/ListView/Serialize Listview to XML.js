'source
'http://www.knowdotnet.com/articles/serializationoflistviewtoxml.html
   Public Sub SaveObjectProperties()
      Dim ds As New DataSet
      Dim oCG As New CGrid
      Dim i As Integer

      Try
         ' create a datatable in a dataset.  the dataset will
         ' automatically create the xml
         Dim dt As DataTable = ds.Tables.Add("PrintObject")

         For i = 0 To MelistviewObjects.Columns.Count - 1
            dt.Columns.Add("Col" & i.ToString, Type.GetType("System.String"))
         Next

         For i = 0 To MelistviewObjects.Items.Count - 1
            With Me.listviewObjects.Items(i)
               Dim o() As Object = {.SubItems(0).Text, _
                                  .SubItems(1).Text, _
                                  .SubItems(2).Text, _
                                  .SubItems(3).Text, _
                                  .SubItems(4).Text, _
                                  .SubItems(5).Text, _
                                  .SubItems(6).Text, _
                                  .SubItems(7).Text, _
                                  .SubItems(8).Text, _
                                  .SubItems(9).Text, _
                                  .SubItems(10).Text, _
                                  .SubItems(11).Text, _
                                  .SubItems(12).Text, _
                                  .SubItems(13).Text, _
                                  .SubItems(14).Text, _
                                  .SubItems(15).Text, _
                                  .SubItems(16).Text, _
                                  .SubItems(17).Text, _
                                  .SubItems(18).Text, _
                                  .SubItems(19).Text, _
                                  .SubItems(20).Text, _
                                  .SubItems(21).Text}
               AddRowToTable(dt, o)
            End With
         Next i
         ds.WriteXml(Me.textSavePath.Text)
      Catch ex As System.Exception
          MsgBox(ex.ToString)
     End Try
   End Sub

This method simply adds an object array to the passed DataTable.  Note that we can build a DataTable in memory, that is not linked to a database.  That is one of the neat things about ADO.NET.

   Public Function AddRowToTable(ByRef dt As DataTable, _
      ByVal ParamArray DRows() As Object) As Boolean
      Dim i As Short
      Try
         Dim newRow As DataRow = dt.NewRow
         For i = 0 To UBound(DRows)
            ' add a row to the passed dtList
            newRow(i) = DRows(i)
         Next
         dt.Rows.Add(newRow)
         Return True
      Catch ex As System.Exception
         MsgBox(ex.ToString)
         Return False
      End Try
   End Function

This method reloads the ListView from the previously created XML file.  First, I create a new DataSet object and use it to read the XML file.  As you can see, ADO.NET and XML work seamlessly.  Next, I get a DataTable object set to the "PrintObject" DataTable saved as XML.  Finally, I loop through each row and column of the DataTable to fill the ListView.  ADO.NET, XML, and VB.NET make formerly complex tasks become a cakewalk!

   Public Sub ReloadListviewFromXML()
      Dim ds As New DataSet

      Try
         ds.ReadXml(Me.textOpenPath.Text)
         Dim dt As DataTable = ds.Tables("PrintObject")
         Dim i As Integer
         Dim j As Integer
         Me.listviewObjects.Items.Clear()

         For i = 0 To dt.Rows.Count - 1
            Dim dr As DataRow = dt.Rows(i)
            With Me.listviewObjects
               .Items.Add(dr(0))
               For j = 1 To dt.Columns.Count - 1
                  .Items(i).SubItems.Add(dr(j))
               Next
            End With
         Next
      Catch ex As System.Exception
         StructuredErrorHandler(ex)
      End Try
   End Sub