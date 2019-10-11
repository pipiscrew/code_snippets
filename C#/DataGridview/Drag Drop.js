
        private void dg1_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left && dg1.CurrentRow != null)
            {
                rePositioning = false;
                dg1.DoDragDrop(dg1.CurrentRow, DragDropEffects.All);
            }
        }

        private void dg2_DragDrop(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(typeof(DataGridViewRow)))
            {

                Point cursorPosition = this.dg2.PointToClient(Cursor.Position);
                DataGridView.HitTestInfo info = dg2.HitTest(cursorPosition.X, cursorPosition.Y);

                DataGridViewRow dragItem = (DataGridViewRow)e.Data.GetData(typeof(DataGridViewRow));

                if (rePositioning)
                {
                       dg2.Rows.Insert(info.RowIndex,dragItem);
                }
                else
                {

                    
                    AddToDG2(dragItem);
                }
            }
            CountListV2lines();
        }

        private void dg2_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(typeof(DataGridViewRow)))
            {
                e.Effect = DragDropEffects.Copy;
            }
        }


//http://www.dreamincode.net/forums/topic/48140-drag-and-drop-in-datagridview/

private void dataGridView2_DragDrop(object sender, DragEventArgs e)
{
    //PARA HACER DRAG & DROP EN UN DATAGRIDVIEW
    Point cursorPosition = this.dataGridView2.PointToClient(Cursor.Position);
    //IN THE NEXT LINE DataGridView IS A CLASS, NOT A COMPONENT OR CONTROL ON THE WINFORM
    DataGridView.HitTestInfo info = dataGridView2.HitTest(cursorPosition.X, cursorPosition.Y);

    if (e.Data.GetDataPresent(typeof(System.String)))
        dataGridView2[info.ColumnIndex, info.RowIndex].Value = (System.String)e.Data.GetData(typeof(System.String));
}


