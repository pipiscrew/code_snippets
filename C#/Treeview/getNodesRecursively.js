List<string> ids;
        private void toolStripDelete_Click(object sender, EventArgs e)
        {
            ids = new List<string>();

            getNodesRecursively(TR.SelectedNode);

            string delIDs = "0";

            if (ids.Count > 0)
                for (int i = 0; i < ids.Count(); i++)
                    delIDs += "," + ids[i];

            MessageBox.Show(ids.Count().ToString());
        }
        

        private void getNodesRecursively(TreeNode treeNode)
        {
            foreach (TreeNode node in treeNode.Nodes)
            {
                ids.Add(node.Name);
                if (node.Nodes.Count > 0)
                    getNodesRecursively(node);
            }
        }