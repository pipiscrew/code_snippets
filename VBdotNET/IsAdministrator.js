Imports System.Security.Principal
Imports System.Threading

    Public Function IsAdministrator() As Boolean
        AppDomain.CurrentDomain.SetPrincipalPolicy(PrincipalPolicy.WindowsPrincipal)
        Dim currentPrincipal As WindowsPrincipal = DirectCast(Thread.CurrentPrincipal, WindowsPrincipal)
        Return currentPrincipal.IsInRole(WindowsBuiltInRole.Administrator)
    End Function
    
    
    'OR
    
Imports System.Security.Principal

Module Security
    Public Function IsAdmin() As Boolean
        Dim id As WindowsIdentity = WindowsIdentity.GetCurrent()
        Dim p As WindowsPrincipal = New WindowsPrincipal(id)
        Return p.IsInRole(WindowsBuiltInRole.Administrator)
    End Function
End Module