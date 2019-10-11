//http://www.basic4ppc.com/forum/basic4android-updates-questions/18267-sender-object-activity_touch.html
Labels don't have a Touch event in Basic4Android and you cannot set Activity as the EventName.
What exactly do you want to do in the Touch event ?
With the Reflection library you could add the Touch event to a Label.

However, I post the code for other users who might be interested in.


Sub Globals
    Dim lblTest As Label
    Dim reflect As Reflector
End Sub

Sub Activity_Create(FirstTime As Boolean)
    lblTest.Initialize("lblTest")
    Activity.AddView(lblTest, 10dip, 10dip, 200dip, 100dip)
    lblTest.Color = Colors.Blue
    lblTest.Text = "Test Test"
    
    reflect.Target = lblTest
    reflect.SetOnTouchListener("lblTest_Touch")
End Sub

Sub lblTest_Touch(lblTest1 As Object, Action As Int, X As Float, Y As Float, MotionEvent As Object) As Boolean
    Select Action
    Case Activity.ACTION_DOWN
        Activity.Title = "DOWN"
    Case Activity.ACTION_MOVE
        Activity.Title = "MOVE"
    Case Activity.ACTION_UP
        Activity.Title = "UP"
    End Select
    Return True
End Sub