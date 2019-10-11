//http://blogs.circlesource.com/2009/01/20/dynamic-menu-creation/

            int i;
            ToolStripMenuItem childMenuItem;
            for (i = 0; i < General.ConnItems.Count; i++)
            {
                if ((General.DatabaseType)General.ConnItems[i].ConnectionType == General.DatabaseType.OleDB)
                {
                    childMenuItem = new ToolStripMenuItem();
                    childMenuItem.Text = General.ConnItems[i].ConnectionName;
                    childMenuItem.Tag = i;
                    childMenuItem.Click += new EventHandler(contextMDB_Click);

                    contextMDB.Items.Add(childMenuItem);
                }
                else
                {

                    childMenuItem = new ToolStripMenuItem();
                    childMenuItem.Text = General.ConnItems[i].ConnectionName;
                    childMenuItem.Tag = i;
                    childMenuItem.Click += new EventHandler(contextSQL_Click);

                    contextSQL.Items.Add(childMenuItem);
                }

            }
            
        private void contextMDB_Click(object sender, EventArgs e)
        {
            ToolStripMenuItem sourceMenuItem = (ToolStripMenuItem)sender;

            int entry;
            entry = (int)sourceMenuItem.Tag;

            updIndex = entry;

            txtMDBconnName.Text = General.ConnItems[entry].ConnectionName;
            txtMDBFilepath.Text = General.ConnItems[entry].Property1;
            txtMDBpassword.Text = General.ConnItems[entry].Property2;
            chkMDBReadOnly.Checked = bool.Parse(General.ConnItems[entry].Property3);

            btnSaveMDB.Text = "  update and use this datasource";
        }
        
//OR
private void ChildMenu_Click(object sender, EventArgs e)
{
ToolStripMenuItem sourceMenuItem = (ToolStripMenuItem)sender;
string selectedMenu = string.Empty;
// Selected menu item
switch (sourceMenuItem.Name)
{
case “New”:
// Required statements here.
selectedMenu = sourceMenuItem.Text;
break;
case “Open”:
// Required statements here.
selectedMenu = sourceMenuItem.Text;
break;
}
if (!string.IsNullOrEmpty(selectedMenu))
{
MessageBox.Show(string.Concat(
selectedMenu,
” feature is under development “));
}
}