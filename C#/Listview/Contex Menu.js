contextMDB.Show(System.Windows.Forms.Cursor.Position);

-OR-


        private void lstv_MouseClick(object sender, MouseEventArgs e)
        {
            if ((lstv.SelectedItems.Count != 0) && (e.Button == MouseButtons.Right))
            {
                //Create a new point relative to form and listview locations + offset
                Point mousePoint = new Point();
                mousePoint.X = this.Location.X + lstv.Location.X + e.Location.X; //+25;
                mousePoint.Y = this.Location.Y + lstv.Location.Y + e.Location.Y +35;

                //Show context menu 
                LSTVcontext.Show(mousePoint);
                //Change text of current menu item to relevant path
                LSTVcontext.Items[0].Text = "Test";

            }
        }
        
when exist on splitcontainer and is from right side
                mousePoint.X = this.Location.X + lstv.Location.X + e.Location.X + splitContainer1.Panel2.Left;// +30;
                mousePoint.Y = this.Location.Y + lstv.Location.Y + e.Location.Y + 75;