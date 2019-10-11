

//read file
var fl = File.ReadAllLines(file);

//turn string[] to IEnumerable (so can appear to datagridview)
dg.DataSource = fl.Select(x => new { value = x }).ToList();

//group by, the string[]
var dt_recs = fl.GroupBy(row => row).ToList();

lbl_file_unique.Text = "unique lines : " + dt_recs.Count.ToString();