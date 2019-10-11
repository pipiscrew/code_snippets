MessageBox.Show("Error, pr", General.apTitle,MessageBoxButtons.OK,MessageBoxIcon.Exclamation);


if (MessageBox.Show(lstv.SelectedItems.Count + " file(s) will be deleted\n\nAre you sure??",
 General.apTitle, MessageBoxButtons.OKCancel) == DialogResult.Cancel)
{
 return;
}