//http://www.darinhiggins.com/self-registering-com-net-assemblies/


Imports System.Runtime.InteropServices
Imports System.Reflection
 
''' <summary>
''' Provides Self-Registration functions for COM exposed .net assemblies
''' </summary>
''' <remarks></remarks>
Public Class DllRegisterFunctions
    Public Const S_OK As Integer = 0
    Public Const SELFREG_E_TYPELIB = &H80040200
    Public Const SELFREG_E_CLASS = &H80040201
 
    <DllExport.DllExport("DllRegisterServer", CallingConvention.Cdecl)> _
    Public Shared Function DllRegisterServer() As Integer
        Try
            Dim asm = Assembly.LoadFile(Assembly.GetExecutingAssembly.Location)
            Dim regAsm = New RegistrationServices()
            Dim bResult = regAsm.RegisterAssembly(asm, AssemblyRegistrationFlags.SetCodeBase)
            Return S_OK
        Catch ex As Exception
            Return SELFREG_E_TYPELIB
        End Try
    End Function
 
    <DllExport.DllExport("DllUnregisterServer", CallingConvention.Cdecl)> _
    Public Shared Function DllUnregisterServer() As Integer
        Try
            Dim asm = Assembly.LoadFile(Assembly.GetExecutingAssembly.Location)
            Dim regAsm = New RegistrationServices()
            Dim bResult = regAsm.UnregisterAssembly(asm)
            Return S_OK
        Catch ex As Exception
            Return SELFREG_E_TYPELIB
        End Try
    End Function
End Class