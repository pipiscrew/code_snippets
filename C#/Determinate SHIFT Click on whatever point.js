//shift only
if (Control.ModifierKeys == Keys.Shift)

 //ctrl+shift
 private void toolStripExportHTML_Click(object sender, EventArgs e)
        {
            if ((Control.ModifierKeys & Keys.Shift) == Keys.Shift) 
                General.Mes("Shift Pressed");