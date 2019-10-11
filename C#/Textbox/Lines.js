string[] lines = Regex.Split(txtResult.Text, ";");
foreach (string line in lines)
{
    if (line.Length > 10)
        General.ConneSQLite.ExecuteNonQuery(line);
}