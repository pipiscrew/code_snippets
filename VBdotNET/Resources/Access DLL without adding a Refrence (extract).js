''http://www.gamehacking.com/forums/visual-basic/11239-using-reflection-access-dll-out-adding-refrence.html

hi if you are looking for a way to use your DLL without adding a reference to your project that mean not shipping the DLL with your application but put it in a resource.Then this may help you.

************************************************** ***************************
Introduction:

Without adding reference using classLibrary methods at runtime is done through Reflection. In Refelection we have to use an Activator class. An Activator class is a class, which creates the instance of class method at runtime.

The generic terms of Reflection are:

* Assembly: Which hold the dll of classLibrary.
* Type: Hold the class of classLibrary.
* MethodInfo: Hold the method of class.
* Parameterinfo: Keep the parameter information of Method.

************************************************** *************************
i am here explaining how you can use a free* audio library to play *.xm,*.mod music in your application by reflection.Without using reflection it can be done by simply adding a reference to Bass.net API with your application but in this way u always have to ship your DLL files with your EXE which is not a standard idea for a trainer.

Note:
if you don't know how to use this library then read my previous post. Here


so first you need -
bass.dll
Bass.Net.dll
and a *.xm or *.mod file i am using "fly_in_space.mod" here

and add this all in a resource so at last you just need a single *.exe to run your application,now just start a new console application or you can try with windowsapp.

Quote
Imports system.io

Module Module1

Sub Main()

'Build the files //This copy files to HDD at runtime//

Dim temp = Path.GetTempFileName
File.WriteAllBytes(temp, My.Resources.fly_in_space) 'copy music file to temp dir.'

If Not System.IO.File.Exists("Bass.Net.dll") Then

'your DLL files will be copied in application directory otherwise you need to give full path where we 'load this DLL's '

File.WriteAllBytes("Bass.Net.dll", My.Resources.Bass_Net)
File.SetAttributes("Bass.Net.dll", FileAttributes.Hidden)
End If

If Not System.IO.File.Exists("Bass.dll") Then

File.WriteAllBytes("Bass.dll", My.Resources.bass)
File.SetAttributes("Bass.dll", FileAttributes.Hidden)
End If

'variables // Declaring reflection variables//

Dim objAss As System.Reflection.Assembly

Dim objType As Type

Dim objEnum As Type

Dim objMethod As System.Reflection.MethodInfo

'Get the Assembly // now loading the DLL //

objAss = System.Reflection.Assembly.LoadFrom(IO.Path.Combin e(My.Application.Info.DirectoryPath, "Bass.Net.dll"))




'now we have to declare each function separately..........{use link i give before if you don't know' about this functions}




'Init Section // A initialization function of bass.net library which sets parameters like output device,frequency 'etc. and it should be always declare//

objType = objAss.GetType("Un4seen.Bass.Bass") 'Object Class'

' the type defines how the functions of our DLL will be called as you see in previous link we use
' un4seen.Bass.Bass.BassInit("parameters")

objEnum = objAss.GetType("Un4seen.Bass.BASSInit")

objMethod = objType.GetMethod("BASS_Init", New Type() {GetType(Integer), GetType(Integer), objEnum, GetType(System.IntPtr), GetType(System.Guid)}) 'here we explain
'the datatypes of parameters'

Dim objParameters2 As Object() = {-1, 44100, 0, System.IntPtr.Zero, System.Guid.Empty}
'now passing parameter'

obj = Activator.CreateInstance(objType)

objMethod.Invoke(obj, objParameters2) 'calling whole function'




'Music Load Section // second function who load our music//

Dim music1 As Integer

Dim objParameters3 As Object() = {temp, 0, 0, 4, 0}

objEnum = objAss.GetType("Un4seen.Bass.BASSFlag")

objMethod = objType.GetMethod("BASS_MusicLoad", New Type() {GetType(String), GetType(Long), GetType(Integer), objEnum, GetType(Integer)})

obj = Activator.CreateInstance(objType)

Integer.TryParse(objMethod.Invoke(obj, objParameters3), music1)



'Play // 3rd function who play the music//

Dim objParameters4 As Object() = {music1, True}

objMethod = objType.GetMethod("BASS_ChannelPlay")

obj = Activator.CreateInstance(objType)

objMethod.Invoke(obj, objParameters4)



'waiting for user to exit'

Console.Writeline("press any key to exit")
Console.ReadKey()


'music free // Free all resources which is used by bass.dll,bass.net.dll"

Dim objParameters5 As Object() = {}
objMethod = objType.GetMethod("BASS_Free")
obj = Activator.CreateInstance(objType)
objMethod.Invoke(obj, objParameters5)


'Delete temp files and exit the application'

File.Delete(temp)
Console.Beep()

End Sub
End Module
If you register for bass.net then the trial version logo Removed from your application and it's free for personal use and all freeware applications.