Option Strict On
Imports System
Imports System.Windows.Forms
Imports System.Drawing

Public Class WaterMarkTextBox
    Inherits TextBox

    Private oldFont As Font = Nothing
    Private waterMarkTextEnabled As Boolean = False

#Region "Attributes"
    Private _waterMarkColor As Color = Drawing.Color.Gray

    Public Property WaterMarkColor() As Color
        Get
            Return _waterMarkColor
        End Get
        Set(ByVal value As Color)
            _waterMarkColor = value
            Me.Invalidate()
        End Set
    End Property

    Private _waterMarkText As String = "Water Mark"

    Public Property WaterMarkText() As String
        Get
            Return _waterMarkText
        End Get
        Set(ByVal value As String)
            _waterMarkText = value
            Me.Invalidate()
        End Set
    End Property
#End Region

    ' Default constructor
    Public Sub New()
        JoinEvents(True)
    End Sub

    Private Sub JoinEvents(ByVal join As Boolean)
        If join Then
            AddHandler (TextChanged), AddressOf WaterMark_Toggle
            'AddHandler (LostFocus), AddressOf WaterMark_Toggle
            'AddHandler (FontChanged), AddressOf WaterMark_FontChanged

            'No one of the above events will start immeddiatlly 
            'TextBox control still in constructing, so,
            'Font object (for example) couldn't be catched from within WaterMark_Toggle
            'So, call WaterMark_Toggel through OnCreateControl after TextBox is totally created
            'No doupt, it will be only one time call

            'Old solution uses Timer.Tick event to check Create property
        End If
    End Sub

    Private Sub WaterMark_Toggle(ByVal sender As Object, ByVal args As EventArgs)
        If Me.Text.Length <= 0 Then
            EnableWaterMark()
        Else
            DisableWaterMark()
            Me.Refresh() 'when is length=1 no hides thes watermark
        End If
    End Sub

    Private Sub WaterMark_FontChanged(ByVal sender As Object, ByVal args As EventArgs)
        If waterMarkTextEnabled Then
            oldFont = New Font(Font.FontFamily, Font.Size, Font.Style, Font.Unit)
            Refresh()
        End If
    End Sub

    Private Sub EnableWaterMark()
        'Save current font until returning the UserPaint style to false (NOTE: It is a try and error advice)
        oldFont = New Font(Font.FontFamily, Font.Size, Font.Style, Font.Unit)

        'Enable OnPaint Event Handler
        Me.SetStyle(ControlStyles.UserPaint, True)
        Me.waterMarkTextEnabled = True

        'Trigger OnPaint immediatly
        Refresh()

    End Sub

    Private Sub DisableWaterMark()
        'Disable OnPaint event handler
        Me.waterMarkTextEnabled = False
        Me.SetStyle(ControlStyles.UserPaint, False)

        'Return oldFont if existed
        If Not oldFont Is Nothing Then
            Me.Font = New Font(Font.FontFamily, Font.Size, Font.Style, Font.Unit)
        End If
    End Sub

    ' Override OnCreateControl 
    Protected Overrides Sub OnCreateControl()
        MyBase.OnCreateControl()
        WaterMark_Toggle(Nothing, Nothing)
    End Sub

    ' Override OnPaint
    Protected Overrides Sub OnPaint(ByVal e As System.Windows.Forms.PaintEventArgs)
        ' Use the same font that was defined in base class
        Dim drawFont As Font = New Font(Font.FontFamily, Font.Size, Font.Style, Font.Unit)
        ' Create new brush with gray color or 
        Dim drawBrush As SolidBrush = New SolidBrush(Me.WaterMarkColor) 'use WaterMarkColor
        ' Draw Test or WaterMark
        e.Graphics.DrawString(IIf(waterMarkTextEnabled, WaterMarkText, Text).ToString(), drawFont, drawBrush, New Point(0, 0))
        MyBase.OnPaint(e)
    End Sub

End Class
