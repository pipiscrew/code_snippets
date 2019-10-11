        private void tabEdit_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
	            Rectangle rect = this.tabEdit.GetTabRect(this.tabEdit.SelectedIndex);
	            Point pt = new Point(e.X, e.Y);
	            if (rect.Contains(pt))
	            {
	                this.contextTABS.Show(this.tabEdit, pt);
	            }
	        }
        }
        
        
        
///////////2nd        

        int tabIndexContext;
        private void tabPICS_MouseUp(object sender, MouseEventArgs e)
        {
            // check if the right mouse button was pressed
            if (e.Button == MouseButtons.Right)
            {
                // iterate through all the tab pages
                for (int i = 0; i < tabPICS.TabCount; i++)
                {
                    // get their rectangle area and check if it contains the mouse cursor
                    Rectangle r = tabPICS.GetTabRect(i);
                    if (r.Contains(e.Location))
                    {
                        tabIndexContext = i;
                        contextTAB.Show(e.Location);
                        //Console.WriteLine("TabPressed: " + i);
                    }


                }
            }
        }

        private void toolStripCloseTAB_Click(object sender, EventArgs e)
        {
            if (tabIndexContext > -1)
            {
                if (tabPICS.TabPages[tabIndexContext].Text.Contains("*"))
                {
                    string fl=GetTabPICFilePath(tabIndexContext);
                    DialogResult s= MessageBox.Show("Save\r\n\r\n" + fl + "\r\n\r\n\tand close??",General.apTitle,MessageBoxButtons.YesNoCancel);

                    if (s == System.Windows.Forms.DialogResult.Cancel)
                        return;
                    else if (s== System.Windows.Forms.DialogResult.Yes)
                    {
                        toolStripSave.PerformClick();
                    }

                }

                tabPICS.TabPages.RemoveAt(tabIndexContext);
            }
        }