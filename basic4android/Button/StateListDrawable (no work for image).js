'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6589-statelistdrawable-example.html#post38524
    Dim tb As ToggleButton
    tb.Initialize("") 'no events will be caught
    Dim checked, unchecked As ColorDrawable
    checked.Initialize(Colors.Green, 10dip)
    unchecked.Initialize(Colors.Red, 10dip)

    Dim sld As StateListDrawable
    sld.Initialize
    sld.AddState(sld.State_Checked, checked)
    sld.AddState(sld.State_Unchecked, unchecked)
    tb.Background = sld
    tb.Checked = True
    tb.TextColor = Colors.Blue
    tb.TextSize = 20
    tb.Typeface = Typeface.DEFAULT_BOLD
    Activity.AddView(tb, 100dip, 100dip, 100dip, 100dip)