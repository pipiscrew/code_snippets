//http://www.codeproject.com/Articles/22012/Explorer-Shell-Context-Menu
//http://www.pipiscrew.com/2016/11/c-add-explorer-shell-context-menu-into-the-application/

private void lstv_MouseClick(object sender, MouseEventArgs e)
{
    if (e.Button == System.Windows.Forms.MouseButtons.Right)
    {
    	//can use DirectoryInfo for files&dirs. Otherwise use FileInfo.
        DirectoryInfo[] arrDI;
        int c = 0;

		//make size of the array equal with the select items
		arrDI = new DirectoryInfo[lstv.SelectedItems.Count];
	   
		foreach (ListViewItem item in lstv.SelectedItems)
		{
			//restrict only #dir&files# by lstv image index (in my app I have also 3,4)
			if (item.ImageIndex != 0 && item.ImageIndex !=1)
				continue;
			else
			{
				arrDI[c] = new DirectoryInfo(last_folder + "\\" + item.Text);
				c += 1;
			}
		}

        //when array is filled
        if (c == 0)
            return;

		//resize array
        Array.Resize(ref arrDI, c);

        ShellContextMenu ctxMnu = new ShellContextMenu();

        ctxMnu.ShowContextMenu(arrDI, this.PointToScreen(new Point(e.X, e.Y)));
    }
}