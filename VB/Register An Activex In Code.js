Private Declare Function REGISTER_MYDLL Lib "MYDLL.DLL" _
        Alias "DllRegisterServer" () As Long
Private Declare Function UNREGISTER_MYDLL Lib "MYDLL.DLL" _
        Alias "DllUnregisterServer" () As Long
        
Private Const ERROR_SUCCESS = &H0

Then, simply call

REGISTER_DLL

or

UNREGISTER_DLL

in your code to register or unregister the dll.

There are more advanced functions that enable you to specify the DLL to get registered on code instead of
mapping the actual DLL file in the declaration. But if you know your DLL's, then simply include the declarations in the EXE
and add
an option to Fix components by calling the respectivefunctions
This also works for OCX files