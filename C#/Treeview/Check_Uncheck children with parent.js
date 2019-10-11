        private void tr_AfterCheck(object sender, TreeViewEventArgs e)
        {
            if (e.Node.Parent == null)
            {
                foreach (TreeNode tc in e.Node.Nodes)
                {
                    tc.Checked = e.Node.Checked;
                }
            }
        }