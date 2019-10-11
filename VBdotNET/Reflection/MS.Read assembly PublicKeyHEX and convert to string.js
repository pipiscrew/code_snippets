'source
'http://msdn.microsoft.com/en-us/library/system.reflection.assemblyname%28VS.95%29.aspx

Imports System.Reflection

Public Class Example
   Private Const mask As Byte = 15

   Public Shared Sub Demo(ByVal outputBlock As System.Windows.Controls.TextBlock)

      ' Use AssemblyName to parse full assembly names. In this example, the 
      ' assembly is mscorlib.dll.
      Dim name As String = GetType(String).Assembly.FullName
      Dim asmName As New AssemblyName(name) 

      outputBlock.Text &= String.Format("Name: {0}" & vbLf, asmName.Name)

      outputBlock.Text &= String.Format("Version: {0}" & vbLf, asmName.Version)

      outputBlock.Text &= String.Format("CultureInfo: {0}" & vbLf, asmName.CultureInfo)

      Dim pkt As New System.Text.StringBuilder()
      For Each b As Byte In asmName.GetPublicKeyToken()
          pkt.Append(Hex(b \ 16 And mask) & Hex(b And mask))
      Next b
      outputBlock.Text &= String.Format("PublicKeyToken: {0}" & vbLf, pkt.ToString())

      outputBlock.Text &= String.Format("FullName: {0}" & vbLf, asmName.FullName)

   End Sub

End Class

' This example produces output similar to the following:
'
'Name: mscorlib
'Version: 2.0.5.0
'CultureInfo: 
'PublicKeyToken: 7CEC85D7BEA7798E
'FullName: mscorlib, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e


'**********2nd way

Imports System.Reflection
Imports System.Reflection.Emit

Public Class Example

   Public Shared Sub Demo(ByVal outputBlock As System.Windows.Controls.TextBlock)

      ' Create an AssemblyName, set its properties, and use it to define a dynamic
      ' assembly.
      Dim aName As New AssemblyName("MyDynamicAssembly")
      aName.CultureInfo = New System.Globalization.CultureInfo("en-US")
      aName.Version = New Version("1.0.0.2001")

      Dim ab As AssemblyBuilder = _
         AppDomain.CurrentDomain.DefineDynamicAssembly(aName, _
                                                       AssemblyBuilderAccess.Run)
      Dim mb As ModuleBuilder = ab.DefineDynamicModule("Temp")
      Dim tb As TypeBuilder = mb.DefineType("Dummy", TypeAttributes.Public)

      Dim t As Type = tb.CreateType()

      outputBlock.Text &= String.Format("Assembly FullName: {0}" & vbLf, _
                                        t.Assembly.FullName) 
   End Sub
End Class

' This code example produces output similar to the following:
'
'Assembly FullName: MyDynamicAssembly, Version=1.0.0.2001, Culture=en-US, PublicKeyToken=null



'**********3rd way
    Dim publicKeyToken As Byte() = MyBase.GetType.Assembly.GetName.GetPublicKeyToken
    Me.h.ViewState.Item("38-58-AA-68-02-B1-22-3A") = IIf((publicKeyToken Is Nothing), "38-58-AA-68-02-B1-22-3A", BitConverter.ToString(publicKeyToken))
