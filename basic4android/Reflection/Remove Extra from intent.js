//http://www.basic4ppc.com/forum/bugs-wishlist/18192-wish-remove-extra-intent.html
Sub RemoveExtra(i As Intent, Key As String)
    Dim r As Reflector
    r.Target = i
    r.RunMethod2("removeExtra", Key, "java.lang.String")
End Sub