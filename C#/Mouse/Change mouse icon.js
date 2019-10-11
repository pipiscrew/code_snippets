Cursor = System.Windows.Forms.Cursors.WaitCursor;

Cursor = System.Windows.Forms.Cursors.Default;


//if not time to appear WaitCursor
            Cursor = System.Windows.Forms.Cursors.WaitCursor;
            System.Threading.Thread.Sleep(8000);
            
//http://www.csharp411.com/the-proper-way-to-show-the-wait-cursor/
Application.UseWaitCursor = true;
Application.UseWaitCursor = false;