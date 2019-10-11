//http://www.basic4ppc.com/forum/basic4android-updates-questions/18694-looping-activity-elements.html

Dim V As View
Dim p As Panel
Dim BT As Button
Dim E As EditText
Dim R As RadioButton
Dim Sp As Spinner
Dim L As Label

For i = 0 To Activity.NumberOfViews - 1
    V = Activity.GetView(i)
        Select V.Tag
            Case "button"
                BT = V
                BT.TextSize = fontsize
            Case  "et"
                E = V
                E.TextSize = fontsize
            Case  "label"
                L = V
                L.TextSize = fontsize
            Case "rb" 
                R = V
                R.TextSize = fontsize
            Case "spinner"
                Sp = V
                Sp.TextSize = fontsize
            Case "panel"
                p = V
                SetPanels(p)    ' do the same for all panel's views
    End Select 
Next
end sub