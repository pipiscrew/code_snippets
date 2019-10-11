//http://www.basic4ppc.com/forum/basic4android-updates-questions/10958-measuring-measurestringheight-width-2.html#post61282
Dim Obj1 As Reflector
  Obj1.Target = cvs
  Obj1.Target = Obj1.GetField("bw")
  Obj1.Target = Obj1.RunMethod("getObject")
  Obj1.RunMethod("recycle")
    
 Log("about to init canvas " & pnl.Width) ' pnl.Width=4124
  cvs.Initialize(pnl)  ' **** re-adjust canvas to panel size 
  Log("OK canvas again")