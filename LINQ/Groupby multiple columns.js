//https://stackoverflow.com/a/9177494
.GroupBy(x => new { x.Column1, x.Column2 })

//example 
var results = listView1.Items.Cast<ListViewItem>().GroupBy(p => new { col = p.Text , col2 = p.SubItems[1]});

//simple
var results = lstv2.Items.Cast<ListViewItem>().GroupBy(p => p.Text);