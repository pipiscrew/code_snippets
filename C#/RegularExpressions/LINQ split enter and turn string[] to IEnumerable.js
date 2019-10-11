string g = General.GetFromClipboard();

string[] lines = Regex.Split(g, "\r\n");
dg.DataSource = lines.Select(x => new { value = x }).ToList();