on properties, ShortcutsEnabled = false
no mouse no keyb^

//http://stackoverflow.com/questions/5113722/how-to-disable-copy-paste-and-delete-features-on-a-textbox-using-c-sharp

You have to subclass the textbox and then override the WndProc method to
intercept the windows messages before the control does.

protected override void WndProc(ref Message m)
{
   if (m.Msg == WM_PASTE || m.Msg == WM_COPY || m.Msg == WM_CUT)
   {
      // ignore input if it was from a keyboard shortcut
      // or a Menu command
   }
   else
   {
      // handle the windows message normally
      base.WndProc(ref m);
   }
}