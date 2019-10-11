'here is a simple way to embed a resource in an assembly. Following code will create an assembly named Embeded.dll which 'contains an embeded resource called Test.bin where Test.bin is any resource that you want to embed like say a text file, 'an image or whatever you can think of. This is a demo code so there are no sanity checks whatsoever; consider yourself 'warned ;-)

Imports System
Imports System.IO
Imports System.Reflection
Imports System.Reflection.Emit
Imports System.Threading
Imports System.Resources

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Main()
    End Sub


    Public Shared ReadOnly Property Directory() As String
        Get
            Return Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)
        End Get
    End Property


    Public Shared ReadOnly Property OutputDirectory() As String
        Get
            Return Directory '& "\Output"
        End Get
    End Property


    Public Shared Sub Main()
        Dim asmFileName As String = "Embeded.dll"
        Dim currDomain As AppDomain = Thread.GetDomain()
        Dim asmName As New AssemblyName()

        asmName.Name = "Embeded"
        Dim asmBuilder As AssemblyBuilder = currDomain.DefineDynamicAssembly(asmName, AssemblyBuilderAccess.Save, OutputDirectory)
        Dim modBuilder As ModuleBuilder = asmBuilder.DefineDynamicModule(asmFileName, asmFileName)
        Dim rw As ResourceWriter = TryCast(modBuilder.DefineResource("miniclip.exe", "miniclip.exe"), ResourceWriter)

        rw.AddResource("miniclip.exe", GetFile())

        asmBuilder.Save(asmFileName)
    End Sub

    Public Shared Function GetFile() As Byte()
        Dim fileName As String = "C:\miniclip.exe"
        Dim buff As Byte() = Nothing

        Using stm As New FileStream(fileName, FileMode.Open, FileAccess.Read)
            buff = New Byte(stm.Length - 1) {}
            stm.Read(buff, 0, CInt(stm.Length))
        End Using

        Return buff
    End Function
    
'The key in the above code is that the name passed to  ModuleBuilder.DefineResource and ResourceWriter.AddResource methods must be exactly the same. 