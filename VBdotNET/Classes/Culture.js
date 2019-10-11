Imports System
Imports System.Globalization
Imports System.Security.Permissions
Imports System.Threading
Public Class Form1
Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
' Displays the name of the CurrentCulture of the current thread.
Console.WriteLine("CurrentCulture is {0}.", CultureInfo.CurrentCulture.Name)
Console.WriteLine(Format(334.9, "0.00"))
' Changes the CurrentCulture of the current thread to th-TH.
Thread.CurrentThread.CurrentCulture = New CultureInfo("th-TH", False)
Console.WriteLine("CurrentCulture is now {0}.", CultureInfo.CurrentCulture.Name)
Console.WriteLine(Format(334.9, "0.00"))
'' Displays the name of the CurrentUICulture of the current thread.
'Console.WriteLine("CurrentUICulture is {0}.", CultureInfo.CurrentUICulture.Name)
'' Changes the CurrentUICulture of the current thread to ja-JP.
'Thread.CurrentThread.CurrentUICulture = New CultureInfo("ja-JP", False)
'Console.WriteLine("CurrentUICulture is now {0}.", CultureInfo.CurrentUICulture.Name)
End Sub
