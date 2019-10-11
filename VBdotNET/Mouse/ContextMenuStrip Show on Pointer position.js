    Private Sub lstv_MouseUp(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles lstv.MouseUp
        If e.Button = Windows.Forms.MouseButtons.Right Then
            ContextMenuStrip1.Show(lstv, New Point(e.X, e.Y))
        End If
    End Sub



ama to control den exei e.X e.Y then by API OR
**Windows.Forms.Cursor.Position**


    Public Declare Function GetCursorPos Lib "user32.dll" _
                    (ByRef lpPoint As Point) As Boolean




            Dim currMousePosition As Point

            GetCursorPos(currMousePosition)

            ScheduleListContext.Show(currMousePosition)