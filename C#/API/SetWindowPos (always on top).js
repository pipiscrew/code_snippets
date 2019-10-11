//hWndInsertAfter
static readonly IntPtr HWND_TOPMOST = new IntPtr(-1);
static readonly IntPtr HWND_NOTOPMOST = new IntPtr(-2);
static readonly IntPtr HWND_TOP = new IntPtr(0);
static readonly IntPtr HWND_BOTTOM = new IntPtr(1);

/// <summary>
/// SetWindowPos Flags
/// </summary>
public static class SWP
{
   public static readonly int
   NOSIZE = 0x0001,
   NOMOVE = 0x0002,
   NOZORDER = 0x0004,
   NOREDRAW = 0x0008,
   NOACTIVATE = 0x0010,
   DRAWFRAME = 0x0020,
   FRAMECHANGED = 0x0020,
   SHOWWINDOW = 0x0040,
   HIDEWINDOW = 0x0080,
   NOCOPYBITS = 0x0100,
   NOOWNERZORDER = 0x0200,
   NOREPOSITION = 0x0200,
   NOSENDCHANGING = 0x0400,
   DEFERERASE = 0x2000,
   ASYNCWINDOWPOS = 0x4000;
}

[DllImport("user32.dll")]
[return: MarshalAs(UnmanagedType.Bool)]
static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, SetWindowPosFlags uFlags);
 

example :
SetWindowPos(base.Handle, HWND_TOPMOST, 0, 0, 0, 0, 3);
