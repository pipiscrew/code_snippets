//faster method compare to other 2 below 
////////////////////////////////////////////

//get a list of from DG2 cols
var list = (from row in dg_right.Rows.Cast<DataGridViewRow>()
            select new
            {
                dest_col_name = row.Cells[dest_col_name].Value.ToString(),
                dest_copy_col_name = row.Cells[dest_copy_col_name].Value.ToString()
            }).ToList();


//loop through DG1 and query for matching value, if exists update DG1 cell
foreach (DataGridViewRow item in dg_left.Rows)
{
    src_val = item.Cells[src_col_name].Value.ToString();
    var hit = list.FirstOrDefault(x => x.dest_col_name == src_val);

    if (hit != null)
    {
        item.Cells["vlook"].Value = hit.dest_copy_col_name;
        match_count += 1;
    }
    else
        missed_count += 1;
}
//////////////////////////////////////


//sample 2
    foreach (DataGridViewRow item in dg_left.Rows)
    {
        src_val = item.Cells[src_col_name].Value.ToString();

        var hit = (from DataGridViewRow row in dg_right.Rows
                   where row.Cells[dest_col_name].Value.Equals(src_val)
                   select row.Cells[dest_copy_col_name].Value.ToString()).FirstOrDefault();

        if (hit != null)
        {
            item.Cells["vlook"].Value = hit.ToString();
            match_count += 1;
        }
        else
            missed_count += 1;
    }

//sample 3
    foreach (DataGridViewRow item in dg_left.Rows)
    {
        src_val = item.Cells[src_col_name].Value.ToString();

        //http://stackoverflow.com/a/36621073
        hit = dg_right.Rows.Cast<DataGridViewRow>().FirstOrDefault(row => row.Cells[dest_col_name].Value.Equals(src_val));

        if (hit != null)
        {
            item.Cells["vlook"].Value = hit.Cells[dest_copy_col_name].Value.ToString();
            match_count += 1;
        }
        else
            missed_count += 1;

    }