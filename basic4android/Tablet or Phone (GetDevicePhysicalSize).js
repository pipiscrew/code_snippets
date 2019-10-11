//http://www.basic4ppc.com/forum/basic4android-updates-questions/17210-device-type.html

Sub Activity_Create(FirstTime As Boolean)
    If GetDevicePhysicalSize > 6 Then
        '7'' or 10'' tablet
    Else
        'phone
    End If
End Sub

Sub GetDevicePhysicalSize As Float
    Dim lv As LayoutValues
    lv = GetDeviceLayoutValues
    Return Sqrt(Power(lv.Height / lv.Scale / 160, 2) + Power(lv.Width / lv.Scale / 160, 2))
End Sub