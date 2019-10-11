Enum ErrorLogMessageType
ExceptionMsg = 1
StackTrace = 2
ConnectionString = 3
SQLCommand = 4
OtherMessage = 5
End Enum



Public Sub AddVar(ByVal str$, ByVal test As ErrorLogMessageType)
ReDim Preserve HeaderRequestStartVAR(UBound(HeaderRequestStartVAR) + 1)
'HeaderRequestStartVAR(UBound(HeaderRequestStartVAR)) = str()
End Sub



'get the name of enum items
        For Each suit As String In [Enum].GetNames(GetType(Telerik.Charting.ChartSeriesType))
            ComboBox1.Items.Add(suit)
        Next
        
'get the integer value of items from a combo
        Dim veggie As Telerik.Charting.ChartSeriesType = DirectCast([Enum].Parse(GetType(Telerik.Charting.ChartSeriesType), ComboBox1.SelectedItem.ToString()), Telerik.Charting.ChartSeriesType)
        Dim veggieValue As Integer = CInt(veggie)

        RadChart1.DefaultType = veggie