'just to know when run this :
'lstv.Columns(0).Width = -1
'lstv resize the col until the most bigger text in col0




    Private Sub Form1_Resize(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Resize
        If lstv.Columns.Count > 0 Then
            AutoResizeLSTVcols(lstv)
            AutoResizeLSTVcols(lstv2)
            AutoResizeLSTVcols(lstv3)
            AutoResizeLSTVcols(lstv4)
            AutoResizeLSTVcols(lstv5)
        End If
    End Sub

    Private Sub AutoResizeLSTVcols(ByVal ctl As ListView)
        'Get the current column widths
        Dim widths As New ArrayList()
        For Each ch As ColumnHeader In ctl.Columns
            widths.Add(ch.Width)
        Next

        'Get the total width of all the columns
        Dim total_width As Integer = 0
        For i As Integer = 0 To widths.Count - 1
            total_width += CInt(widths(i))
        Next

        'calculate percentages and resize the columns.
        For i As Integer = 0 To widths.Count - 1
            Dim c_width As Double = CInt(widths(i))
            Dim pect As Double = (c_width / total_width)

            'get the new width, leave out 25 pixels for scrollbar
            Dim n_width As Double = (ctl.Width - 25) * pect
            n_width = Math.Round(n_width, 0)

            'MessageBox.Show(c_width & " - " & pect & " - " & n_width)

            ctl.Columns(i).Width = CInt(Math.Truncate(n_width))
        Next
    End Sub
    
    
  
   'warning if we have TABCONTROL must do this^ and not on resize event @:
    Private Sub TabPage1_Resize(ByVal sender As Object, ByVal e As System.EventArgs) Handles TabPage1.Resize, TabPage2.Resize, TabPage3.Resize, TabPage4.Resize, TabPage5.Resize, TabPage6.Resize, TabPage7.Resize, TabPage8.Resize, TabPage9.Resize, TabPage10.Resize, TabPage11.Resize
        If lstv.Columns.Count > 0 Then
            AutoResizeLSTVcols(lstv)
            AutoResizeLSTVcols(lstv2)
            AutoResizeLSTVcols(lstv3)
            AutoResizeLSTVcols(lstv4)
            AutoResizeLSTVcols(lstv5)
        End If
    End Sub