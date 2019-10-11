
private void button1_Click(object sender, EventArgs e)
{
    string fpath = "test.txt";
    DataTable dt = ImportDelimitedFile(fpath, "|", true);
    string k = "";

	//apply linq to datatable, get unique dates!
    var resolve = from r in dt.AsEnumerable()
                  group r by new { date = r.Field<string>("date") } into fieldb_grp //when CSV doesnt contain headers use no3
                  select new
                  {
                      date = fieldb_grp.Key.date
                  };

    foreach (var item in resolve)
    {
        k += item.date.Insert(4, "-").Insert(7, "-") + "*";
    }

    textBox1.Text = k;
}

public DataTable ImportDelimitedFile(string filename, string delimiter, bool first_is_column_names)
{
    DataTable dt = new DataTable();


    using (StreamReader file = new StreamReader(filename))
    {
        //read the first line
        string line = file.ReadLine();

        //split the first line to create columns to datatable!
        string[] columns = line.Split(Convert.ToChar(delimiter));// Regex.Split(line, "|");

        for (int i = 0; i < columns.Count(); i++)
        {
            if (first_is_column_names)
                dt.Columns.Add(columns[i].Replace("\"", ""));
            else
                dt.Columns.Add("no" + i.ToString());
        }

        if (!first_is_column_names)
        {
            //rewind reader to start!
            file.DiscardBufferedData();
            file.BaseStream.Seek(0, SeekOrigin.Begin);
            file.BaseStream.Position = 0;
        }

        while ((line = file.ReadLine()) != null)
        {
            if (line.Trim().Length > 0)
            {
                line = line.Replace("\"", "");
                string[] rows = line.Split(Convert.ToChar(delimiter));//Regex.Split(line, delimiter);
                dt.Rows.Add(rows);
               
            }
        }


    }
    
    return dt;
}

//ex
number|product name|size|date|code|price
109|Benetton men L|60|20160824|8d9323|5000
109|Benetton men L|59|20160922|8d9323|5000
109|Benetton men L|82|20160921|892d11|5000
109|Benetton men L|18|20160924|8d9323|5000
109|Benetton men L|24|20160924|8d9323|5000
109|Benetton men L|75|20160923|8d9323|5000
109|Benetton men L|50|20160924|g862s2|5000
109|Benetton men L|26|20160925|19kd32|5000
109|Benetton men L|58|20160925|8d9323|5000
109|Benetton men L|11|20160930|8d9323|5000
109|Benetton men L|76|20160931|8d9323|5000