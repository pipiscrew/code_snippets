                //get the selected tables *only parent nodes*
                foreach (TreeNode tNode in tr.Nodes)
                {
                    if (tNode.Checked)
                    {
                        tbls.Add(tNode.Text);
                    }
                }
                

                //get the selected child
                foreach (TreeNode tNode in tr.Nodes[tblName].Nodes)
                {
                    if (tNode.Checked)
                        if (col1 == "")
                            col1 = tNode.Text;
                        else
                        {
                            col2 = tNode.Text;
                            break;
                        }
                }
                
//warning when add to treeview we must specify the treenode key so we can enumerate the child
//@ main
                    baseNode = new TreeNode(dR["tbl_name"].ToString(), 0, 0);
                    baseNode.Name = dR["tbl_name"].ToString(); //set the treenode key!