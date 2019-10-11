//http://visualstudiogallery.msdn.microsoft.com/1e5295a5-d7bd-4789-bced-361c608a3a7e?SRC=Home

public static class TextBoxWatermarkExtensionMethod
{
    // Fields
    private const uint ECM_FIRST = 0x1500;
    private const uint EM_SETCUEBANNER = 0x1501;

    // Methods
    [DllImport("user32.dll", CharSet=CharSet.Auto)]
    private static extern IntPtr SendMessage(IntPtr hWnd, uint Msg, uint wParam, [MarshalAs(UnmanagedType.LPWStr)] string lParam);
    public static void SetWatermark(this TextBox textBox, string watermarkText)
    {
        SendMessage(textBox.Handle, 0x1501, 0, watermarkText);
    }
}

 
