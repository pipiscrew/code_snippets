    Private Declare Function FreeLibrary Lib "kernel32" (ByVal hLibModule As Integer) As Integer
    Private Declare Function LoadLibrary Lib "kernel32" Alias "LoadLibraryA" (ByVal lpLibFileName As String) As Integer
    Private Declare Function GetProcAddress Lib "kernel32" (ByVal hModule As Integer, ByVal lpProcName As String) As Integer


'1- exoyme ayth thn API klhsh gia ena native c++ DLL

    Public Declare Function BASSMOD_Init Lib "bassmod.dll" (ByVal device As Integer, ByVal freq As Integer, ByVal flags As BASSInit) As Integer



'2- ftiaxnoyme ena delegatora whatever name with the same parameters    
            Private Delegate Function TAKIS_Init(ByVal device As Integer, ByVal freq As Integer, ByVal flags As BASSInit) As Integer


kai meta ston code

        Dim lb As Long, pAddressOfFunctionToCall As Long
        lb = LoadLibrary("c:\bassmod.dll")
        pAddressOfFunctionToCall = GetProcAddress(lb, "BASSMOD_Init")

        Dim multiplyByTen As BASSMOD_Init = DirectCast(Marshal.GetDelegateForFunctionPointer(pAddressOfFunctionToCall, GetType(TAKIS_Init)), TAKIS_Init)

        Dim theResult As Integer = multiplyByTen(-1, 44100,0)

        MsgBox(theResult)
        FreeLibrary(lb)          <---------PANTA sto CLOSING ths formas otan xrhsimopoioyme LOADLIBRARY