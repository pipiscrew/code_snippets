Use CreateObject for ActiveX

When needed to use the function on ActiveX (OCX/DLL) we have to pass as parameter the Class ProgId. For example I have an OCX

COECRCOMLib.CoEcrCom

^as I saw it on VB6 object explorer

so someone will write
Set obj = CreateObject("COECRCOMLib.CoEcrCom")

but always an error appears!


So now we have to find the ProgId lets see how, open Regedit.exe goto key HKEY_CLASSES_ROOT\CLSID\
press CTRL+F search for class/control name in out example CoEcrCom, you will land to a key name ProgId the (Default) value of this key is the ProgId

for example in my example needed to write

Set obj = CreateObject("COECRCOMLib.CoEcrCom.1")

when is OCX, another way without search the registry is to drop the OCX on a form (test.frm), save PRJ, open test.frm to notepad
and you will see the HKEY_CLASSES_ROOT\CLSID\???? key

from
Object = "{BACB4CC3-A21B-11D5-8517-00304F03B28E}#1.4#0"; "CoEcrCom.ocx" <---this is your OCX filename

as result go to
HKEY_CLASSES_ROOT\CLSID\{BACB4CC3-A21B-11D5-8517-00304F03B28E}\ProgId and copy and paste the (default) value!

