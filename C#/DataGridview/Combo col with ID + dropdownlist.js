private void button1_Click(object sender, EventArgs e)
{
DataGridViewComboBoxColumn tmp = new DataGridViewComboBoxColumn();
tmp.HeaderText = "Είδος Διοργάνωσης";
tmp.Width = 200;
General.ADOClass = new ADOnet("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + SK_S + ";Jet OLEDB:Database Password=5236406");
tmp.DataSource = General.ADOClass.GetDataTable("select id,Περιγραφή from [Είδη Διοργανώσεων] order by Περιγραφή");
tmp.DisplayMember = "Περιγραφή";
tmp.ValueMember = "id";
gridAtomika.Columns.Insert(2, tmp);
General.ADOClass.Close();
}

private void button2_Click(object sender, EventArgs e)
{
MessageBox.Show(gridAtomika.Rows[0].Cells[2].Value.ToString());
} 