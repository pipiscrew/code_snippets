//sample1
var t = (from DataGridViewRow row in dg_argos_unique.Rows
         where row.Cells["Line"] != null && row.Cells["Line"].Value.ToString() == "goal" && row.Cells["Number"].Value.ToString() != "delme"
         select row.Cells["Number"].Value.ToString()).ToList();

var g = (from DataGridViewRow row in dg_argos_dbaseY.Rows
         select row.Cells["Number"].Value.ToString()).ToList();

IEnumerable<string> difference = g.Except(t);

if (difference.Any())
{
    MessageBox.Show(string.Join(",", difference.ToArray()), Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);
}

//sample2
	var t = (from DataGridViewRow row in dg_left.Rows
	         select row.Cells[0].Value.ToString()).ToList();
	
	var g = (from DataGridViewRow row in dg_right.Rows
	         select row.Cells[0].Value.ToString()).ToList();
	
	var difference = t.Except(g).ToList();
	
	if (difference.Any())
	{
	    dg_db_diff.DataSource = difference.Select(x => new { Value = x }).ToList();
	
	    lbl_right_diff.Text = "-->\r\nLines not exist to right : " + dg_db_diff.Rows.Count.ToString();
	}
	else
	{
	    dg_db_diff.DataSource = null;
	    lbl_right_diff.Text = "Right not missing someting from Left";
	}
	
	
	///
	var difference2 = g.Except(t).ToList();
	
	
	if (difference2.Any())
	{
	    dg_invoices_diff.DataSource = difference2.Select(x => new { Value = x }).ToList();
	    lbl_left_diff.Text = "<--\r\nLines not exist to left : " + dg_invoices_diff.Rows.Count.ToString();
	}
	else
	{
	    dg_invoices_diff.DataSource = null;
	    lbl_left_diff.Text = "Left not missing someting from Right";
	}