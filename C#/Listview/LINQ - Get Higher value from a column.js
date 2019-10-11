//http://stackoverflow.com/a/10641481
int width_max = lstv.Items.Cast<ListViewItem>().Max(x => int.Parse(x.SubItems[1].Text));
int height_max = lstv.Items.Cast<ListViewItem>().Max(x => int.Parse(x.SubItems[2].Text));

//https://stackoverflow.com/a/15434284/1320686
//Because ListView.Items implements IEnumerable, but does not implement
//IEnumerable<T> you have to cast it to IEnumerable<ListViewItem> first, 
//to query it using LINQ to Objects:
var results = listResx.Items.Cast<ListViewItem>()
                            .Where(x => x.Text.Contains(textboxQuery));