//http://stackoverflow.com/questions/12895092/how-to-disable-and-hide-a-tab-page

  tabPage1.Enabled = false; // this disables the controls on it
  tabPage1.Visible = false; // this hides the controls on it.
        
        

// Hide the tab page
tabControl.TabPages.Remove(tabPage1);
// Show the tab page (insert it to the correct position)
tabControl.TabPages.Insert(0, tabPage1)