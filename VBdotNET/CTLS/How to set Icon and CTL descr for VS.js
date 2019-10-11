'C#
[ToolboxBitmap(typeof(btnOffice), "btnOffice2007.btnOffice.bmp"), ToolboxItem(true)]
    public class btnOffice : System.Windows.Forms.Button
    {

        private Color _BorderColor = Color.FromArgb(101, 147, 207);
        private bool _BorderShowOnFocus = false;
        
        

'VB
<ToolboxBitmap(GetType(btnOffice), "btnOffice2007.btnOffice.bmp"), ToolboxItem(True)> _
Public Class MyCommandButtonNET
    Inherits Button
    ' Events


btnOffice2007 einai to PRJ !

basika sthn VB epai3e kai etsi :
<Description("Custom button")> _
<ToolboxItem(True)> _
<ToolboxBitmap("btnOffice.bmp")> _
Public Class btnOffice










'http://msdn.microsoft.com/en-us/library/bb165910.aspx

' Set the display name and custom bitmap to use for this item.
' The build action for the bitmap must be "Embedded Resource".
<DisplayName("ToolboxMember 1 VB")> _
<Description("Custom toolbox item from package ItemConfiguration.")> _
<ToolboxItem(True)> _
<ToolboxBitmap(GetType(Control1), "Control1.bmp")> _
Public Class Control1

    Public Sub New()

        InitializeComponent()

        Button1.Text = Me.Name + " Button"
    End Sub

    Private Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) _
        Handles Button1.Click

        MessageBox.Show("Hello world from " & Me.ToString())
    End Sub
End Class


'prosoxh to bmp file apla to exoyme ri3ei sto PRJ , build action = Embedded Resource!
'BMP 16x16 den xreaizetai kait allo!