int recs = DG.Rows.Cast<DataGridViewRow>()
.Count(row => row.Cells["fieldA"] != null && row.Cells["fieldA"].Value.ToString() == "PipisCrew");

//OR
var t = (from DataGridViewRow row in dg_argos_unique.Rows
         where row.Cells["Line"] != null && row.Cells["Line"].Value.ToString() == "goal" && row.Cells["Number"].Value.ToString() != "delme"
         select row.Cells["Number"].Value.ToString()).ToList();