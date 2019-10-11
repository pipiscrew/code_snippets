	TreeNode[] ll;
	ll = TR.Nodes.Find("var", true);
	
    ll[0].Expand();
    ll[0].EnsureVisible();
--> TR.SelectedNode = ll[0];

or 

treeView1.SelectedNode = treeView1.Nodes[1].Nodes[0];
  