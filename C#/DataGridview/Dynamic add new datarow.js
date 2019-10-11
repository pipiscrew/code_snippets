private void FillXarakthr()
{
xarakthrGRID.Rows.Clear();
xarakthrGRID.Columns.Clear();

xarakthrGRID.Columns.Add("1","1");
xarakthrGRID.Columns.Add("2","2");

OleDbDataReader dR;
DataGridViewRow dRow;
dR = General.SKT.GetDATAREADER("select Κωδικός,Περιγραφή from Στοιχεία order by Κωδικός");

while (dR.Read())
{
dRow = new DataGridViewRow();
dRow.CreateCells(xarakthrGRID); //get from datagrid

dRow.Cells[0].Value = new ComboItemData(dR[1].ToString(),int.Parse (dR[0].ToString()));
dRow.Cells[1].Value = "";

xarakthrGRID.Rows.Add(dRow);
}

dR.Close();
dR.Dispose();
// xarakthrGRID.DataSource = General.SKT.GetDataTable("select Περιγραφή,'' from Στοιχεία where id in(25,26,27,28,19,20,19,20,12,23) order by Κωδικός ;"); //where Τύπος ='10'

//"select Κωδικός,Περιγραφή from Στοιχεία "


xarakthrGRID.Columns[0].Width = 180;
xarakthrGRID.Columns[1].Width = 110;
}

