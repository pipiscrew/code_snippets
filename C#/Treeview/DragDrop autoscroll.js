//http://stackoverflow.com/questions/6034942/treeview-autoscroll-while-dragging

using System;
using System.Windows.Forms;
using System.Runtime.InteropServices;

namespace SCO
{
    public static class NativeMethods
    {
        [DllImport("user32.dll", CharSet = CharSet.Auto)]
        internal static extern IntPtr SendMessage(IntPtr hWnd, UInt32 Msg, IntPtr wParam, IntPtr lParam);

        public static void Scroll(this Control control)
        {
            var pt = control.PointToClient(Cursor.Position);

            if ((pt.Y + 20) > control.Height)
            {
                // scroll down
                SendMessage(control.Handle, 277, (IntPtr)1, (IntPtr)0);
            }
            else if (pt.Y < 20)
            {
                // scroll up
                SendMessage(control.Handle, 277, (IntPtr)0, (IntPtr)0);
            }
        }
    }
}


//at form
        private void TR_DragOver(object sender, DragEventArgs e)
        {
            NativeMethods.Scroll(TR);
        }