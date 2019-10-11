//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/15065-custom-transitions-between-activities.html#post85444
Sub SetAnimation(InAnimation As String, OutAnimation As String)
    Dim r As Reflector
    Dim package As String
    Dim in, out As Int
    package = r.GetStaticField("anywheresoftware.b4a.BA", "packageName")
    in = r.GetStaticField(package & ".R$anim", InAnimation)
    out = r.GetStaticField(package & ".R$anim", OutAnimation)
    r.Target = r.GetActivity
    r.RunMethod4("overridePendingTransition", Array As Object(in, out), Array As String("java.lang.int", "java.lang.int"))
End Sub