'http://www.codeproject.com/KB/combobox/ColorComboBox.aspx
'apo to reply 'General	My version of this. Uses Dropdownlist style and much less code'

'how to use
'for normal color (VS colors)

    Private Function GetColorFromCombo(ByVal ctlVal$) As String
        Return (ctlVal.Replace("Color [", "").Replace("]", "").Trim())
    End Function
    
    'call to function
	GetColorFromCombo(chkCustomBIGWizardPicBackColor.SelectedColor.ToString)
	

'class
Imports System.Drawing
Imports System.Windows.Forms

Public Class ColorComboBox
    Inherits System.Windows.Forms.ComboBox
    Private blackBrush As SolidBrush
    Private whiteBrush As New SolidBrush(Color.White)

    Public Property SelectedColor() As Color
        Get
            If SelectedIndex = -1 Then
                Return Color.Black
            End If

            Return CType(Me.Items(Me.SelectedIndex), ColorInfo).color
        End Get
        Set(ByVal value As Color)
            Dim idx As Integer = 0
            For Each info As ColorInfo In Me.Items
                If value = info.color Then
                    Me.SelectedIndex = idx
                End If
                idx += 1
            Next
        End Set
    End Property

    Public Sub New()
        Me.DropDownStyle = ComboBoxStyle.DropDownList
        Me.Font = New System.Drawing.Font("Segoe UI", 8.25F)
        blackBrush = New SolidBrush(Color.Black)

        'delphi custom colors
        Me.Items.Add(New ColorInfo("clBlack", Color.Black))
        Me.BackColor = Color.Black
        Me.Items.Add(New ColorInfo("clMaroon", Color.Maroon))
        Me.BackColor = Color.Maroon
        Me.Items.Add(New ColorInfo("clGreen", Color.Green))
        Me.BackColor = Color.Green
        Me.Items.Add(New ColorInfo("clOlive", Color.Olive))
        Me.BackColor = Color.Olive
        Me.Items.Add(New ColorInfo("clNavy", Color.Navy))
        Me.BackColor = Color.Navy
        Me.Items.Add(New ColorInfo("clPurple", Color.Purple))
        Me.BackColor = Color.Purple
        Me.Items.Add(New ColorInfo("clTeal", Color.Teal))
        Me.BackColor = Color.Teal
        Me.Items.Add(New ColorInfo("clGray", Color.Gray))
        Me.BackColor = Color.Gray
        Me.Items.Add(New ColorInfo("clSilver", Color.Silver))
        Me.BackColor = Color.Silver
        Me.Items.Add(New ColorInfo("clRed", Color.Red))
        Me.BackColor = Color.Red
        Me.Items.Add(New ColorInfo("clLime", Color.Lime))
        Me.BackColor = Color.Lime
        Me.Items.Add(New ColorInfo("clYellow", Color.Yellow))
        Me.BackColor = Color.Yellow
        Me.Items.Add(New ColorInfo("clBlue", Color.Blue))
        Me.BackColor = Color.Blue
        Me.Items.Add(New ColorInfo("clFuchsia", Color.Fuchsia))
        Me.BackColor = Color.Fuchsia
        Me.Items.Add(New ColorInfo("clAqua", Color.Aqua))
        Me.BackColor = Color.Aqua
        Me.Items.Add(New ColorInfo("clWhite", Color.White))
        Me.BackColor = Color.White
        'delphi custom colors
		
		
		'*****otherwise unrem this for windows default colors!
		
        'Dim b As New System.Drawing.KnownColor()
        'Dim a As System.Array = System.[Enum].GetValues(b.[GetType]())
        'Dim c As System.Collections.IEnumerator = a.GetEnumerator()
        'Dim d As Color
        'While c.MoveNext()
        '    d = Color.FromKnownColor(CType(c.Current, System.Drawing.KnownColor))

        '    If d.A = 0 Then
        '        Continue While
        '    End If
        '    Me.Items.Add(New ColorInfo(d.Name, d))
        '    Me.BackColor = d
        'End While
        Me.DrawMode = DrawMode.OwnerDrawVariable
        AddHandler Me.DrawItem, New DrawItemEventHandler(AddressOf OnDrawItem)
    End Sub

    Private Structure ColorInfo
        Public name As String
        Public color As Color

        Public Sub New(ByVal n As String, ByVal c As Color)
            name = n
            color = c
        End Sub
    End Structure
    Private Overloads Sub OnDrawItem(ByVal sender As Object, ByVal e As System.Windows.Forms.DrawItemEventArgs)
        If e.Index = -1 Then
            Return
        End If

        Dim grfx As Graphics = e.Graphics
        Dim cInfo As ColorInfo = CType(Items(e.Index), ColorInfo)
        Dim brushColor As Color = cInfo.color
        grfx.FillRectangle(whiteBrush, e.Bounds)
        Dim brush As New SolidBrush(brushColor)
        Dim rc As Rectangle = e.Bounds
        rc.Width = rc.Height
        grfx.FillRectangle(brush, rc)
        rc = e.Bounds
        rc.X += rc.Height
        rc.Width -= rc.Height
        grfx.DrawString(cInfo.name, e.Font, blackBrush, rc)
    End Sub

    Private Overloads Sub OnSelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim cInfo As ColorInfo = CType(Items(SelectedIndex), ColorInfo)
        Me.BackColor = cInfo.color
    End Sub

    Private Overloads Sub OnDropDown(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim cInfo As ColorInfo = CType(Items(SelectedIndex), ColorInfo)
        Me.BackColor = cInfo.color
    End Sub
End Class
