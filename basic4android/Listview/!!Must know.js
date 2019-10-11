http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6537-listview-tutorial.html#post38231


ListView1.SingleLineLayout.ItemHeight = 100dip
Dim label1 As Label
label1 = ListView1.SingleLineLayout.Label 'set the label to the model label.
label1.TextSize = 20
label1.TextColor = Colors.Blue
label1.Gravity = Gravity.CENTER

Dim GD As GradientDrawable
GD.Initialize("TR_BL", Array As Int(Colors.Gray, Colors.LightGray))
Activity.Background = GD
ListView1.ScrollingBackgroundColor = Colors.Transparent


Tips
If you want a single line item with a bitmap (and do not need two lines and a bitmap), you can set the visible property of the second label to false.

If you have many items then you should enable the fast scroller:
Code:
ListView1.FastScrollEnabled = true