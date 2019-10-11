//http://www.basic4ppc.com/forum/basic4android-updates-questions/15470-detecting-screen-resolution.html

Sub Get_Screen_Resolution
    pScreenWidth=GetDeviceLayoutValues.Width
    pScreenHeight=GetDeviceLayoutValues.Height
    pScale=GetDeviceLayoutValues.Scale
    If pScale= 0.75 Then
    pDPI="120"
    End If
    If pScale= 1 Then
    pDPI="160"
    End If
    If pScale= 1.5 Then
    pDPI="240"
    End If
    If pScale=2 Then
    pDPI="320"
    End If
End Sub

Can anyone see what might be causing the 752 finding when it's an 800 screen? Also, the dpi
isn't 160, it's 149 (although 160 is close enough but I'm just wondering why it doesn't get that number).

-This is very common on Android 3.2 and 4.0 devices, they reserve the bottom 48 pixels for the taskbar.