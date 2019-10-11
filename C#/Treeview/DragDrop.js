
        private void TR_ItemDrag(object sender, ItemDragEventArgs e)
        {
            TreeNode dTR = (TreeNode)e.Item;

            if (dTR.ImageIndex < 2)
                        return;
            else 
                TR.DoDragDrop(e.Item, DragDropEffects.Move);
        }

        private void TR_DragEnter(object sender, DragEventArgs e)
        {
            e.Effect = DragDropEffects.Move;
        }

        private void TR_GiveFeedback(object sender, GiveFeedbackEventArgs e)
        {
            if (e.Effect == DragDropEffects.Move)
            {
                e.UseDefaultCursors = false;

                TR.Cursor = new Cursor(System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream("SCO.dragdrop.ico"));
            }
            else
            {
                e.UseDefaultCursors = true;
            }
        }

        private void TR_DragLeave(object sender, EventArgs e)
        {
            TR.Cursor = Cursors.Default;
        }

        private void TR_DragOver(object sender, DragEventArgs e)
        {
            //NativeMethods.Scroll(TR); fix for autoscroll

            TreeView tree = (TreeView)sender;

            e.Effect = DragDropEffects.None;

            if ((e.Data.GetData(typeof(TreeNode)) != null))
            {
                Point pt = new Point(e.X, e.Y);
                pt = tree.PointToClient(pt);
                TreeNode node = tree.GetNodeAt(pt);
              
                if ((node != null))
                {
                    e.Effect = DragDropEffects.Move;
                    tree.SelectedNode = node;
                }

            }
        }

        private void TR_DragDrop(object sender, DragEventArgs e)
        {
            TR.Cursor = Cursors.Default;

            Point loc = ((TreeView)sender).PointToClient(new Point(e.X, e.Y));
            TreeNode node = (TreeNode)e.Data.GetData(typeof(TreeNode));
            TreeNode destNode = ((TreeView)sender).GetNodeAt(loc);

            if (node.Parent == null)
                return;
            else
            {
                if (node.Parent.Name == destNode.Name)
                    return;

                node.Parent.Nodes.Remove(node);
            }

            int parentID;

            //when dragged to code
            if (destNode.ImageIndex == 2)
            {
                parentID = int.Parse( destNode.Parent.Name);
                destNode.Parent.Nodes.Add(node);
            }
            else
            {
                parentID = int.Parse(destNode.Name);
                destNode.Nodes.Add(node);
                destNode.Expand();
            }

            try
            {
                General.Conne.ExecuteNonQuery("update codes set parentnode=" + parentID + " where nodeid=" + node.Name);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }
