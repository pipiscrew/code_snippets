'souurce :
'http://www.developmentnow.com/g/17_2004_7_0_0_91080/Dynamic-assembly-not-persisting-correctly-.htm

Imports System.Reflection
Imports System.Reflection.Emit
Imports System.Threading

        'this will be created
        Dim myAsmFileName As String = "MyAsm.dll"

        Dim myDomain As AppDomain = Thread.GetDomain()
        Dim myAsmName As New AssemblyName()
        myAsmName.Name = "MyDynamicAssembly"

        Dim myAsmBuilder As AssemblyBuilder = myDomain.DefineDynamicAssembly(myAsmName, AssemblyBuilderAccess.RunAndSave)

        'can be ignored but the 'assembly name' will be : RefEmit_OnDiskManifestModule LOL
        Dim modBuilder As ModuleBuilder = myAsmBuilder.DefineDynamicModule(myAsmFileName, myAsmFileName)
        myAsmBuilder.DefineDynamicModule("MyDynamicAssembly")

        'can be ignored , example create empty class :)
        Dim typeBuilder As TypeBuilder = modBuilder.DefineType("MyDynamicClass", TypeAttributes.[Public])
        Dim constructorBuilder As ConstructorBuilder = typeBuilder.DefineDefaultConstructor(MethodAttributes.[Public])
        typeBuilder.CreateType()


        myAsmBuilder.AddResourceFile("makis", "miniclip.exe")


        ' To confirm that the resource file has been added to the manifest,
        ' we will save the assembly as MyAsm.dll. You can view the manifest
        ' and confirm the presence of the resource file by running 
        ' "ildasm MyAsm.dll" from the prompt in the directory where you executed
        ' the compiled code. 
        myAsmBuilder.Save(myAsmFileName)