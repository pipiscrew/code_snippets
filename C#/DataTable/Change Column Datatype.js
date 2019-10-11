//http://stackoverflow.com/questions/9028029/how-to-change-datatype-of-a-datacolumn-in-a-datatable

//You cannot change the DataType after the Datatable is filled with data. However, you can clone the Data table, change the column type and load data from previous data table to the cloned table as shown below.

DataTable dtCloned = dt.Clone();
dtCloned.Columns[0].DataType = typeof(Int32);
foreach (DataRow row in dt.Rows) 
{
    dtCloned.ImportRow(row);
}