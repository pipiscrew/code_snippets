//http://www.basic4ppc.com/forum/basic4android-updates-questions/15925-get-background-button.html#post90524
    Dim r As Reflector
    r.Target = b
    r.RunMethod2("setPressed", True, "java.lang.boolean")