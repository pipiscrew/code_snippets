//http://www.codeproject.com/Articles/7827/Customizing-WinForm-s-System-Menu

[DllImport("user32.dll")]
private static extern IntPtr GetSystemMenu(IntPtr hWnd, bool bRevert);
[DllImport("user32.dll")]
private static extern bool InsertMenu (IntPtr hMenu, 
    Int32 wPosition, Int32 wFlags, Int32 wIDNewItem, 
    string lpNewItem);
    
//
public const Int32 WM_SYSCOMMAND = 0x112;
public const Int32 MF_SEPARATOR = 0x800;
public const Int32 MF_BYPOSITION = 0x400;
public const Int32 MF_STRING = 0x0;
//custom options
public const Int32 IDM_EDITFUNDS  = 1000;
public const Int32 IDM_ANALYZE = 1001;

//@ Form_Load
	IntPtr sysMenuHandle = GetSystemMenu(this.Handle, false);
	//It would be better to find the position at run time of the 'Close' item, but...
	InsertMenu(sysMenuHandle, 5, MF_BYPOSITION |MF_SEPARATOR, 0, string.Empty);
	InsertMenu(sysMenuHandle, 6, MF_BYPOSITION , IDM_EDITFUNDS, "Edit Funds");
	InsertMenu(sysMenuHandle, 7, MF_BYPOSITION , IDM_ANALYZE, "Analyze");
	
//catch click
protected override void WndProc(ref Message m)
{
    if(m.Msg == WM_SYSCOMMAND)
    {
        switch(m.WParam.ToInt32())
        {
            case IDM_EDITFUNDS : 
                MessageBox.Show("Clicked 'EditFunds'");
                return;
            case IDM_ANALYZE :
                MessageBox.Show("Clicked 'Analyze'");
                return;
            default:
                break;
        } 
    }
    base.WndProc(ref m);
}