
var bitness = Environment.Is64BitProcess ? "x64" : "x86";
this.Text = "CefSharp.WinForms.Example - " + bitness;