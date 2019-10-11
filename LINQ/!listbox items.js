//http://stackoverflow.com/a/1565538

this.listBox1.Items.AddRange(new object[] {
"Carson",
"Caleb",
"Cole",
"Christian",
"Connor",
"Carter",
"Cameron"});

var filteredProjects = listBox1.Items.Cast<String>().ToList().Where(p => p.Contains("a"));
foreach (string w in filteredProjects)
{
    textBox1.Text += w + "\r\n";
}