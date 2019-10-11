//http://www.planetsourcecode.com/vb/scripts/ShowCode.asp?txtCodeId=44569&lngWId=1

--

@ VB
Code:

Private Declare Function GetACP Lib "Kernel32" () As Long
Private Declare Function WideCharToMultiByte Lib "Kernel32" (ByVal CodePage As Long, ByVal dwFlags As Long, ByVal lpWideCharStr As Long, ByVal cchWideChar As Long, ByVal lpMultiByteStr As Long, ByVal cchMultiByte As Long, ByVal lpDefaultChar As Long, lpUsedDefaultChar As Long) As Long

Public Const CP_UTF8 = 65001
Public Const CP_UTF7 = 65000
Public Const CP_UNICODELITTLE = 1200
Public Const CP_UNICODEBIG = 1201

Public Function WToA(ByVal st As String, Optional ByVal cpg As Long = -1, Optional lFlags As Long = 0) As String
    Dim stBuffer As String
    Dim cwch As Long
    Dim pwz As Long
    Dim pwzBuffer As Long
    Dim lpUsedDefaultChar As Long
    
    If cpg = -1 Then cpg = GetACP()
    pwz = StrPtr(st)
    cwch = WideCharToMultiByte(cpg, lFlags, pwz, -1, 0&, 0&, ByVal 0&, ByVal 0&)
    stBuffer = String$(cwch + 1, vbNullChar)
    pwzBuffer = StrPtr(stBuffer)
    cwch = WideCharToMultiByte(cpg, lFlags, pwz, -1, pwzBuffer, Len(stBuffer), ByVal 0&, ByVal 0&)
    WToA = Left$(stBuffer, cwch - 1)
End Function

--then this can be posted as UTF8!!
MsgBox.Show(StrConv(WToA("ΑΝΔΡΟΙΔάέίώςΆΈΙΏΣ", CP_UTF8, 0), vbUnicode))

@device :
Code:

Sub AStreams_NewData (Buffer() As Byte)
    Msgbox(BytesToString(Buffer,0,Buffer.Length,"UTF8"),"TEST")
End Sub


