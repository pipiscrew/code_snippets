        private void check_uncheck_all(bool val)
        {
            TreeModel x = (TreeModel)TR.Model;
            foreach (Node item in x.Nodes)
            {
                treeItem y = (treeItem)item;
                y.IsChecked = val;
                y.nodeCheck = val;


                foreach (var item2 in item.Nodes)
                    (item2 as treeItem).nodeCheck = val;

            }

            TR.Refresh();
        }