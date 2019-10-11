//http://www.visualwebgui.com/Developers/Forums/tabid/364/forumid/-1/threadid/20747/scope/posts/Default.aspx

private void FindNodeInHierarchy(TreeNodeCollection nodes, string strSearchValue)
        {            
            for (int iCount = 0; iCount < nodes.Count; iCount++)
            {
                if (nodes[iCount].Text.ToUpper().Contains(strSearchValue.ToUpper()))
                {                                             
                    trvSourceCode.SelectedNode = nodes[iCount];
                    trvSourceCode.Select();
                    m_bNodeFound = true;
                    return;
                }
                else
                {
                    m_bNodeFound = false;
                }
                //expand the nodes
                nodes[iCount].Expand();
                //Recursively search the text in the child nodes
                FindNodeInHierarchy(nodes[iCount].Nodes, strSearchValue);
                if (m_bNodeFound)
                {
                    return;
                }
                //collapses the nodes
                nodes[iCount].Collapse();
                //return;
            }            
        }
 