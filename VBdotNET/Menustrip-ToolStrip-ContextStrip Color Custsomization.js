Public Class Form1

	'sto new ths formas
    Public Sub New()
        InitializeComponent()

        'sample we can sets the colors
        Dim kk As New CustomProfessionalColors
        kk.MenuItemSelectedGradientBeginC = Color.Red
		
        MenuStrip1.Renderer = New ToolStripProfessionalRenderer(kk)
        'sample we can sets the colors
        
        ToolStrip1.Renderer = New ToolStripProfessionalRenderer(New CustomProfessionalColors())
        ContextMenuStrip1.Renderer = New ToolStripProfessionalRenderer(New CustomProfessionalColors())

    End Sub
    
End Class
    

'h class
Class CustomProfessionalColors
    Inherits ProfessionalColorTable

    Public ButtonSelectedBorderC As Color = Color.FromArgb(255, 75, 75, 111)
    Public ButtonSelectedHighlightBorderC As Color = Color.FromArgb(255, 75, 75, 111)

    Public GripDarkC As Color = Color.FromArgb(255, 180, 179, 180)
    Public GripLightC As Color = Color.FromArgb(255, 243, 242, 244)

    Public ImageMarginGradientBeginC As Color = Color.FromArgb(255, 243, 242, 244)
    Public ImageMarginGradientMiddleC As Color = Color.FromArgb(229, 228, 231)
    Public ImageMarginGradientEndC As Color = Color.FromArgb(224, 223, 227)


    Public MenuBorderC As Color = Color.FromArgb(255, 180, 179, 180)

    Public MenuItemBorderC As Color = Color.FromArgb(255, 218, 218, 142)
    Public MenuItemSelectedGradientBeginC As Color = Color.FromArgb(255, 249, 252, 255) 'h [A=255, R=255, G=255, B=222]
    Public MenuItemSelectedGradientEndC As Color = Color.FromArgb(255, 255, 203, 136)

    Public OverflowButtonGradientEndC As Color = Color.FromArgb(255, 152, 151, 150)
    Public OverflowButtonGradientMiddleC As Color = Color.FromArgb(255, 180, 179, 180)

    Public SeparatorDarkC As Color = Color.FromArgb(255, 180, 179, 180)
    Public SeparatorLightC As Color = Color.FromArgb(255, 255, 255, 255) 'none

    Public ToolStripBorderC As Color = Color.FromArgb(255, 152, 151, 150)
    Public ToolStripDropDownBackgroundC As Color = Color.FromArgb(255, 243, 242, 244)

    Public ToolStripGradientBeginC As Color = Color.FromArgb(255, 243, 242, 244)
    Public ToolStripGradientMiddleC As Color = Color.FromArgb(0, 0, 0, 0) 'none
    Public ToolStripGradientEndC As Color = Color.FromArgb(255, 180, 179, 180)

    Public ToolStripPanelGradientBeginC As Color = Color.FromArgb(0, 0, 0, 0) 'none
    Public ToolStripPanelGradientEndC As Color = Color.FromArgb(0, 0, 0, 0) 'none

    Public MenuStripGradientBeginC As Color = Color.FromArgb(224, 223, 227)
    Public MenuStripGradientEndC As Color = Color.FromArgb(224, 223, 227)


    Public OverflowButtonGradientBeginC As Color = Color.FromArgb(255, 186, 185, 206) 'none

    Public Overrides ReadOnly Property ButtonSelectedBorder() As Color
        Get
            Return ButtonSelectedBorderC
        End Get
    End Property

    Public Overrides ReadOnly Property ButtonSelectedHighlightBorder() As Color
        Get
            Return ButtonSelectedHighlightBorder
        End Get
    End Property

    Public Overrides ReadOnly Property GripDark() As Color
        Get
            Return GripDarkC
        End Get
    End Property

    Public Overrides ReadOnly Property GripLight() As Color
        Get
            Return GripLightC
        End Get
    End Property

    Public Overrides ReadOnly Property ImageMarginGradientBegin() As Color
        Get
            Return ImageMarginGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property ImageMarginGradientEnd() As Color
        Get
            '  "Color [Control]"
            Return ImageMarginGradientEndC
        End Get
    End Property

    Public Overrides ReadOnly Property ImageMarginGradientMiddle() As Color
        Get
            '    "Color [Control]"
            Return ImageMarginGradientMiddleC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuBorder() As Color
        Get
            Return MenuBorderC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuItemBorder() As Color
        Get
            Return MenuItemBorderC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuItemSelectedGradientBegin() As Color
        Get
            Return MenuItemSelectedGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuItemSelectedGradientEnd() As Color
        Get
            Return MenuItemSelectedGradientEndC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuStripGradientBegin() As Color
        Get
            '  "Color [Control]"
            Return MenuStripGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property MenuStripGradientEnd() As Color
        Get
            '   "Color [Control]"
            Return MenuStripGradientEndC
        End Get
    End Property

    Public Overrides ReadOnly Property OverflowButtonGradientBegin() As Color
        Get
            '  "Color [Control]"

            Return OverflowButtonGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property OverflowButtonGradientEnd() As Color
        Get
            Return OverflowButtonGradientEndC
        End Get
    End Property

    Public Overrides ReadOnly Property OverflowButtonGradientMiddle() As Color
        Get
            Return OverflowButtonGradientMiddleC
        End Get
    End Property

    Public Overrides ReadOnly Property SeparatorDark() As Color
        Get
            Return SeparatorDarkC
        End Get
    End Property

    Public Overrides ReadOnly Property SeparatorLight() As Color
        Get
            '  "Color [Control]"
            Return SeparatorLightC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripBorder() As Color
        Get
            Return ToolStripBorderC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripDropDownBackground() As Color
        Get
            Return ToolStripDropDownBackgroundC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripGradientBegin() As Color
        Get
            Return ToolStripGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripGradientEnd() As Color
        Get
            Return ToolStripGradientEndC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripGradientMiddle() As Color
        Get
            '  "Color [Control]"
            Return ToolStripGradientMiddleC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripPanelGradientBegin() As Color
        Get
            Return ToolStripPanelGradientBeginC
        End Get
    End Property

    Public Overrides ReadOnly Property ToolStripPanelGradientEnd() As Color
        Get
            Return ToolStripPanelGradientEndC
        End Get
    End Property

End Class
