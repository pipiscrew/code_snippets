        Dim reg As Regex
        Dim res$ = ""
        reg = New Regex("IL(.*?): (.*?)(?=( |\r\n))") 
        '(?=( |\r\n))
        '^ends with " " or vbcrlf
        
        '"IL(.*?): (.*?) ") 'xwris to OR gia vbcrlf

        For Each m As Match In reg.Matches(tmp)
            res = res & (m.Groups(2).Value)
        Next
        txtBytes.Text = res
        
        
example:
Disassembly of MJESCore.Licence::GetUserInfo (060006CA)                                          
// Calling Convention: Default HasThis                                                           
// Returns: Void                                                                                 
// Code Size: 27 (0x1B)                                                                          
// .maxstack 8                                                                                   
IL_0000: 03               ldarg.1                                                                
IL_0001: 02               ldarg.0                       // ARG: This                             
IL_0002: 7BA7030004
IL_0007: 6F5802000A       callvirt String DeployLX.Licensing.v3.SecureLicense::get_Username()    
IL_000C: 51               stind.ref                                                              
IL_000D: 04               ldarg.2                                                                
IL_000E: 02               ldarg.0                       // ARG: This                             
IL_000F: 7BA7030004       ldfld 
                                                                
IL_0014: 6F5902000A       callvirt String DeployLX.Licensing.v3.SecureLicense::get_Organization()
IL_0019: 51               stind.ref                                                              
IL_001A: 2A               ret                                                                    
ARG: This  IL_0001, IL_000E        


'*****2nd
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim reg As Regex
        Dim res$ = ""
        reg = New Regex("//(.*?)(?=\r\n)")
        
        For Each m As Match In reg.Matches(TextBox1.Text)
            res = res & Trim(m.Groups(1).Value)
        Next

        TextBox2.Text = res
    End Sub
    
'kanei parse ta bytes
    
/*06000008*/
.method private hidebysig instance void method06000008() cil managed
{
    .maxstack 11
    L_0000: ldarg.0   // 02
    L_0001: newobj instance void [System.Windows.Forms]System.Windows.Forms.Button::.ctor()  // 732C00000A
    L_0006: stfld class [System.Windows.Forms]System.Windows.Forms.Button Crackme_2.Form1::  // 7D06000004
    L_000b: ldarg.0   // 02
    L_000c: call instance void [System.Windows.Forms]System.Windows.Forms.Control::SuspendLayout()  // 282D00000A
    L_0011: ldarg.0   // 02
    L_0012: ldfld class [System.Windows.Forms]System.Windows.Forms.Button Crackme_2.Form1::  // 7B06000004
    L_0017: ldc.i4.s 12  // 1F0C
    L_0019: ldc.i4.s 12  // 1F0C

 
